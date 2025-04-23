import { execSync } from "child_process";

export function runGitTriggeredSync(): void {
  const result = execSync("yarn sync", { stdio: "inherit" });
  console.log("Docs synced to Slack Canvas:", result.toString());
}
