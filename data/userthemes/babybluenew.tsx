
// TODO: no light dark!!!
// Default theme for a user profile

/*
    "colors": {
      "dark": {
        "color": "#ffffff",
        "borderColor": "#c01212",
        "borderWidth": 2,
        "backgroundColor": "#00649b"
      },
      "light": {
        "color": "#ffffff",
        "borderColor": "#ffffff",
        "borderWidth": 2,
        "backgroundColor": "#A0DCFF"
      }
    },
 */

const options = {
  "layout": "babyblue",
  "bgColor": "#A0DCFF",
  "linkAlign": "center",
  "linkStyle": "userbabyblue",
  "linkWidth": "200",
  "fontFamily": "",
  "layoutName": "Baby Blue",
  "titleColor": "#ffffff",
  "titleStyle": "h6",
  "bgCardColor": "",
  "linkSpacing": 20,
  "descriptionColor": "#ffffff",
  "descriptionStyle": "body1",
  "links": {
    "type": "button",
    "variant": "userbabyblue",
    "style": {
      "color": "#ffffff",
      "borderColor": "#ffffff",
      "borderWidth": 2,
      "borderRadius": 2,
    },
  },
}

const muiTheme = {
  palette: {
    primary: {
      main: "#2edc00",
    },
  },
}


export const babyBlue = {
  options: options,
  muiTheme: muiTheme,
}

