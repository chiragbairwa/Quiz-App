//Firebase Context

// Auth
import { useRouter } from 'next/router'
import { AuthContextProvider } from '../firebase/authContext'
import ProtectedRoute from '../firebase/protectedRoute'

import "../styles/globals.css";

import "../styles/auth.css";
import "../styles/navbar.css";
import "../styles/header.css";
import "../styles/compiler.css";

import Head from "next/head";
import Header from "../components/header";
import NavBar from "../components/navbar";

const noAuthRequired = ['/login', '/signup']
function MyApp({ Component, pageProps }) {

  const router = useRouter();

  return (
    <>
      <Head>
        <title>College Codes</title>
        <meta
          name="description"
          content="Competitive coding environment for the students by the students"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AuthContextProvider>
      {noAuthRequired.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoute>
            <div style={{ display: "grid", gridTemplateColumns: "10rem auto" }}>
          <NavBar />
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
        </div>
          </ProtectedRoute>
        )}
        
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
