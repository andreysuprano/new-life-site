import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';

import {theme} from '../assets/theme/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>)
}
