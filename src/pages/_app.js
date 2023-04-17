import Head from "next/head";
import '../styles/app.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Provider } from 'react-redux';
import store from "@/store";
import NotificationProvider from "@/contexts/notification-context";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Work Life Balance Manager</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <NotificationProvider>
          <Component {...pageProps} />
        </NotificationProvider>
      </Provider>
    </>
  );
}
