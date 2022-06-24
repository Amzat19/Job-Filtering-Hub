import Page from '../components/Page';
import '../styles/globals.css';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import jobSlice from '../reducers/jobSlice';
import '../styles/nprogress.css';
import Router from 'next/router';
import NProgress from "nprogress";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeError", () => NProgress.done());
Router.events.on("routeChangeComplete", () => NProgress.done());

const store = configureStore({
  reducer : {
    jobs : jobSlice
  }
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Page>
      <Component {...pageProps} />
    </Page>
    </Provider>
  )
}

export default MyApp
