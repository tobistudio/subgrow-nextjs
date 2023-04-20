import { combineReducers } from "redux"
import theme from "./theme/themeSlice"
import auth from "./auth"
import base from "./base"
import locale from "./locale/localeSlice"

const rootReducer = (asyncReducers) => (state, action: any) => {
  const combinedReducer = combineReducers({
    theme,
    auth,
    base,
    locale,
    ...asyncReducers,
  })

  console.log("problem with action", action)

  // @ts-ignore
  return combinedReducer(state, action)
}

// https://stackoverflow.com/questions/60777859/ts2339-property-tsreducer-does-not-exist-on-type-defaultrootstate
// export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
