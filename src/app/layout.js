import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "Sultan's Dine",
  description: "An application for ordering food. We are Sultann's dine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <main className="flex min-h-screen flex-col items-center w-screen bg-gray-900">
          <div className="relative flex flex-col w-mobile overflow-y-scroll overflow-x-hidden max-h-[844px] mt-5 bg-sp-white ">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
