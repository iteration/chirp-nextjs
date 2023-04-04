/* eslint-disable import/no-extraneous-dependencies */
import { test } from '@jest/globals';

// import type { Session } from 'next-auth';

test('getSecretMessage test', async () => {
  // https://www.youtube.com/watch?v=YRGo1H-qNQs
  // https://github.com/ResoluteError/jest-tRPC-example/tree/main/src/server/api/routers/__test

  throw new Error('TODO: implement this test');
  /*
  const mockSession: Session = {
    expires: new Date().toISOString(),
    user: { id: 'test-user-id', name: 'Test User' },
  };

  const caller = appRouter.createCaller({
    session: mockSession,
    prisma,
  });

  const result = await caller.example.getSecretMessage();

  expect(result).toBe('you can now see this secret message!');
*/
});
