import createFontFamilyString from './createFontFamilyString';

const SYSTEM_MONOSPACE_FONTS = createFontFamilyString([
  'SFMono-Regular', // macOS
  'Menlo', // macOS & iOS
  'Monaco', // macOS
  'Consolas', // Windows
  'Liberation Mono', // Linux
  'Courier New', // fallback
  'monospace', // fallback
]);

export default () => ({
  postcssPlugin: 'postcss-system-monospace',
  Once(root) {
    root.walkDecls(
      // Match custom properties (`--custom-property`), `font`, and `font-family`
      /(?:^(?:-|\\002d){2})|(?:^font(?:-family)?$)/i,
      (decl) => {
        decl.value = decl.value.replace(/system-monospace/, SYSTEM_MONOSPACE_FONTS);
      },
    );
  },
});
