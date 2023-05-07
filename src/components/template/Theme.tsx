import React from "react"
import { RootStateOrAny, useSelector } from "react-redux"
import { ConfigProvider } from "components/ui"
import useDarkMode from "utils/hooks/useDarkMode"
import { themeConfig } from "configs/theme.config"
import { useQuery } from "@blitzjs/rpc"
import getProfile from "profiles/queries/getProfile"
import { useSession } from "@blitzjs/auth"
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles"
import { blue, green, purple, red, brands, card, card_el, chip, chip_dark } from "configs/colors/default"
import { ModernTheme } from '../../../data/userthemes/modern'
import babyTheme from '../../../data/userthemes/babyblue.json'


// <ThemeProvider theme={theme}>

declare module '@mui/material/styles' {
  interface Theme {
    status?: {
      danger: React.CSSProperties['color'];
      info: React.CSSProperties['color'];
    };
  }

  interface Theme {
    brands: {
      facebook: React.CSSProperties['color'];
      instagram: React.CSSProperties['color'];
    };
  }

  interface Palette {
    neutral?: Palette['primary'];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }

  interface ThemeOptions {
    status: {
      info: React.CSSProperties['color'];
      danger: React.CSSProperties['color'];
    };
  }

  interface ThemeOptions {
    brands: {
      facebook: React.CSSProperties['color'];
      instagram: React.CSSProperties['color'];
    };
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    fbbutton: true
    igbutton: true
    twbutton: true
    ttbutton: true
    modern: true
    fancy: true
    animated: true
    outlined: true
    gbutton: true
    addlink: true
    modern1: true
    classic1: true
    tornpaper1: true // Torn Paper https://linktr.ee/s/templates/
    babyblue: true // baby blue https://linktr.ee/donnahaymagazine
    userbabyblue: true
    usernavyblue: true
    userseethrough: true
    userhoney: true
    useroranges: true
  }
}

declare module "@mui/material/Card" {
  interface CardPropsVariantOverrides {
    owned: true
  }
}


// declare module "@mui/material/Card" {
//   interface CardVariants {
//     owned: true
//   }
//   interface CardPropsVariantOverrides {
//     owned: true
//   }
// }

declare module "@mui/material/styles" {
  interface TypographyVariants {
    poster: React.CSSProperties
    radiolabel: React.CSSProperties
    h1center: React.CSSProperties
    modern1: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties
    radiolabel?: React.CSSProperties
    h1center?: React.CSSProperties
    modern1?: React.CSSProperties
  }

  interface CardVariantsOptions {
    owned?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    poster: true
    radiolabel: true
    h1center: true
    modern1: true
  }
}
// TypeError: Cannot read properties of undefined (reading 'muiName')
declare module "@mui/material/Input" {
  interface InputPropsVariantOverrides {
    signup: true
  }

  interface StandardTextFieldProps {
    signup: true
  }
}

