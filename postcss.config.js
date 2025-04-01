module.exports = {
  plugins: [
    require('tailwindcss'),    // Tailwind CSSをPostCSSプラグインとして使用
    require('autoprefixer'), 
    // require('@tailwindcss/postcss') // Update this part
    // Autoprefixerを使う
  ],
};
