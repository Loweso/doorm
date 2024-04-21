import { Inter, Poppins } from "next/font/google";

const inter_init = Inter({ subsets: ["latin"], variable: "--font-roboto" });
const poppins_init = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const inter = inter_init.variable;
export const poppins = poppins_init.variable;
