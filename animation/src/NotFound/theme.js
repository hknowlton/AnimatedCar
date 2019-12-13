export default {
  carvana: {
    // 2.0 palette -- https://carvana.invisionapp.com/share/8CH6ZTCX5ER#/screens
    body: '#e4ecf0',
    blue: {
      primary: '#00aed9', // links, primary buttons, icons
      hover: '#018dc0', // hover state
      medium: '#00619e', // sticky header background
      dark: '#183558',
      stroke: '#122946', // for Dark Blue
      pastel: '#cfeaf2' // accent
    },
    gray: {
      background: '#f4f8fa', // main background within 1800px
      jet: '#363636',
      veryLight: '#d9dde9',
      light: '#ccc', // secondary copy, tabs and field outlines, lines
      medium: '#aab1c7', // icons, unselected heart icon
      dark: '#757989', // text and icons
      border: '#d8d8d8',
      veryDark: '#040404'
    },
    green: {
      primary: '#1dd08b', // success green
      dark: '#00812C'
    },
    red: {
      primary: '#ff7171', // alert red, faved
      dark: '#d87174' // delete background
    },
    yellow: {
      primary: '#feb948', // secondary buttons, attentions icons
      hover: '#eb9f23', // hover state
      pastel: '#fbf2de', // accent
      border: '#A97B33' // darker orange-like border
    },
    white: {
      primary: '#ffffff'
    },
    stroke: {
      blue: '#122946' // divider line color in header and footer
    },
    impersonationRed: '#ff0000'
  },
  StyledText: {
    fontFamily: '"Brandon Text", Lato, Helvetica, sans-serif',
    fontSize: '20px'
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1920
    }
  },
  // required or ToastManager will throw an error
  typography: {}
};
