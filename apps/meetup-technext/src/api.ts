import express from "express";
import dotenv from "dotenv";
import { OAuth2Client } from "googleapis-common";
import { forms_v1 } from "@googleapis/forms";
import { getAnswers, getQuestions } from "./google/forms";
import { authenticate } from "./google/auth";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const formId = String(process.env.FORM_ID);

let auth: OAuth2Client;

async function refreshToken() {
  // @ts-ignore
  auth = await authenticate();
}

app.get("/applications", async (req, res) => {
  try {
    const form = await getQuestions(auth, formId);
    const { responses } = await getAnswers(auth, formId);

    const formStructure = form.items?.reduce((acc, item) => {
      if (item.title)
        // @ts-ignore
        acc[item.title] = String(item.questionItem?.question?.questionId);

      return acc;
    }, {}) as Record<string, string>;

    const applications = responses?.map(({ answers }) =>
      Object.entries(formStructure).reduce((acc, [title, questionId]) => {
        // @ts-ignore
        acc[title] = answers?.[questionId].textAnswers.answers[0].value;

        return acc;
      }, {} as Record<string, string>)
    );

    res.send(applications);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

app.get("/forms", async (req, res) => {
  try {
    const form = await getQuestions(auth, formId);
    const { responses } = await getAnswers(auth, formId);

    res.send({ form, responses });
  } catch (error) {
    console.error(error);
    res.send(error);
  }
});

app.get("/auth", async (req, res) => {
  await refreshToken();
  res.send("Authentication successful");
});

app.listen(port, () => {
  refreshToken();
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
