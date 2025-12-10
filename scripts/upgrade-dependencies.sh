#!/usr/bin/env bash

set -euo pipefail

# This script upgrades project dependencies to their latest versions.
# It uses npm for JavaScript projects. Adjust the package manager commands as needed.

# First, ensure we are in the project root directory
cd "$(dirname "$0")/.."

# List Packages to upgrade
# Find all directories containing a package.json file, which under root directory and exclude node_modules and root itself
PACKAGES=$(find . -type f -name "package.json" -not -path "*/node_modules/*" -not -path "./package.json" -exec dirname {} \;)

echo "Upgrading dependencies in the following packages:"
echo "$PACKAGES"

# Loop through each package and upgrade dependencies
for PACKAGE_DIR in $PACKAGES; do
  echo -e "\nUpgrading dependencies in $PACKAGE_DIR\n"
  cd "$PACKAGE_DIR"
  pnpm upgrade --latest
  pnpm exec eslint --fix . || echo "ESLint fix failed in $PACKAGE_DIR, please check manually."
  echo -e "\nBuilding package in $PACKAGE_DIR\n"
  # We call build to ensure dependencies are correctly built after upgrade
  pnpm build || echo "Build failed in $PACKAGE_DIR, please check manually."
  cd - > /dev/null
done

echo "Dependency upgrade process completed."
