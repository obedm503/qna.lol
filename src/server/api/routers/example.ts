import { object, number } from 'valibot';
import { createTRPCRouter, publicProcedure } from '../utils';

export const exampleRouter = createTRPCRouter({
  double: publicProcedure.input(number()).query(({ input }) => {
    return input * 2;
  }),
});
