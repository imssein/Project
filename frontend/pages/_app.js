import MainLayout from "../components/common/MainLayout";
import "../styles/globals.css";
import wrapper from '../store/configureStore';

function MyApp({ Component, pageProps }) {
  return (
    <div className="pt-4 md: max-w-2xl md:mx-auto">
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </div>
  );
}

export default wrapper.withRedux(MyApp);