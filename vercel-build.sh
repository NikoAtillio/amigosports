#!/bin/bash
set -e

echo "=== Current directory: $(pwd) ==="
echo "=== Listing files: ==="
ls -la

echo "=== Generating Prisma Client ==="
npx prisma generate --schema=./prisma/schema.prisma

echo "=== Building Next.js Application ==="
npx next build

echo "=== Verifying build output ==="
if [ -d ".next" ]; then
  echo "✓ .next directory exists"
  ls -la .next/
else
  echo "✗ .next directory not found!"
  exit 1
fi
