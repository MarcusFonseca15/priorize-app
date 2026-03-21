import { ApiReference } from "@scalar/nextjs-api-reference";
const config = {
  url: "/api/openapi.json",
};

export const GET = ApiReference(config);

/*
import { ApiReference } from "@scalar/nextjs-api-reference";

import { auth } from "@/lib/auth";

export const GET = ApiReference({
  theme: "moon",
  config: {
    title: "Autenticação",
    spec: {
      content: () => auth.generateOpenAPISpec(),
    },
  },
});
*/
