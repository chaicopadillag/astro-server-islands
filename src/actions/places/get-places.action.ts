import { defineAction } from 'astro:actions';
import { prisma } from '../../database';

export const getPlaces = defineAction({
  async handler() {
    const places = await prisma.place.findMany();
    return places;
  }
});
