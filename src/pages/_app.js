import "@/styles/globals.css";
import localizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";
import { API_URL } from "@/utils/helper";

dayjs.extend(localizedFormat);

console.log(API_URL);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
