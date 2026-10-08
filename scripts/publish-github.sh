#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd -- "$(dirname -- "$0")/.." && pwd)"
publish_directory="$(mktemp -d)"
trap 'rm -rf "$publish_directory"' EXIT
repository_url="$(git -C "$project_root" remote get-url origin)"
source_commit="$(git -C "$project_root" rev-parse --short HEAD)"

git -C "$publish_directory" init --quiet -b gh-pages
git -C "$publish_directory" remote add origin "$repository_url"
git -C "$publish_directory" config user.name "$(git -C "$project_root" log -1 --format=%an)"
git -C "$publish_directory" config user.email "$(git -C "$project_root" log -1 --format=%ae)"

if git -C "$publish_directory" ls-remote --exit-code --heads origin gh-pages >/dev/null 2>&1; then
  git -C "$publish_directory" fetch --quiet --depth=1 origin gh-pages
  git -C "$publish_directory" checkout --quiet -B gh-pages FETCH_HEAD
  git -C "$publish_directory" rm --quiet -r --ignore-unmatch .
fi

cp -a "$project_root/dist/." "$publish_directory/"
git -C "$publish_directory" add --all
if git -C "$publish_directory" diff --cached --quiet; then
  echo 'GitHub Pages already has the current website.'
  exit 0
fi
git -C "$publish_directory" commit --quiet -m "Publish website from $source_commit"
git -C "$publish_directory" push origin gh-pages
