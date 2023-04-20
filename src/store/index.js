import { PERSIST_STORE_NAME } from "constants/app.constant"
import rootReducer from "./rootReducer"
import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
//import { createWrapper } from "next-redux-wrapper";

// TODO: build error
// https://stackoverflow.com/questions/57781527/how-to-solve-console-error-redux-persist-failed-to-create-sync-storage-falli
const middlewares = []

const persistConfig = {
  key: PERSIST_STORE_NAME,
  keyPrefix: "",
  storage,
  whitelist: ["auth", "theme", "locale"],
}

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer()),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middlewares),
  devTools: process.env.NODE_ENV === "development",
})

store.asyncReducers = {}

export const persistor = persistStore(store)

export const injectReducer = (key, reducer) => {
  if (store.asyncReducers[key]) {
    return false
  }
  store.asyncReducers[key] = reducer
  store.replaceReducer(persistReducer(persistConfig, rootReducer(store.asyncReducers)))
  persistor.persist()
  return store
}

export default store

// run and build error
// TypeError: (0 , _rootReducer__WEBPACK_IMPORTED_MODULE_1__.default) is not a function
