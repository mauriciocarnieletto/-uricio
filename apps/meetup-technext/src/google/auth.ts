import { OAuth2Client } from "google-auth-library";
import http from "http";
import url from "url";
import open from "open";
import destroy from "server-destroy";
// Download your OAuth2 configuration from the Google
const keys = require("../../credentials.json");

function getAuthenticatedClient(): Promise<OAuth2Client> {
  return new Promise((resolve, reject) => {
    const oAuth2Client = new OAuth2Client(
      keys.web.client_id,
      keys.web.client_secret,
      keys.web.redirect_uris[0]
    );

    const authorizeUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: [
        "https://www.googleapis.com/auth/forms.responses.readonly",
        "https://www.googleapis.com/auth/forms.body.readonly",
      ],
    });

    const server = http
      .createServer(async (req, res) => {
        try {
          if (req.url!.indexOf("/auth/callback") > -1) {
            const qs = new url.URL(req.url!, "http://localhost:3001")
              .searchParams;
            const code = qs.get("code");
            console.log(`Code is ${code}`);
            res.end("Authentication successful! Please return to the console.");
            const r = await oAuth2Client.getToken(String(code));
            oAuth2Client.setCredentials(r.tokens);
            console.info("Tokens acquired.");
            resolve(oAuth2Client);
            destroy(server);
          }
        } catch (e) {
          reject(e);
          destroy(server);
        }
      })
      .listen(3001, () => {
        // @ts-ignore
        open(authorizeUrl, { wait: false }).then((cp) => cp.unref());
      });
  });
}

export async function authenticate() {
  return await getAuthenticatedClient();
}
