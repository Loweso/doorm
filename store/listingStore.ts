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
