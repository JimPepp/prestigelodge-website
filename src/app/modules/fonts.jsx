import { Whisper, Cinzel, Bellefair } from "next/font/google";

const Fh1 = Whisper({ subsets: ['latin'], weight: '400' });
const Fh2h3 = Cinzel({ subsets: ['latin'], weight: '400' });
const Fh4h5 = Cinzel({ subsets: ['latin'], weight: '700' });
const Fh6 = Cinzel({ subsets: ['latin'], weight: '900' });
const Fparagraph = Bellefair({ subsets: ['latin'], weight: '400' })

export { Fh1, Fh2h3, Fh4h5, Fh6, Fparagraph }