// https://tailwindcss.com/docs/configuration/
// https://tailwindcss.com/docs/theme/
// https://gist.github.com/hacknug/9d8808701c57436a4da815fcfaeb9b2b
// https://www.viget.com/articles/tips-for-your-tailwind-config/

const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  prefix: '_',
  corePlugins: {
    float: false,
    objectFit: false,
    placeholderColor: false,
    negativeMargin: false,
    order: false,
    resize: false,
    letterSpacing: false,
    userSelect: false,
    backgroundAttachment: false,
    accessibility: false,
    divideWidth: false,
    space: false,
  },
  theme: {
    fill: theme => ({
      'primary': theme('colors.primary'),
      'darkengolden': theme('colors.darkengolden'),
      'golden': theme('colors.golden'),
      'white': theme('colors.white'),
    }),
    screens: {
      sm : {'max': '575px'},
      md : {'max': '767px'},
      lg : {'max': '991px'},
    },
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    fontWeight: {
      thin: 300,
      normal: 400,
      semibold: 600,
      bold: 700,
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    opacity: {
     '0': '0',
     '25': '.25',
     '50': '.5',
     '75': '.75',
     '10': '.1',
     '20': '.2',
     '30': '.3',
     '40': '.4',
     '60': '.6',
     '70': '.7',
     '80': '.8',
     '90': '.9',
     '100': '1',
    },
    borderRadius:{
      none : 'none',
      small :'3px',
      md :'10px',
      rounded  :'100px',
      circle : '50%',
    },
    fontSize:{
      xs: '11px',
      sm: '12px',
      text: '14px',
      title: '16px',
      md: '18px',
      lg: '20px',
      xl: '26px',
      xxl: '36px',
    },
    colors: {
      transparent: colors.transparent,
      primary : '#007d8f',
      lightprimary: '#f1f6f6',
      darkenprimary: '#006675',
      darkengolden: '#846700',
      nearwhite : '#f5f5f5',
      warning: '#e03634',
      success: '#99cc00',
      golden: '#ffce55',
      white: '#fff',
      black: '#000',
     
    },
    spacing: {
      auto : 'auto',
      none : '0px',
      xxs : '5px',
      xs : '10px',
      sm : '15px',
      md : '20px',
      lg : '30px',
      xl : '40px',
      xxl : '50px',
      xxxl : '60px',
    },
    minWidth:theme => theme('spacing'),
    maxWidth:theme => theme('spacing'),
    minHeight:theme => theme('spacing'),
    maxHeight:theme => theme('spacing'),
    
    extend: { 
    }
  },
  variants: {
    borderColor: [''],
    fontWeight: [''],
    opacity: [''],
    boxShadow: [''],
    textColor: [''],
    textDecoration: [''],
    backgroundColor: ['hover', 'focus'],
  },
  plugins: []
}
