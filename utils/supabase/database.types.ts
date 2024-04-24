export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      Users: {
        Row: {
          // the data expected from .select()
          id: number;
          created_at: Date;
          email: string;
          username: string;
          contactNo: number;
        };
      };
    };
  };
}
