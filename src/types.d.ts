declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}
