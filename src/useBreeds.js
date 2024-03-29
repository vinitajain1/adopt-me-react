import { useQuery } from "@tanstack/react-query";
import fetchBreed from "./fetchBreed";

export default function useBreeds(animal) {
  const breedsResult = useQuery(["breeds", animal], fetchBreed);

  return [breedsResult?.data?.breeds || [], breedsResult?.data?.status];
}
