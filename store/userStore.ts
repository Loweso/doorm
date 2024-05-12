import { createJSONStorage, persist } from "zustand/middleware";
import { create } from "zustand";

type State = {
  user: {
    user_ID: string;
    email: string;
    fullName: string;
    profilePicture: string;
    contactNum: string;
  } | null;
};

type Action = {
  setUser: (user: State["user"]) => void;
  clearUser: () => void;
};

export const userStore = create<State & Action>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () =>
        set({
          user: null,
        }),
    }),
    { name: "user-state" }
  )
);
