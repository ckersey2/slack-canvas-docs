// #!/bin/bash
set -e

REPO_URL=$1

if [ -z "$REPO_URL" ]; then
  echo "Usage: ./scripts/initGitRemote.sh <git@github.com:user/repo.git or https://github.com/user/repo.git>"
  exit 1
fi

git init
git remote add origin "$REPO_URL"
git checkout -b main
git add .
git commit -m "Initial commit"
git push -u origin main

