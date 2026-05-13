import "./globals.css";

export const metadata = {
  title: "McDowall Insurance Services | Phoenix Insurance Agency",
  description:
    "Insurance written correctly, not just cheaply. Home, auto, renters, condo, and commercial insurance in Phoenix, Arizona.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
