"use strict";

import { forms as GoogleForms } from "@googleapis/forms";
import { OAuth2Client } from "googleapis-common";

export async function getAnswers(auth: OAuth2Client, formId: string) {
  // @ts-ignore
  const formsClient = GoogleForms({
    version: "v1",
    auth,
  });

  const res = await formsClient.forms.responses.list({
    formId,
  });

  return res.data;
}

export async function getQuestions(auth: OAuth2Client, formId: string) {
  // @ts-ignore
  const formsClient = GoogleForms({
    version: "v1",
    auth,
  });

  const res = await formsClient.forms.get({
    formId,
  });

  return res.data;
}
