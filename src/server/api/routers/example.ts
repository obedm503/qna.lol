import { object, string } from 'valibot';
import { createTRPCRouter, publicProcedure } from '../utils';

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure.input(string()).query(({ input }) => {
    return `Hello ${input}!`;
  }),
});
