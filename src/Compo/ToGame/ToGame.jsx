import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./ToGame.css";

const ToGame = () => {
  const controls = useAnimation();

  useEffect(() => {
    const startJumpLoop = async () => {
      // 2秒待ってから開始
      await new Promise((res) => setTimeout(res, 2000));

      // 無限ループ
      while (true) {
        // ジャンプ1回目
        await controls.start({
          y: -20,
          transition: { type: "spring", stiffness: 300, duration: 0.1 },
        });
        await controls.start({
          y: 0,
          transition: { type: "spring", stiffness: 300, duration: 0.1 },
        });

        // ジャンプ2回目
        await controls.start({
          y: -20,
          transition: { type: "spring", stiffness: 300, duration: 0.1 },
        });
        await controls.start({
          y: 0,
          transition: { type: "spring", stiffness: 300, duration: 0.1 },
        });

        // 少し休憩（次の2回ジャンプまで）
        await new Promise((res) => setTimeout(res, 500));
      }
    };

    startJumpLoop();
  }, [controls]);

  return (
    <div className="toGame-container bg-ori_beige relative min-h-screen flex justify-center items-center flex-col overflow-hidden text-center">
      <motion.h1
        className="text-8xl design2"
        initial={{ opacity: 0, y: 200 }} // 初期状態：透明
        whileInView={{ opacity: 1, y: 0 }} // ビューポートに入ったら表示＋移動
        transition={{
          duration: 1, // 1秒
          ease: "easeOut", // スムーズに
        }}
        viewport={{ once: true, amount: 0.3 }} // ビューポートに20%入ったら発火
      >
        JUST TRY MY DEMO GAME!!!
      </motion.h1>

      <div className="text-center pb-96 flex flex-col space-y-2">
        <motion.h2 className="text-9xl design"
        initial={{ opacity: 0, y: 200 }} // 初期状態：透明
        whileInView={{ opacity: 1, y: 0 }} // ビューポートに入ったら表示＋移動
        transition={{
          duration: 1.5, // 1秒
          ease: "easeOut", // スムーズに
        }}
        viewport={{ once: true, amount: 0.4 }} // ビューポートに20%入ったら発火
        >BLCKJACK</motion.h2>
        <motion.a
          animate={controls}
          href="/games"
          className="cta-button mx-20 mt-5 py-3 hover:bg-yellow-400 text-black font-bold text-3xl rounded-lg bg-ori_yellow transform hover:translate-y-[-5px] transition-all"
        >
          Game On!
        </motion.a>
      </div>
      <div className="absolute bottom-[-50%] left-0 w-full h-[50%] flex justify-center items-end">
        <div className="absolute half-circle flex-col justify-center w-full h-[200%] bg-ori_eme rounded-t-full shadow-lg">
          <div className="relative top-4 flex flex-row justify-center gap-[20vw] z-20">
            <div className="eye cursor-pointer border-2 border-black relative w-[150px] h-[150px] bg-white rounded-full flex justify-center items-center shadow-xl">
              <div className="eye-ball absolute w-[120px] h-[120px] bg-green-600 rounded-full"></div>
              <div className="pupil absolute w-[40px] h-[40px] bg-black rounded-full top-[25%] left-[25%] transition-transform duration-200 hover:scale-110 animate-eye-move"></div>
            </div>
            <div className="eye cursor-pointer border-2 border-black  relative w-[150px] h-[150px] bg-white rounded-full flex justify-center items-center shadow-xl">
              <div className="eye-ball absolute w-[120px] h-[120px] bg-green-600 rounded-full"></div>
              <div className="pupil absolute w-[40px] h-[40px] bg-black rounded-full top-[25%] left-[25%] transition-transform duration-200 hover:scale-110 animate-eye-move"></div>
            </div>
          </div>

          <div className="relative mt-5 w-[120px] h-[60px] bg-black rounded-full mx-auto">
            <div className="smile absolute w-full h-[50%] bg-white rounded-t-full top-[0%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToGame;
