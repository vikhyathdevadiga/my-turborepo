import { nextJsConfig } from "@repo/eslint-config/next-js";
console.log(process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY)
/** @type {import("eslint").Linter.Config} */
export default nextJsConfig;
