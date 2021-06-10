import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/templatemo-style.css'
import '../public/fontawesome/css/all.min.css'
import { wrapper } from '../redux';


const MyApp = ({ Component, pageProps }) => {
  if (typeof window !== "undefined") {
    require("jquery");
    require("popper.js");
    require("bootstrap/dist/js/bootstrap");
  }
  
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)