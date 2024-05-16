import { create } from "zustand";

type Query = {
  amenity: string | null;
  address: string | null;
  name: string | null;
};

type State = {
  query: Query;
};

type Action = {
  setQuery: (query: Partial<Query>) => void;
  clearQuery: () => void;
};

export const useSearchStore = create<State & Action>((set) => ({
  query: {
    amenity: null,
    address: null,
    name: null,
  },
  setQuery: (newQuery) =>
    set((state) => ({ query: { ...state.query, ...newQuery } })),
  clearQuery: () =>
    set({
      query: {
        amenity: null,
        address: null,
        name: null,
      },
    }),
}));

export default useSearchStore;
