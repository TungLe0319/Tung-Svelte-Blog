// src/lib/prisma.ts

import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();