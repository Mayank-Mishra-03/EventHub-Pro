import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ViewTransitions } from "next-view-transitions";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "EventHub Pro - Manage Your Events Seamlessly",
  description:
    "EventHub Pro is your all-in-one solution for organizing, managing, and promoting events with ease. Streamline your event planning process today!",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <Navbar />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
