import MainLayout from '../components/common/MainLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='border pt-4 px-4 md: max-w-2xl md:mx-auto '>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
