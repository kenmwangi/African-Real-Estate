import superjson from "superjson";
import { initTRPC, TRPCError } from "@trpc/server";

import { type Context } from "./context";
import { verifyAuth } from "../../lib/auth";

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

const isAdmin = t.middleware(async ({ ctx, next }) => {
  const { req } = ctx;
  const token = req.cookies["user-token"];

  if (!token) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Missing user token",
    });
  }

  const verifiedToken = await verifyAuth(token);

  if (!verifiedToken) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Invalid user token",
    });
  }
  return next();
});

export const router = t.router;

export const publicProcedure = t.procedure;
export const adminProcedure = t.procedure.use(isAdmin);
