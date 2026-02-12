import { propertyService } from "@/services/property.service";

export function useProperty(id: number) {
  return propertyService.getById(id);
}

export function useSimilarProperties(id: number) {
  return propertyService.getSimilar(id);
}

export function useTotalProperties() {
  return propertyService.getTotalCount();
}
