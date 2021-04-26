import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../public/css/templatemo-style.css'
import '../public/fontawesome/css/all.min.css'
import { wrapper } from '../redux';


const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)