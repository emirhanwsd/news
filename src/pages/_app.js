import "@/styles/globals.css";
import localizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";

dayjs.extend(localizedFormat);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
