import { getAvailability } from './places/get-availability.action';
import { getPlaces } from './places/get-places.action';

export const server = {
  getPlaces,
  getAvailability
};
