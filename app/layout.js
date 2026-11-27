import "./globals.css";
export const metadata = {
  title: "Gumballs & Overalls | Kids Consignment Boutique",
  description: "A playful place to shop pre-loved kids' clothing, toys, and more in Amherstburg, Ontario.",
};
export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}