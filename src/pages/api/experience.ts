import { NextApiRequest, NextApiResponse } from "next";

import { experiences } from "../../../data";

export default (req: NextApiRequest, res: NextApiResponse) => {
  // by default get response

  console.log(experiences);
  res.status(200).json({ experiences });
};
