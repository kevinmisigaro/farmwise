import Navbar from "@/components/navbar";
import "./globals.css";
import { CSPostHogProvider } from "@/utils/providers/PostHogProvider";
import Footer from "@/components/footer";
import TopBar from "@/components/TopBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Farmwise</title>
        <link rel="icon" type="image/png" href="/assets/images/farmwiselogo.png" />
        <meta property="og:url" content="https://www.farmwise.tz" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Farmwise" />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="We make farming possible and profitable for everyone."
        />
        <meta
          name="image"
          property="og:image"
          content="/assets/images/farmwiselogo.png"
        />
        <meta property="og:image:type" content="image/svg+xml" />
        <meta property="og:image:width" content="50" />
        <meta property="og:image:height" content="50" />
        <meta property="og:image:alt" content="logo" />
        <meta name="image" content="/assets/images/farmwiselogo.png" />
        <meta
          name="description"
          content="We make farming possible and profitable for everyone."
        />
        <meta name="twitter:image" content="/assets/images/farmwiselogo.png" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <CSPostHogProvider>
        <body>
          <TopBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
