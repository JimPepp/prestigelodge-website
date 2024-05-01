import { Whisper, Bellefair, Cinzel } from "next/font/google";

// Naming convention for fonts : F[fields]
const Fparagraph = Bellefair({ subsets: ["latin"], weight: "400", preload: true });
const Fh1 = Whisper({ subsets: ["latin"], weight: "400", preload: true });
const Fh2h3 = Cinzel({ subsets: ["latin"], weight: '400', preload: true });
const Fh4h5 = Cinzel({ subsets: ['latin'], weight: '600', preload: true })
const Fh6 = Cinzel({ subsets: ['latin'], weight: '900', preload: true })

export { Fparagraph, Fh1, Fh2h3, Fh4h5, Fh6 };