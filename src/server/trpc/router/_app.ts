import { router } from "../trpc";
import { adminRouter } from "./admin";

export const appRouter = router({
  admin: adminRouter,
});

export type AppRouter = typeof appRouter;
