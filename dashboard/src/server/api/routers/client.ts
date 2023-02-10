import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const clientRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.client.findMany();
  }),
  getData: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.dataPoint.findMany({
      where: {
        clientId: input,
      },
    });
  }),
});
