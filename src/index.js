import createFontFamilyString from './createFontFamilyString';

const MATCH_FONT_FAMILY = /(?:^(?:-|\\002d){2})|(?:^font(?:-family)?$)/i;
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
    root.walkDecls(MATCH_FONT_FAMILY, (decl) => {
      // eslint-disable-next-line no-param-reassign
      decl.value = decl.value.replace(/system-monospace/, SYSTEM_MONOSPACE_FONTS);
    });
  },
});
