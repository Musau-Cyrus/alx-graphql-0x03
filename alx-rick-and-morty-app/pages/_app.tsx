import "@/styles/globals.css";
import ErrorBoundary from "@/components/ErrorBoundary";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apolloClient";

function MyApp({ Component, pageProps}: AppProps){
  return(
    <ErrorBoundary>
      <Component {...pageProps}/>
    </ErrorBoundary>
  )
}

export default MyApp;