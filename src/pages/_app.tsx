import { ErrorFallbackProps, ErrorComponent, ErrorBoundary, AppProps } from "@blitzjs/next"
import { AuthenticationError, AuthorizationError } from "blitz"
import React, { useEffect } from "react"
import { withBlitz } from "blitz-client"
import { useRouter } from "next/router"
import "assets/styles/_globals.scss"
import "assets/styles/_app.scss"
import { PersistGate } from "redux-persist/integration/react"
import { Provider, RootStateOrAny, useSelector } from "react-redux"
import store, { persistor } from "store/index"
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles"
import Loading from "components/utility/Loading"
import { blue, purple } from "@mui/material/colors"

// this is elstar theme
import Theme from "../components/template/Theme"
import useDarkMode from "../utils/hooks/useDarkMode"

function RootErrorFallback({ error }: ErrorFallbackProps) {
  //const router = useRouter()
  if (error instanceof AuthenticationError) {
    return <div>Error: You are not authenticated</div>
    //return router.replace("/auth/login") // TODO: causes tsc error, need a 404 component
  } else if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={error.statusCode}
        title="Sorry, you are not authorized to access this"
      />
    )
  } else {
    return (
      <ErrorComponent
        statusCode={(error as any)?.statusCode || 400}
        title={error.message || error.name}
      />
    )
  }
}

// currentTheme
// I want material ui theme

//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//     // htmlFontSize: 8,
// const theme = useSelector((state: RootStateOrAny) => state.theme)
// const locale = useSelector((state) => state.locale.currentLang)
// const [isDark] = useDarkMode()

// const isDark = true
// console.log(Theme)
// const theme = useSelector((state: RootStateOrAny) => state.theme)
/*
//TODO: cannot seem to add custom variants colors
//TODO: cannot seem to add custom variants colors
    text: {
      // light: "#ffffff",
      main: "#3f50b5",
      dark: "#000000",
      contrastText: "#fff",
      // test: isDark ? "#1A2027" : "#fff",
    },
    icon: {
      light: "#ffffff",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
 */

//const [isDark] = useDarkMode()

//console.log("isDark",isDark);

// #E1306C
// mytheme = responsiveFontSizes(mytheme)
//
// console.log("mytheme.palette.mode", mytheme.palette.mode) // comes back as light
// mytheme.typography.subtitle1 = {
//   // color:  mytheme.palette.mode === "dark" ? "#fff" : "#1A2027",
//   color: mytheme.palette.mode === "dark" ? "#fff" : "#1A2027",
// }

//console.log("mytheme.breakpoints.up",mytheme.breakpoints.up)

// mytheme.typography.h3 = {
//   fontSize: '1.2rem',
//   '@media (min-width:600px)': {
//     fontSize: '1.5rem',
//   },
//   [mytheme.breakpoints.up('md')]: {
//     fontSize: '2.4rem',
//   },
// };