// TODO: mui theme maker
// https://bareynol.github.io/mui-theme-creator/
const Themes = (props) => {
  // const theme = useSelector((state: RootStateOrAny) => state.theme)
  const session = useSession()

  const theme = useSelector((state: RootStateOrAny) => state.theme)
  const [profile]: any = useQuery(getProfile, { userId: Number(localStorage.id ? localStorage.id : session.userId), current: "yes" }, {
    enabled: !!session.userId, // The query will only run if `session.userId` exists.
  })

  const [userTheme, setUserTheme] = React.useState<any>();

  React.useEffect(() => {
    if (!session.userId) return;

    if (theme.layout.type === "modern") {
      setUserTheme(createTheme({
        // palette: {
        //   primary: {
        //     main: '#2678dd',
        //   },
        //   secondary: {
        //     main: '#BF616A',
        //   },
        //   neutral: {
        //     main: '#64748B',
        //     contrastText: '#fff',
        //   },
        // },
        typography: {
          fontFamily: 'Do Hyeon',
          [ModernTheme.titleStyle]: {
            color: ModernTheme.titleColor,
            textAlign: profile.theme.linkAlign

          },
          [ModernTheme.descriptionStyle]: {
            color: ModernTheme.descriptionColor,
            textAlign: profile.theme.linkAlign

          }
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                width: ModernTheme.linkWidth,
                linkSpacing: ModernTheme.linkSpacing,
              }
            }
          }
        },
        shape: {
          borderRadius: 16,
        },
        status: {
          info: '#<your_info_color_here>',
          danger: '#<your_danger_color_here>',
        },
        brands: {
          facebook: '#<your_facebook_color_here>',
          instagram: '#<your_instagram_color_here>',
        },
      }))
    } else if (theme.layout.type === "mytheme") {
      setUserTheme(createTheme({
        // palette: {
        //   primary: {
        //     main: '#c3d3e7',
        //   },
        //   secondary: {
        //     main: '#BF616A',
        //   },
        //   neutral: {
        //     main: '#64748B',
        //     contrastText: '#fff',
        //   },
        // },
        typography: {
          fontFamily: 'Do Hyeon',
          [profile.theme.titleStyle]: {
            color: profile.theme.titleColor,
            textAlign: profile.theme.linkAlign
          },
          [profile.theme.descriptionStyle]: {
            color: profile.theme.descriptionColor,
            textAlign: profile.theme.linkAlign
          },

        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                width: profile.theme.linkWidth,
                linkSpacing: profile.theme.linkSpacing,
              }
            }
          }
        },
        shape: {
          borderRadius: 16,
        },
        status: {
          info: '#<your_info_color_here>',
          danger: '#<your_danger_color_here>',
        },
        brands: {
          facebook: '#<your_facebook_color_here>',
          instagram: '#<your_instagram_color_here>',
        },
      }))
    } else if (theme.layout.type === "babyblue") {
      setUserTheme(createTheme({
        // palette: {
        //   primary: {
        //     main: '#2678dd',
        //   },
        //   secondary: {
        //     main: '#BF616A',
        //   },
        //   neutral: {
        //     main: '#64748B',
        //     contrastText: '#fff',
        //   },
        // },
        typography: {
          fontFamily: 'Do Hyeon',
          [babyTheme.titleStyle]: {
            color: babyTheme.titleColor,
            textAlign: babyTheme.linkAlign
          },
          [babyTheme.descriptionStyle]: {
            color: babyTheme.descriptionColor,
            textAlign: babyTheme.linkAlign
          }
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                width: babyTheme.linkWidth,
                linkSpacing: babyTheme.linkSpacing,
              }
            }
          }
        },
        shape: {
          borderRadius: 16,
        },
        status: {
          info: '#<your_info_color_here>',
          danger: '#<your_danger_color_here>',
        },
        brands: {
          facebook: '#<your_facebook_color_here>',
          instagram: '#<your_instagram_color_here>',
          // Add more brands if needed
        },
      }))
    }
  }, [theme])


  // const locale = useSelector((state: RootStateOrAny) => state.locale.currentLang)

  // border: `2px dashed grey${blue[500]}`,
  // @ts-ignore
  let muitheme = createTheme({
    // mode If connected to state, then mode may not work well here
    // mode: "dark",

    palette: {
      background: {
        default: '#000000',
        paper: 'rgba(231,228,228,0.5)',
      },
      primary: {
        light: "#ffffff",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
      action: {
        active: 'rgba(0, 0, 0, 0.54)',
        hover: '#000000',
        selected: '#000000',
        disabled: '#c2c1c1',
        disabledBackground: 'rgba(213,210,210,0.5)',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
      // brands: {
      //   default: '#000000',
      //   paper: 'rgba(231,228,228,0.5)',
      // },
    },
    typography: {
      fontSize: 14,
      // fontFamily: ["Roboto", '"Helvetica Neue"'].join(","),
      fontFamily: ["Poppins", "sans-serif"].join(","),
      subtitle1: {
        fontSize: 10,
      },
      h1: {
        fontSize: 24,
        fontWeight: 700,
        paddingBottom: 15,
      },
      h2: {
        fontSize: 20,
        fontWeight: 600,
        paddingBottom: 15,
      },
      h3: {
        fontSize: 25,
        fontWeight: 600,
        paddingBottom: 15,
      },
      h4: {
        fontSize: 14,
        fontWeight: 500,
        paddingBottom: 15,
      },
      h5: {
        fontSize: 18,
        fontWeight: 500,
        paddingBottom: 4,
      },
      h6: {
        fontSize: 16,
        fontWeight: 500,
        paddingBottom: 3,
      },
      body1: {
        fontWeight: 500,
        fontSize: 12,
      },
      body2: {
        fontWeight: 500,
        fontSize: 10,
        // color: "#ffffff" // being overridden
      },
      caption: {
        fontWeight: 500,
        fontSize: 10,
        // color: "#ffffff" // being overridden
      },
      poster: {
        fontSize: "4rem",
        color: "red",
      },
      radiolabel: {
        fontSize: 12,
      },
      h1center: {
        fontSize: 24,
        fontWeight: 700,
        marginBottom: 15,
        textAlign: "center"
      },
      modern1: {
        fontSize: "1rem",
        color: "#111111",
      },

    },
    components: {
      MuiChip: {
        styleOverrides: {
          root: ({ theme }) => ({
            // color: theme.palette.mode === "dark" ? card.color : card.color,
            //backgroundColor: "transparent",
            backgroundColor: theme.palette.mode === "dark" ? chip_dark.bg : chip.bg,
            color: theme.palette.mode === "dark" ? chip_dark.color : chip.color,
          }),
        },
      },
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            // Map the new variant to render a <h1> by default
            poster: "h3",
          },
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: false, // 💣
        },
      },
      MuiButton: {
        // styleOverrides: {
        //   root: ({ theme }) => ({
        //     // use JavaScript conditional expression
        //     color: theme.palette.mode === "dark" ? themeConfig.colors.dark.addcolor : themeConfig.colors.light.addcolor,
        //   }),
        // },
        variants: [
          {
            props: { variant: "fbbutton" },
            style: {
              // backgroundColor: "#2374F2",
              backgroundColor: "#e9efef",
              color: brands.facebook,
              // color: "#4267B2",
              // border: `2px dashed grey${blue[500]}`,
              // border: `2px dashed grey${blue[500]}`,
              "&:hover": {
                // backgroundColor: "#3c52b2",
                backgroundColor: brands.facebook_h_bg,
                color: "#dee3f8",
              },
            },
          },
          {
            props: { variant: "twbutton" },
            style: {
              backgroundColor: "#e9efef",
              color: brands.twitter,
              // border: `2px dashed grey${blue[500]}`,
              "&:hover": {
                backgroundColor: brands.twitter_h_bg,
                color: "#dee3f8",
              },
            },
          },
          {
            props: { variant: "igbutton" },
            style: {
              // backgroundColor: "#E1306C",
              backgroundColor: "#e9efef",
              color: brands.instagram,
              // border: `2px dashed grey${blue[500]}`,
              "&:hover": {
                backgroundColor: brands.instagram_h_bg,
                color: "#dee3f8",
              },
            },
          },
          {
            props: { variant: "ttbutton" },
            style: {
              // backgroundColor: "#2374F2",
              backgroundColor: "#e9efef",
              color: brands.tiktok,
              // border: `2px dashed grey${blue[500]}`,
              "&:hover": {
                backgroundColor: brands.tiktok_h_bg,
                color: "#dee3f8",
              },
            },
          },
          {
            props: { variant: "gbutton" },
            style: {
              // backgroundColor: "#2374F2",
              // backgroundColor: "#CF4232",
              backgroundColor: "#e9efef",
              color: brands.google,
              // border: `2px dashed grey${blue[500]}`,
              "&:hover": {
                backgroundColor: brands.google_h_bg,
                color: "#f8dede",
              },
            },
          },
          {
            props: { variant: "addlink" },
            style: {
              // backgroundColor: "#2374F2",
              // backgroundColor: theme.mode === "dark" ? themeConfig.colors.dark.addbgcolor : themeConfig.colors.light.addbgcolor,
              backgroundColor: theme.mode === "dark" ? red[500] : red[700],
              color: theme.mode === "dark" ? blue[100] : purple[100],
              // border: `2px dashed grey${blue[500]}`,
              "&:hover": {
                backgroundColor: theme.mode === "dark" ? blue[700] : purple[700],
                color: theme.mode === "dark" ? blue[100] : purple[100],
              },
            },
          },
          {
            props: { variant: "modern1" },
            style: {
              backgroundColor: theme.mode === "dark" ? red[500] : red[700],
              color: theme.mode === "dark" ? blue[100] : purple[100],
              "&:hover": {
                backgroundColor: theme.mode === "dark" ? blue[700] : purple[700],
                color: theme.mode === "dark" ? blue[100] : purple[100],
              },
            },
          },
          {
            props: { variant: "classic1" },
            style: {
              backgroundColor: theme.mode === "dark" ? red[500] : red[700],
              color: theme.mode === "dark" ? blue[100] : purple[100],
              "&:hover": {
                backgroundColor: theme.mode === "dark" ? blue[700] : purple[700],
                color: theme.mode === "dark" ? blue[100] : purple[100],
              },
            },
          },
          {
            props: { variant: "tornpaper1" },
            style: {
              backgroundColor: theme.mode === "dark" ? "#ffff00" : "#ff0000",
              color: theme.mode === "dark" ? blue[100] : purple[100],
              "&:hover": {
                backgroundColor: theme.mode === "dark" ? blue[700] : purple[700],
                color: theme.mode === "dark" ? blue[100] : purple[100],
              },
            },
          },
          {
            props: { variant: "babyblue" }, // babyblue for the site
            style: {
              backgroundColor: theme.mode === "dark" ? "#58bafc" : "#A0DCFF",
              color: theme.mode === "dark" ? "#ffffff" : "#ffffff",
              "&:hover": {
                // TODO: still need to figure out what's better, dark mode pallete or state
                backgroundColor: theme.mode === "dark" ? blue[700] : purple[700],
                color: theme.mode === "dark" ? blue[100] : purple[100],
              },
            },
          },
          {
            props: { variant: "userbabyblue" }, // babyblue for the site
            style: {
              backgroundColor: "#A0DCFF",
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "rgba(160,220,255,0.5)",
                color: "#ffffff",
              },
            },
          },
          {
            props: { variant: "usernavyblue" }, // user variants
            style: {
              minWidth: 200,
              maxWidth: 500,
              backgroundColor: "#191e3b",
              color: "#A0DCFF",
              "&:hover": {
                backgroundColor: "#090f38",
                color: "#A0DCFF",
              },
            },
          },
          {
            props: { variant: "userseethrough" }, // user variants
            style: {
              minWidth: 200,
              maxWidth: 500,
              backgroundColor: "#191e3b",
              color: "#A0DCFF",
              "&:hover": {
                backgroundColor: "rgba(9,15,56,0.5)",
                color: "#A0DCFF",
              },
            },
          },
          {
            props: { variant: "userhoney" }, // user variants
            style: {
              minWidth: 200,
              maxWidth: 500,
              backgroundColor: "#F0CA06",
              color: "#000000",
              "&:hover": {
                backgroundColor: "#d09312",
                color: "#000000",
              },
            },
          },
          {
            props: { variant: "useroranges" }, // user variants
            style: {
              minWidth: 200,
              maxWidth: 500,
              backgroundColor: "#ff8f00",
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "#d57601",
                color: "#ffffff",
              },
            },
          },
        ],
      },
      MuiTextField: {
        variants: [
          // TODO: cannot get custom variants to work for text fields
          // {
          //   props: { variant: "signup", color: "primary" },
          //   style: {
          //     background: `linear-gradient(45deg, ${blue[700]} 35%, ${blue[300]} 90%)`,
          //     color: "#fff",
          //   },
          // },
        ],
        styleOverrides: {
          root: {
            // this is styles for the new variants
            ".urlbox": {
              width: 100,
              height: 20,
            },
          },
        },
      },
      MuiInput: {
        variants: [
          // {
          //   props: { variant: "signup", color: "primary" },
          //   style: {
          //     background: `linear-gradient(45deg, ${blue[700]} 35%, ${blue[300]} 90%)`,
          //     color: "#fff",
          //   },
          // },
          // TODO: cannot get custom variants to work for text fields
          // {
          //   props: { variant: "outlined", color: "primary" },
          //   style: {
          //     background: `linear-gradient(45deg, ${blue[700]} 35%, ${blue[300]} 90%)`,
          //     color: "#fff",
          //   },
          // },
        ],
        // styleOverrides: {
        //   root: {
        //     // this is styles for the new variants
        //     "&.subvariant-hovered": {
        //       "& fieldset": {
        //         border: "none"
        //       },
        //       "& .MuiInputBase-input:hover + fieldset": {
        //         border: `2px solid blue`
        //       },
        //       "& .MuiInputBase-input:focus + fieldset": {
        //         border: `2px solid blue`
        //       }
        //     }
        //   }
        // }
      },
      // this does not work https://stackoverflow.com/questions/69455056/override-box-component-in-createtheme
      MuiContainer: {
        styleOverrides: {
          root: ({ theme }) => ({
            // color: theme.palette.mode === "dark" ? card.color : card.color,
            // backgroundColor: "transparent",
            backgroundColor: "transparent",
            // backgroundColor: theme.palette.mode === "dark" ? card.bg : card.bg,
          }),
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.mode === "dark" ? card.color : card.color,
            backgroundColor: theme.palette.mode === "dark" ? card.bg : card.bg,
          }),
        },
      },
      MuiCard: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.mode === "dark" ? card.color : card.color,
            backgroundColor: theme.palette.mode === "dark" ? card.bg : card.bg,
          }),
        },
        variants: [
          {
            props: { variant: "elevation" },
            style: {
              // backgroundColor: "#2374F2",
              backgroundColor: card_el.bg,
              color: card_el.color,
              "&:hover": {
                backgroundColor: card_el.bg_hover,
                color: card_el.color,
                borderShadow: "none"
              },
            },
          },
          // {
          //   props: { variant: "owned" },
          //   style: {
          //     // backgroundColor: "#2374F2",
          //     backgroundColor: card_el.bg,
          //     color: card_el.color,
          //     "&:hover": {
          //       backgroundColor: card_el.bg_hover,
          //       color: card_el.color,
          //       borderShadow: "none"
          //     },
          //   },
          // },
        ],
      },
    },
    status: {
      danger: '#e53e3e',
      info: '#3f50b5',
    },
    brands: {
      facebook: '#e53e3e',
      instagram: '#3f50b5',
    },
  })

  //TODO: proper dark mode hooked into state
  // https://blog.logrocket.com/theming-in-next-js-with-styled-components-and-usedarkmode/
  // breakpoints

  const currentTheme = {
    ...themeConfig, // TODO: don't use this any more
    ...theme,
    ...muitheme,
    ...userTheme
    // ...{ locale },
  }

  const Theme = {
    ...muitheme,
    ...userTheme
  }


  return (
    <ConfigProvider value={currentTheme}>
      {" "}
      <ThemeProvider theme={Theme}>{props.children}</ThemeProvider>
    </ConfigProvider>
  )
}

export default Themes
