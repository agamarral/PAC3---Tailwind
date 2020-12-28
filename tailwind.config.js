module.exports = {
  important: true,
  purge: [
    './src/*.html',
    './src/scripts/*.js',
    './src/assets/styles/main.css'

  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'tablet': '421px',
      'laptop': '980px',
    },
    fontFamily: {
      'sans': ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'],
      'serif': ['Baskerville', 'Georgia', 'serif'],
      'mono': ['"Courier Prime"', 'monospace'],
    },

    extend: {
      colors: {
        red: {
          border: '#d13c08',
          strong: '#ed1c24',
          medium: '#fe2d35',
          light: '#f66b7c',
          control: '#f5b2a6',
          blockquote: '#ff6347',
        },

        blue: {
          border: '#00008b',
          strong: '#483d8b',
          medium: '#6a5acd',
          light: '#7b68ee',
          control: '#7997f1',
          blockquote: '#4169e1',
        },

        green: {
          border: '#008000',
          strong: '#556b2f',
          medium: '#2e8b57',
          light: '#6b8e23',
          control: '#daf0afec',
          blockquote: '#6b8e23',
        },

        yellow: {
          border: '#ff8c00',
          strong: '#ffd700',
          medium: '#eb966c',
          light: '#faf0e6',
          control: '#faf0e6',
          blockquote: '#eb966c',
        },
        grey: {
          strong: '#484848',
          medium: '#787878',
          light: '#c8c8c8',
          lightest: '#f1f1f1',

        }
      }
    },
  },
  variants: {
    fontWeight: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [],
}
