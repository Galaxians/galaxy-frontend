import { configureStore } from "@reduxjs/toolkit";

import application from "./application/reducer";
import { updateVersion } from "./global/actions";
import farmsReducer from "./farms";
import toastsReducer from "./toasts";
import poolsReducer from "./pools";
import pricesReducer from "./prices";
import profileReducer from "./profile";
import teamsReducer from "./teams";
import achievementsReducer from "./achievements";
import blockReducer from "./block";
import multicall from "./multicall/reducer";
import user from "./user/reducer";
import swap from "./swap/reducer";
import lists from "./lists/reducer";
import transactions from "./transactions/reducer";
import mint from "./mint/reducer";
import burn from "./burn/reducer";

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    farms: farmsReducer,
    toasts: toastsReducer,
    pools: poolsReducer,
    prices: pricesReducer,
    profile: profileReducer,
    teams: teamsReducer,
    achievements: achievementsReducer,
    block: blockReducer,
    multicall,
    application,
    user,
    swap,
    lists,
    transactions,
    mint,
    burn,
  },
});

store.dispatch(updateVersion());

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
