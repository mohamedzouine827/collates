import { Html, Main, NextScript, Head} from "next/document";



export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Collates</title>
        <meta name="description" content="Generate beautiful color palettes for your design projects with Collates, a user-friendly color palette generator." />
        <meta name="keywords" content="color palettes, color combinations, color picker, design tool, Collates" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.collates.me" />
        <meta property="og:title" content="Collates - Color Palette Generator" />
        <meta property="og:description" content="Generate beautiful color palettes for your design projects with Collates, a user-friendly color palette generator." />
        <meta property="og:url" content="https://www.collates.me" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Collates - Color Palette Generator" />
        <meta name="twitter:description" content="Generate beautiful color palettes for your design projects with Collates, a user-friendly color palette generator." />
        <meta name="twitter:image" content="https://www.collates.me" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
