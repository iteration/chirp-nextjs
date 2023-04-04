/* eslint-disable import/no-extraneous-dependencies */
import { expect, test } from '@jest/globals';
import type { inferProcedureInput } from '@trpc/server';

import type { AppRouter } from '@/server/api/_app';
import { appRouter } from '@/server/api/_app';
import { createInnerTRPCContext } from '@/server/api/trpc';

test('hello test', async () => {
  const caller = appRouter.createCaller(
    createInnerTRPCContext({ session: null })
  );

  type Input = inferProcedureInput<AppRouter['example']['hello']>;

  const input: Input = {
    text: 'test',
  };

  const result = await caller.example.hello(input);

  expect(result).toStrictEqual({ greeting: 'Hello test' });
});
