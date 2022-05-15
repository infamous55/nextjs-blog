import type { AppProps } from 'next/app'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import '../styles/index.css'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
