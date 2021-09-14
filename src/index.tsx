import React from "react";
import ReactDOM from "react-dom";
import MulticallUpdater from "./state/multicall/updater";
import ListsUpdater from "./state/lists/updater";
import ApplicationUpdater from "./state/application/updater";
import TransactionUpdater from "./state/transactions/updater";
import App from "./App";
import Providers from "./Providers";
import "./i18n";

if ("ethereum" in window) {
  const ethwin = (window as any).ethereum as any;
  ethwin.autoRefreshOnNetworkChange = false;
}

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <>
        <ListsUpdater />
        <ApplicationUpdater />
        <TransactionUpdater />
        <MulticallUpdater />
      </>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
