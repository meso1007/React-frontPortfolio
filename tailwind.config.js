module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // 使用するファイルのパス
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem', 
        'ex8xl': '8rem', 
      },
      backgroundImage: {
        wave1: "url('/bg-wave2.png')",
        wave2: "url('/bg-svg.svg')",
      },
      colors: {
        ori_white: "#f7f6f6",
        ori_blue2: "#43607D",
        ori_black: "#210F37",
        ori_green:"#03372c",
        ori_green2: "1FDD2A",
        ori_beige:"#FFEFEC",
        ori_yellow: "#FFB200",        
        ori_lightgreen:"#2C8101",
        ori_blue:"#0038D8",
        ori_orange:"#F03F00",
        ori_eme: "#009473",
        ori_eme2:"#00c6cf",
        ori_purple:"#8685ef",
        ori_gray:"#303030",
        ori_beige2: "#FAF1E6",
      },
    },
  },
  plugins: [],
};
