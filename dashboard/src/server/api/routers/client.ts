import { DataPoint } from "@prisma/client";
import { z } from "zod";
import { processData } from "../../../utils/processData";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const clientRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.client.findMany();
  }),
  getData: protectedProcedure.input(z.string()).query(async({ ctx, input }) => {
    const data: DataPoint[] = await ctx.prisma.dataPoint.findMany({
      where: {
        clientId: input,
      },
    });
    return processData(data)
  }),
  getClient: protectedProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.client.findUnique({
      where: {
        id: input,
      },
    });
  }),
  create: protectedProcedure
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
  updateClient: protectedProcedure
    .input(
      z.object({
        oldId: z.string().min(3).max(128),
        id: z.string().min(3).max(128),
        clientKey: z.string().min(8).max(512),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.client.update({
        where: {
          id: input.oldId
        },
        data: {
          id: input.id,
          clientKey: input.clientKey,
        }
      });
    }),
  delete: protectedProcedure
    .input(z.string().min(3).max(128))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.client.delete({
        where: {
          id: input
        },
      });
    }),
});