const onBeforeLift = () => {
  // take some action before the gate lifts
  console.log("onBeforeLift")

  // const theme = useSelector((state: RootStateOrAny) => state.theme)
  //
  // let mytheme = createTheme({
  //   palette: {
  //     //mode: isDark,
  //     primary: {
  //       light: "#ffffff",
  //       main: "#3f50b5",
  //       dark: "#002884",
  //       contrastText: "#fff",
  //     },
  //     secondary: {
  //       light: "#ff7961",
  //       main: "#f44336",
  //       dark: "#ba000d",
  //       contrastText: "#000",
  //     },
  //   },
  //   typography: {
  //     fontSize: 14,
  //     // fontFamily: ["Roboto", '"Helvetica Neue"'].join(","),
  //     fontFamily: ["Poppins", "Quicksand"].join(","),
  //     subtitle1: {
  //       fontSize: 10,
  //     },
  //     h1: {
  //       fontSize: 20,
  //       fontWeight: 700,
  //       paddingBottom: 15,
  //     },
  //     body1: {
  //       fontWeight: 500,
  //     },
  //     body2: {
  //       fontWeight: 500,
  //       // color: "#ffffff" // being overridden
  //     },
  //     caption: {
  //       fontWeight: 500,
  //       fontSize: 14,
  //       // color: "#ffffff" // being overridden
  //     },
  //   },
  //   components: {
  //     MuiButton: {
  //       styleOverrides: {
  //         root: ({ theme }) => ({
  //           // use JavaScript conditional expression
  //           color: theme.palette.mode === 'dark' ? '#fff' : theme.palette.primary.main,
  //         }),
  //       },
  //       variants: [
  //         {
  //           props: { variant: "fbbutton" },
  //           style: {
  //             // backgroundColor: "#2374F2",
  //             backgroundColor: "#4267B2",
  //             color: "#ffffff",
  //             // border: `2px dashed grey${blue[500]}`,
  //             "&:hover": {
  //               backgroundColor: "#3c52b2",
  //               color: "#dee3f8",
  //             },
  //           },
  //         },
  //         {
  //           props: { variant: "twbutton" },
  //           style: {
  //             backgroundColor: "#1D9BF0",
  //             color: "#ffffff",
  //             // border: `2px dashed grey${blue[500]}`,
  //             "&:hover": {
  //               backgroundColor: "#2374F2",
  //               color: "#dee3f8",
  //             },
  //           },
  //         },
  //         {
  //           props: { variant: "igbutton" },
  //           style: {
  //             backgroundColor: "#E1306C",
  //             color: "#ffffff",
  //             // border: `2px dashed grey${blue[500]}`,
  //             "&:hover": {
  //               backgroundColor: "#C13584",
  //               color: "#dee3f8",
  //             },
  //           },
  //         },
  //         {
  //           props: { variant: "ttbutton" },
  //           style: {
  //             // backgroundColor: "#2374F2",
  //             backgroundColor: "#00F2EA",
  //             color: "#ffffff",
  //             // border: `2px dashed grey${blue[500]}`,
  //             "&:hover": {
  //               backgroundColor: "#1D9BF0",
  //               color: "#dee3f8",
  //             },
  //           },
  //         },
  //         {
  //           props: { variant: "gbutton" },
  //           style: {
  //             // backgroundColor: "#2374F2",
  //             backgroundColor: "#CF4232",
  //             color: "#ffffff",
  //             // border: `2px dashed grey${blue[500]}`,
  //             "&:hover": {
  //               backgroundColor: "#cb2812",
  //               color: "#f8dede",
  //             },
  //           },
  //         },
  //         {
  //           props: { variant: "addlink" },
  //           style: {
  //             // backgroundColor: "#2374F2",
  //             backgroundColor: "#33c73b",
  //             color: "#ffffff",
  //             // border: `2px dashed grey${blue[500]}`,
  //             "&:hover": {
  //               backgroundColor: "#cb2812",
  //               color: "#ffffff",
  //             },
  //           },
  //         },
  //       ],
  //     },
  //     MuiTextField: {
  //       variants: [
  //         {
  //           props: { variant: "signup", color: "primary" },
  //           style: {
  //             background: `linear-gradient(45deg, ${blue[700]} 35%, ${blue[300]} 90%)`,
  //             color: "#fff",
  //           },
  //         },
  //       ],
  //       // styleOverrides: {
  //       //   root: {
  //       //     // this is styles for the new variants
  //       //     "&.subvariant-hovered": {
  //       //       "& fieldset": {
  //       //         border: "none"
  //       //       },
  //       //       "& .MuiInputBase-input:hover + fieldset": {
  //       //         border: `2px solid blue`
  //       //       },
  //       //       "& .MuiInputBase-input:focus + fieldset": {
  //       //         border: `2px solid blue`
  //       //       }
  //       //     }
  //       //   }
  //       // }
  //     },
  //   },
  // })
}

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    // <ErrorBoundary FallbackComponent={RootErrorFallback}>
    //   {getLayout(<Component {...pageProps} />)}
    // </ErrorBoundary>
    <Provider store={store}>
      <PersistGate loading={<Loading />} onBeforeLift={onBeforeLift} persistor={persistor}>
        <Theme>
          <ErrorBoundary FallbackComponent={RootErrorFallback}>
            {getLayout(<Component {...pageProps} />)}
          </ErrorBoundary>
        </Theme>
      </PersistGate>
    </Provider>
  )
}

export default withBlitz(MyApp)
