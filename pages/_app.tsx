import '../styles/globals.css'
import type { AppProps } from 'next/app'
import UserProvider from "../context/UserContext";
import { useChatSupport } from "../hooks/useChatSupport";

export default function App({ Component, pageProps }: AppProps) {
  useChatSupport();
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
