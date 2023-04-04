import { createNextApiHandler } from '@trpc/server/adapters/next';

import { env } from '@/env';
import { appRouter } from '@/server/api/_app';
import { createTRPCContext } from '@/server/api/trpc';

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    env.NODE_ENV === 'development'
      ? ({ path, error }) => {
          /* eslint-disable no-console */
          console.error(
            `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`
          );
        }
      : undefined,
});
