import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from "@/components/ui/toaster"
import { Metadata } from "next";



export default function App({ Component, pageProps }: AppProps) {
  return(
    <ClerkProvider><Component {...pageProps} />
      
    </ClerkProvider>
  ) ;
}
