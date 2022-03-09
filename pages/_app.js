import { WebProvider } from '@/Context/WebContext'
import { WidgetProvider } from '@/Context/WidgetContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <WebProvider>
      <WidgetProvider>
        <Component {...pageProps} />
      </WidgetProvider>
    </WebProvider>
  )
}

export default MyApp
