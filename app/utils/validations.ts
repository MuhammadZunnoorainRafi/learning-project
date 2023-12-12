import { z } from 'zod';

export const expenseValidations = z.object({
  title: z.string().min(1, 'Enter title please'),
  description: z.string().min(1, 'Enter description'),
});
