module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts,md,svx}'],
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus'],
    // extend: {
    //   padding: ['hover'],
    // }
  },
  theme: {
    extend: {
      colors: {
        'primary': '#eeefe9',
        'secondary': '#e4e6dd'
      },
      flexGrow: {
        '2': 2
      },
      scale: {
        'max': '5',
      },
      backgroundImage: {
        'pattern-jigshaw': "url('/images/bg-pattern-jigshaw.svg')",
        'pattern-brick': "url('/images/bg-pattern-brick.svg')",
        'pattern-call': "url('/images/bg-pattern-call.svg')",
        'hero': "url('/images/layered-waves-haikei.svg')",
        'waves': "url('/images/bg-waves-rakit-id.svg')",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '120%': '120%',
        'biggest': '150%',
      },
      animation: {
        vote: 'vote 1s ease-in-out',
      },
      keyframes: {
        vote: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(-15deg)',
          },
          '50%': {
            transform: 'rotate(15deg)',
          },
          '75%': {
            transform: 'rotate(-5deg)',
          },
          '100%': {
            transform: 'rotate(0deg)',
          },
        },
      },
      typography: ({ theme }) => {
        return {
          DEFAULT: {
            css: {
              pre: {
                code: {
                  padding: '0 !important',
                  fontSize: theme('fontSize.base')[0]
                }
              },
              code: {
                borderRadius: theme('borderRadius.md'),
                paddingTop: theme('spacing.1'),
                paddingBottom: theme('spacing.1'),
                paddingLeft: theme('spacing.1'),
                paddingRight: theme('spacing.1'),
                fontFamily: 'inherit !important',
                fontWeight: '500 !important',
                color: theme('colors.slate.900'),
                backgroundColor: theme('colors.slate.300')
              },
              'code::before': {
                content: '""'
              },
              'code::after': {
                content: '""'
              },
              hr: {
                borderColor: theme('colors.slate.300')
              },
              ul: {
                marginTop: '0 !important',
                marginBottom: '0 !important'
              },
              li: {
                marginTop: '0 !important',
                marginBottom: '0 !important'
              },
              img: {
                marginLeft: 'auto',
                marginRight: 'auto'
              },
              'h1,h2,h3,h4,h5,h6': {
                a: {
                  color: 'inherit',
                  textDecoration: 'none',
                },
              }
            }
          },
          sm: {
            css: {
              pre: {
                code: {
                  fontSize: theme('fontSize.xs')[0]
                }
              }
            }
          },
          lg: {
            css: {
              h1: {
                fontSize: theme('fontSize.4xl')[0]
              }
            }
          },

          invert: {
            css: {
              hr: {
                borderColor: theme('colors.slate.700')
              },
              code: {
                color: theme('colors.slate.300'),
                backgroundColor: theme('colors.slate.700')
              },
              'a code': {
                color: theme('colors.white')
              },
              'pre, pre code': {
                color: theme('colors.slate.200'),
                backgroundColor: theme('colors.slate.800')
              }
            }
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
