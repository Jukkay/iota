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
  create: publicProcedure
    .input(
      z.object({
        id: z.string().min(3).max(128),
        clientKey: z.string().min(8).max(512),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.client.create({
        data: {
          id: input.id,
          clientKey: input.clientKey,
        },
      });
    }),
  delete: publicProcedure
    .input(z.string().min(3).max(128))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.client.delete({
        where: {
          id: input
        },
      });
    }),
});
