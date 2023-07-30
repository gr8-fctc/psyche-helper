import { Livvic } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const livvic = Livvic({ subsets: ["latin"], style: "Light", weight: 300 });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={livvic.className}>
      <Component {...pageProps} />
    </main>
  );
}
