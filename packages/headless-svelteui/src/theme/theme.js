
import { writable } from 'svelte/store'

const theme = {
  // COLORS
  color: {
    transparent: 'transparent',
    info: "#2F80ED",
    success: "#27AE60",
    warning: "#E2B93B",
    danger: "#EB5757",
    white: '#ffff',
    black: [
      'rgba(0,0,0,.0125)',
      'rgba(0,0,0,.025)',
      'rgba(0,0,0,.05)',
      'rgba(0,0,0,.1)',
      'rgba(0,0,0,.2)',
      'rgba(0,0,0,.3)',
      'rgba(0,0,0,.4)',
      'rgba(0,0,0,.5)',
      'rgba(0,0,0,.6)',
      'rgba(0,0,0,.7)',
      'rgba(0,0,0,.8)',
      'rgba(0,0,0,.9)',
    ],
    gray: ['#E0E0E0', '#BDBDBD', '#828282', '#4F4F4F', '#333333'],
    teal: [
      'rgba(19, 52, 116, 0.05)',
      'rgba(19, 52, 116, 0.1)',
      'rgba(19, 52, 116, 0.3)',
      'rgba(19, 52, 116, 0.9)',
      '#133474',
      '#071D47',
    ],
    blue: [
      'rgba(47, 128, 237, 0.05)',
      'rgba(47, 128, 237, 0.1)',
      'rgba(47, 128, 237, 0.3)',
      'rgba(47, 128, 237, 0.95)',
      '#2F80ED',
      '#032D65',
    ],
    green: [
      'rgba(39, 174, 96, 0.05)',
      'rgba(39, 174, 96, 0.1)',
      'rgba(39, 174, 96, 0.3)',
      'rgba(39, 174, 96, 0.95)',
      '#2F80ED',
      '#032D65',
    ],
    orange: [
      'rgba(226, 185, 59, 0.05)',
      'rgba(226, 185, 59, 0.1)',
      'rgba(226, 185, 59, 0.3)',
      'rgba(226, 185, 59, 0.9)',
      '#E2B93B',
      '#5C490E',
    ],
    red: [
      'rgba(235, 87, 87, 0.05)',
      'rgba(235, 87, 87, 0.1)',
      'rgba(235, 87, 87, 0.3)',
      'rgba(235, 87, 87, 0.9)',
      '#EB5757',
      '#5E2020',
    ],
  },

  // FONTS FAMILY
  fonts: {
    body: 'Lato, sans-serif',
    heading: 'Lato, sans-serif',
  },

  // FONTS SIZE
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },

  // FONTS WEIGHT
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  // LINE HEIGHTS
  lineHeight: {
    normal: 'normal',
    none: 1,
    sm: 1.25,
    md: 1.375,
    base: 1.5,
    lg: 1.625,
    xl: '2',
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
  },

  // BORDER RADIUS
  radius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },

  // WIDTH
  width: {
    md: '80%',
    lg: '90%',
  },

  // SPACING
  // space: {
  //   none: '0',
  //   xxs: "8px",
  //   xs: "14px",
  //   s: "24px",
  //   m: "32px",
  //   l: "40px",
  //   xl: "56px",
  //   xxl: "72px",
  //   xxxl: "80px",
  // },

  // LETTER-SPACINGS
  letterSpacings: {
    none: '0',
    xxs: "-0.05em",
    xs: "-0.05em",
    s: "-0.05em",
    m: "0.025em",
    l: "0.05em",
    xl: "0.1em",
  },

  // TRANSITION
  transition: "all 0.3s ease-in-out",

  // BOX SHADOW
  shadow: {
    sm: "0 -0.4rem 0.9rem 0.2rem rgba(0,0,0,.1)",
    md: "0 -0.4rem 0.9rem 0.2rem rgba(0,0,0,.2)",
    lg: "0 -0.4rem 0.9rem 0.2rem rgba(0,0,0,.3)",
    xl: "0 -0.4rem 0.9rem 0.2rem rgba(0,0,0,.4)",
  },

  // SCALE
  scale: {
    sm: "0.25", 
    md: "0.5",
    lg: "0.75", 
    xl: "1.5",
  },
  
  scale: [0.25, 0.5, 0.75, 1, 1.5, 2, 4, 8],
  // BREAK POINTS
  breakpoints: ['20rem', '48rem', '64rem'],
}

theme.space = {
  none: "0",
  xxs: `${theme.scale[0]}rem`,
  xs: `${theme.scale[1]}rem`,
  s: `${theme.scale[2]}rem`,
  m: `${theme.scale[3]}rem`,
  l: `${theme.scale[4]}rem`,
  xl: `${theme.scale[5]}rem`,
  xxl: `${theme.scale[6]}rem`,
  xxxl: `${theme.scale[7]}rem`
};


export default writable(theme)
