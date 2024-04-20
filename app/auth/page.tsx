"use client";
import supabaseBrowserClient from "@/utils/supabase/client";

export default function Login() {
  const loginWithGoogle = () => {
    const supabase = supabaseBrowserClient();
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: location.origin + "auth/callback",
      },
    });
  };

  return (
    <div className="h-20 w-20">
      <button onClick={loginWithGoogle}>ADSADSA</button>
    </div>
  );
}
