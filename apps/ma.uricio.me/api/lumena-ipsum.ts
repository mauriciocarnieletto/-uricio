import { VercelRequest, VercelResponse } from "@vercel/node";
import { data } from "./lumena-data";

export default (_req: VercelRequest, res: VercelResponse) => {
  res.status(200).send(data);
};
