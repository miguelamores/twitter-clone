import { createServerSideHelpers } from "@trpc/react-query/server";
import { appRouter } from "./api/root";
import { createInnerTRPCContext } from "./api/trpc";
import superjson from "superjson";

export function ssgHelper() {
  return createServerSideHelpers({
    router: appRouter,
    ctx: createInnerTRPCContext({ session: null }),
    transformer: superjson,
  });
}
