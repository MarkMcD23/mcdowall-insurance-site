import "./globals.css";

export const metadata = {
  title: "McDowall Insurance Services | Home, Auto, Life & Business Insurance",
  description:
    "McDowall Insurance Services helps families and business owners compare home, auto, renters, life, and commercial insurance in Arizona, Nevada, Texas, Virginia, Ohio, and Tennessee.",
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
