import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ProjectCard({ title, image, link, desc }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 100 });
    }
  }, [inView, controls]);
  return (
    <>
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <a
          href={link}
          className="group overflow-hidden p-6 rounded-2xl cursor-pointer"
        >
          <div className="relative border border-ori_eme2 p-2 rounded-3xl">
            <div className="relative border border-ori_eme p-2 rounded-3xl">
              <img
                src={image}
                alt={title}
                width={400}
                height={300}
                className="w-full rounded-2xl h-56 transition-transform duration-300 group-hover:scale-105 border-2 border-ori_eme"
              />
            </div>
          </div>
        </a>

        <div className="serif flex flex-col american px-3">
          <a
            href={link}
            className="font-bold text-xl text-ori_eme cursor-pointer relative z-10 hover:underline"
          >
            {title}
          </a>
          <p className="text-ori_eme">{desc}</p>
        </div>
      </motion.div>
    </>
  );
}
