import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import "./main.css";

const Main = () => {
  // 각 요소별 애니메이션 설정
  const baseAnimation = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  // 각 요소별로 delay 시간을 다르게 설정
  const transitionSettings = [
    { ...baseAnimation.transition, delay: 0.4, duration: 0.5 },
    { ...baseAnimation.transition, delay: 0.6, duration: 0.5 },
    { ...baseAnimation.transition, delay: 0.8, duration: 0.5 },
    { ...baseAnimation.transition, delay: 1.0, duration: 0.5 },
    { ...baseAnimation.transition, delay: 1.2, duration: 0.5 },
  ];

  const url = "/video/SPRING_BRAND_BILLBOARD.mp4";

  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef(null);
  const [bigTextX, setBigTextX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const yPos = window.scrollY * 0.5; // 스크롤 속도를 조절하기 위한 배수 (조절 가능)
        videoRef.current.style.transform = `translateY(-${yPos}px)`;
      }
      const newBigTextX = -window.scrollY * 0.5; // 스크롤 속도에 따른 이동 속도를 조절할 수 있습니다.
      setBigTextX(newBigTextX);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="wrap">
      <section className="section1">
        <div className="mainTextWrap main1">
          <div className="boldText">
            <motion.div
              initial={baseAnimation.initial}
              animate={baseAnimation.animate}
              transition={transitionSettings[0]}
            >
              2024
            </motion.div>
          </div>
          <div className="lineText line1">
            <motion.div
              initial={baseAnimation.initial}
              animate={baseAnimation.animate}
              transition={transitionSettings[1]}
            >
              UP TO 80%
            </motion.div>
          </div>
        </div>

        <div className="mainTextWrap main2">
          <div className="lineText line2">
            <p className="start">
              <motion.p
                initial={baseAnimation.initial}
                animate={baseAnimation.animate}
                transition={transitionSettings[2]}
              >
                03.06 -
              </motion.p>
            </p>
            <p className="end">
              <motion.p
                initial={baseAnimation.initial}
                animate={baseAnimation.animate}
                transition={transitionSettings[3]}
              >
                03.19
              </motion.p>
            </p>
          </div>

          <motion.img
            src="/image/sec1Joo.png"
            alt="joo"
            className="joo"
            initial={baseAnimation.initial}
            animate={baseAnimation.animate}
            transition={transitionSettings[4]}
          />
          <div className="boldText spring">
            <motion.div
              initial={baseAnimation.initial}
              animate={baseAnimation.animate}
              transition={transitionSettings[4]}
            >
              SPRING
            </motion.div>
          </div>
        </div>

        <div className="mainTextWrap main3">
          <div className="boldText">
            <motion.div
              initial={baseAnimation.initial}
              animate={baseAnimation.animate}
              transition={transitionSettings[4]}
            >
              BILLBOARD
            </motion.div>
          </div>
          <motion.img
            src="/image/sec1Mi.png"
            alt="mijoo"
            className="mijoo"
            initial={baseAnimation.initial}
            animate={baseAnimation.animate}
            transition={transitionSettings[4]}
          />
        </div>
      </section>

      <div className="logo">
        <p>24</p>
        <p>SPRING BILLBOARD</p>
        <p>WITH JOO WOOJAE & MIJOO</p>
      </div>
      <motion.div className="videoWrap" ref={videoRef}>
        <video className="video" autoPlay loop muted width="100%" height="auto">
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      <section className="section2" style={{ marginTop: "-400px" }}>
        <div className="clipContainer">
          <div
            className="BigText"
            style={{ transform: `translateX(${bigTextX}px)` }}
          >
            <p>BRAND BILLBOARD</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
