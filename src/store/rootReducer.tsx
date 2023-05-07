import { combineReducers } from "redux"
import theme from "./theme/themeSlice"
// import auth from "./auth"
import base from "./base"
// import locale from "./locale/localeSlice"

// TODO: dawn link state to our app, use for user, session, profile
const rootReducer = (asyncReducers) => (state, action: any) => {
  const combinedReducer = combineReducers({
    theme, // TODO: replace with mui theme
    // auth, // TODO: dawn replace with this site's store
    base, // TODO: not used
    // locale, // TODO: PHASE III multi lingual no need yet
    ...asyncReducers,
  })

  // TODO: TS2345: Argument of type 'any' is not assignable to parameter of type 'never'.

  // @ts-ignore
  return combinedReducer(state, action)
}

// https://stackoverflow.com/questions/60777859/ts2339-property-tsreducer-does-not-exist-on-type-defaultrootstate
// export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
