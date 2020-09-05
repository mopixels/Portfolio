export const breakpoints = {
  sm: `max-width: 37.5em`, // 600px
  md: `max-width: 56.25em`, // 900px
  lg: `max-width: 75em`, // 1200px
  xl: `min-width: 112.5em`, // 1800px
}

export const mediaQueries = key => {
  return style => `@media only screen and (${breakpoints[key]}) { ${style} }`
}
