import '../styles/globals.css'

import '../styles/navbar.css'
import '../styles/header.css'
import '../styles/compiler.css'

import Header from '../components/header'

import NavBar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '10rem auto' }}>
        <NavBar />
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}

export default MyApp
