export const imports = {
  'src/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'),
  'src/Typography/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-typography-index" */ 'src/Typography/index.mdx'),
  'src/Typographyt/Header.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-typographyt-header" */ 'src/Typographyt/Header.mdx'),
  'src/basics/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-basics-button" */ 'src/basics/Button.mdx'),
  'src/display/Alert.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-display-alert" */ 'src/display/Alert.mdx'),
}
