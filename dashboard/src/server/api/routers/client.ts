import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const clientRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.client.findMany();
  }),
});
