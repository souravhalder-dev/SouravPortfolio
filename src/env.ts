import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod";

export const env = createEnv({
  server: {
    API_URL: z.string().optional().default("http://localhost:3000/api"),
  },
  client: {},
  runtimeEnv: {
    API_URL: process.env.API_URL,
  },
});
