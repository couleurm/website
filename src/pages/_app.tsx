import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import '../../public/styles.css';
import GenericMeta from '../components/Meta';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GenericMeta />
      {/* @ts-ignore */}
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
