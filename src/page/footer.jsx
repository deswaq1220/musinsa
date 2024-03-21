import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./footer.css";
const Footer = () => {
  const { ref: refSection, inView: inViewSection } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    duration: { duration: 0 },
  };

  const controls = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    if (inViewSection) {
      controls.start({
        opacity: 1,
        rotate: [0, 10, -10, 0], // 각도의 변화
        transition: {
          delay: 5,
          duration: 2,
          ease: "easeInOut",
          loop: Infinity,
        },
      });
      controls2.start({
        opacity: 1,
        rotate: [0, 10, -10, 0], // 각도의 변화
        transition: {
          delay: 3.2,
          duration: 2,
          ease: "easeInOut",
          loop: Infinity,
        },
      });
    } else {
      controls.start({ opacity: 0 }); // 섹션 밖이면 이미지를 숨김
    }
  }, [controls, controls2, inViewSection]);

  return (
    <motion.div className="section13-wrap" ref={refSection}>
      <motion.div
        className="sec13-1"
        variants={variants}
        initial="hidden"
        animate={inViewSection ? "visible" : "hidden"}
      >
        <motion.div className="sec13-img-wrap" variants={variants}>
          <motion.div
            className="sticker sticker1"
            variants={variants}
            transition={{ delay: 0.5, duration: 0 }}
          ></motion.div>
          <motion.div
            className="sticker sticker2"
            variants={variants}
            transition={{ delay: 1, duration: 0 }}
          ></motion.div>
          <motion.img
            className="img21"
            alt="img21"
            src="/image/sec13.jpg"
            variants={variants}
          />
        </motion.div>
        <motion.div className="sec13-text-wrap">
          <motion.div className="sec13-2024">
            <motion.p
              className="sec13-2024-1"
              variants={variants}
              transition={{ delay: 1, duration: 0 }}
            >
              2024
            </motion.p>
            <motion.p
              className="sec13-2024-2"
              variants={variants}
              transition={{ delay: 1.2, duration: 0 }}
            >
              2024
            </motion.p>
            <motion.p
              className="sec13-2024-3"
              variants={variants}
              transition={{ delay: 1.4, duration: 0 }}
            >
              2024
            </motion.p>
            <motion.p
              className="sec13-2024-4"
              variants={variants}
              transition={{ delay: 1.6, duration: 0 }}
            >
              2024
            </motion.p>
          </motion.div>

          <motion.div className="sec13-spring">
            <motion.p
              className="sec13-spring-1"
              variants={variants}
              transition={{ delay: 1.8, duration: 0 }}
            >
              SPRING
            </motion.p>
            <motion.p
              className="sec13-spring-2"
              variants={variants}
              transition={{ delay: 2, duration: 0 }}
            >
              SPRING
            </motion.p>
            <motion.p
              className="sec13-spring-3"
              variants={variants}
              transition={{ delay: 2.2, duration: 0 }}
            >
              SPRING
            </motion.p>
            <motion.p
              className="sec13-spring-4"
              variants={variants}
              transition={{ delay: 2.4, duration: 0 }}
            >
              SPRING
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div className="sec13-mijoo-wrap">
          <motion.img
            className="sec13-mijoo-1"
            src="/image/sec14.jpg"
            alt="mijoo"
            variants={variants}
            transition={{ delay: 2.6, duration: 0 }}
          />
          <motion.img
            className="sec13-mijoo-2"
            src="/image/sec14.jpg"
            alt="mijoo"
            variants={variants}
            transition={{ delay: 2.8, duration: 0 }}
          />
          <motion.img
            className="sec13-mijoo-3"
            src="/image/sec14.jpg"
            alt="mijoo"
            variants={variants}
            transition={{ delay: 3, duration: 0 }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="sec13-img-sticker-wrap"
        variants={variants}
        initial="hidden"
        animate={inViewSection ? "visible" : "hidden"}
      >
        <motion.img
          className="sec13-img-sticker img-sticker1"
          src="/image/sec15.png"
          alt="img"
          variants={variants}
          animate={controls2}
          initial={{ opacity: 0 }}
        />
      </motion.div>

      <motion.div
        className="sec13-star-wrap"
        variants={variants}
        initial="hidden"
        animate={inViewSection ? "visible" : "hidden"}
      >
        <motion.img
          src="/image/star.svg"
          alt="img"
          className="star"
          variants={variants}
          transition={{ delay: 3.2, duration: 0 }}
        />
      </motion.div>

      <motion.div
        className="sec13-img-wrap-2"
        variants={variants}
        initial="hidden"
        animate={inViewSection ? "visible" : "hidden"}
      >
        <motion.div
          className="sticker3 sticker3-1"
          variants={variants}
          transition={{ delay: 3.6, duration: 0 }}
        ></motion.div>
        <motion.div
          className="sticker3 sticker3-2"
          variants={variants}
          transition={{ delay: 3.8, duration: 0 }}
        ></motion.div>
        <motion.img
          className="img24"
          alt="img24"
          src="/image/sec16.jpg"
          variants={variants}
          transition={{ delay: 3.4, duration: 0 }}
        />
      </motion.div>

      <motion.div
        className="sec13-img-sticker-wrap2"
        variants={variants}
        initial="hidden"
        animate={inViewSection ? "visible" : "hidden"}
      >
        <motion.img
          className="sec13-img-sticker2 img-sticker2"
          src="/image/sec17.png"
          alt="img"
          variants={variants}
          animate={controls}
          initial={{ opacity: 0 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Footer;
