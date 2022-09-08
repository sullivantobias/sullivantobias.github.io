import { appWithTranslation } from "next-i18next";

import "../styles/globals.scss";

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

export default appWithTranslation(App);
