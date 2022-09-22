import MainLayout from "../components/common/MainLayout";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <div className=" mx-auto max-w-2xl bg-gray-4 h-full">
    {/* <MainLayout> */}
      <div className="">
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </div>
    {/* </MainLayout> */}
    </div>
  );
}

export default MyApp;
