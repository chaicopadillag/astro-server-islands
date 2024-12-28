import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const getAvailability = defineAction({
  accept: 'json',
  input: z.string(),
  handler: async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const isAvailable = Math.random() > 0.5;
    const spotsAvailable = Math.floor(Math.random() * 10);

    let message = isAvailable ? `There are ${spotsAvailable} spots available` : 'No spots available';

    return {
      isAvailable,
      message
    };
  }
});
