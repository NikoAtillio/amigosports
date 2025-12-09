#!/bin/bash
set -e

echo "=== Generating Prisma Client ==="
npx prisma generate --schema=./prisma/schema.prisma

echo "=== Building Next.js Application ==="
npx next build
