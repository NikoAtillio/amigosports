#!/bin/bash
set -e

echo "=== Cleaning previous build ==="
rm -rf .next 2>/dev/null || true

echo "=== Generating Prisma Client ==="
npx prisma generate --schema=./prisma/schema.prisma

echo "=== Building Next.js Application ==="
npx next build

echo "=== Verifying build output ==="
if [ -d ".next" ]; then
  echo "✓ Build successful: .next directory created"
  echo "✓ routes-manifest.json exists: $(ls -la .next/routes-manifest.json 2>/dev/null && echo 'YES' || echo 'NO')"
else
  echo "✗ Build failed: .next directory not found!"
  exit 1
fi
