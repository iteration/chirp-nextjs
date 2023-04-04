/* eslint-disable import/no-extraneous-dependencies */
import { expect, test } from '@jest/globals';
import type { Example, PrismaClient } from '@prisma/client';
import { mockDeep } from 'jest-mock-extended';

import { appRouter } from '@/server/api/_app';
import { createInnerTRPCContext } from '@/server/api/trpc';

test('getAll test', async () => {
  const prismaMock = mockDeep<PrismaClient>();

  const mockOutput: Example[] = [
    {
      id: 'test-user-id',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  prismaMock.example.findMany.mockResolvedValue(mockOutput);

  const caller = appRouter.createCaller(
    createInnerTRPCContext({ session: null, prisma: prismaMock })
  );

  const result = await caller.example.getAll();

  expect(result).toHaveLength(mockOutput.length);
  expect(result).toStrictEqual(mockOutput);
});
