import "../styles/globals.css";
import useGeolocation from "react-hook-geolocation";

function MyApp({ Component, pageProps }) {
  const geolocation = useGeolocation();

  return (
    <div className=" mx-auto max-w-2xl bg-gray-4 h-full">
      <div className="">
        <Component
          {...pageProps}
          latitude={geolocation.latitude}
          longitude={geolocation.longitude}
        />
      </div>
    </div>
  );
}

export default MyApp;
