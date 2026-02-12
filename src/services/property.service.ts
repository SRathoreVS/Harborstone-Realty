import { PROPERTIES } from "@/data/properties.mock";

export const propertyService = {
  getAll() {
    return PROPERTIES;
  },

  getById(id: number) {
    return PROPERTIES.find((p) => p.id === id) || null;
  },

  getSimilar(id: number, limit = 3) {
    return PROPERTIES.filter((p) => p.id !== id).slice(0, limit);
  },

  getTotalCount() {
    return PROPERTIES.length;
  },
};
