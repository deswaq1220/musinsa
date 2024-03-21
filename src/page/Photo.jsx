import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import Img16 from "../image/sec10-1.jpg";
import Img17 from "../image/sec10-2.jpg";
import Img18 from "../image/sec10-3.jpg";
import Img19 from "../image/sec11.jpg";
import Img20 from "../image/sec12.jpg";
import Img1 from "../image/sec3-1.jpg";
import Img2 from "../image/sec3-2.jpg";
import Img3 from "../image/sec4-1.jpg";
import Img4 from "../image/sec4-2.jpg";
import Img5 from "../image/sec4-3.jpg";
import Img6 from "../image/sec5-1.jpg";
import Img7 from "../image/sec5-2.jpg";
import Img8 from "../image/sec6-1.jpg";
import Img9 from "../image/sec6-2.jpg";
import Img10 from "../image/sec6-3.jpg";
import Img11 from "../image/sec6-4.jpg";
import Img12 from "../image/sec7.jpg";
import Img13 from "../image/sec8.jpg";
import Img14 from "../image/sec9-1.jpg";
import Img15 from "../image/sec9-2.jpg";
import "./Photo.css";

const Photo = () => {
  const { ref: refSection3, inView: inViewSection3 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: refSection4, inView: inViewSection4 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: refSection5, inView: inViewSection5 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: refSection6, inView: inViewSection6 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: refSection7, inView: inViewSection7 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: refSection8, inView: inViewSection8 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: refSection9, inView: inViewSection9 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: refSection10, inView: inViewSection10 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: refSection11, inView: inViewSection11 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: refSection12, inView: inViewSection12 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: refSection13, inView: inViewSection13 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: refSection14, inView: inViewSection14 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: refSection15, inView: inViewSection15 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <motion.section className="section3" ref={refSection3}>
        <motion.img
          src={Img1}
          alt="img"
          className="img1"
          animate={{
            y: inViewSection3 ? 0 : 100,
            opacity: inViewSection3 ? 1 : 0,
          }}
          initial={{ y: 300, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.img
          src={Img2}
          alt="img"
          className="img2"
          animate={{
            y: inViewSection3 ? 0 : 100,
            opacity: inViewSection3 ? 1 : 0,
          }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
        />
      </motion.section>

      <motion.section className="section4" ref={refSection4}>
        <motion.div
          className="img3-wrap"
          animate={{
            y: inViewSection4 ? 0 : 100,
            opacity: inViewSection4 ? 1 : 0,
          }}
          initial={{ y: 300, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.img src={Img3} alt="img3" className="img3" />
        </motion.div>
        <motion.div className="sec4-img-wrap" ref={refSection5}>
          <motion.img
            src={Img4}
            alt="img4"
            className="img4"
            animate={{
              x: inViewSection5 ? 0 : 100,
              opacity: inViewSection5 ? 1 : 0,
            }}
            initial={{ x: -300, opacity: 0 }}
            transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
          />
          <motion.img
            src={Img5}
            alt="img5"
            className="img5"
            animate={{
              x: inViewSection5 ? 0 : 100,
              opacity: inViewSection5 ? 1 : 0,
            }}
            initial={{ x: 300, opacity: 0 }}
            transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.section>

      <motion.section className="section5" ref={refSection6}>
        <motion.img
          src={Img7}
          alt="img7"
          className="img7"
          animate={{
            x: inViewSection6 ? 0 : 100,
            opacity: inViewSection6 ? 1 : 0,
          }}
          initial={{ x: 300, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.img
          src={Img6}
          alt="img6"
          className="img6"
          animate={{
            y: inViewSection6 ? 0 : 100,
            opacity: inViewSection6 ? 1 : 0,
          }}
          initial={{ y: 300, opacity: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }}
        />
      </motion.section>

      <motion.section className="section6" ref={refSection7}>
        <motion.div
          className="sec6-img-wrap"
          animate={{
            x: inViewSection7 ? 0 : "-100%", // 오른쪽에서 왼쪽으로 이동
            opacity: 1, // 항상 불투명
          }}
          initial={{ x: "100%", opacity: 1 }} // 초기 오른쪽 위치에서 시작
          transition={{ duration: 2, ease: "easeInOut" }} // 2초 동안 움직임
        >
          <motion.img src={Img8} alt="img8" className="img8" />
          <motion.img src={Img9} alt="img9" className="img9" />
          <motion.img src={Img10} alt="img10" className="img10" />
          <motion.img src={Img11} alt="img11" className="img11" />
        </motion.div>
      </motion.section>

      <motion.section className="section7" ref={refSection8}>
        <motion.img
          src={Img12}
          alt="img12"
          className="img12"
          animate={{
            x: inViewSection8 ? 0 : 100,
            opacity: inViewSection8 ? 1 : 0,
          }}
          initial={{ x: 500, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.section>

      <motion.section className="section8" ref={refSection9}>
        <motion.img
          src={Img13}
          alt="img13"
          className="img13"
          animate={{
            y: inViewSection9 ? 0 : 100,
            opacity: inViewSection9 ? 1 : 0,
          }}
          initial={{ y: 500, opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </motion.section>

      <motion.section className="section9" ref={refSection10}>
        <motion.img
          src={Img14}
          alt="img14"
          className="img14"
          animate={{
            y: inViewSection10 ? 0 : 100,
            opacity: inViewSection10 ? 1 : 0,
          }}
          initial={{ y: 500, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.img
          src={Img15}
          alt="img15"
          className="img15"
          ref={refSection11}
          animate={{
            y: inViewSection11 ? 0 : 100,
            opacity: inViewSection11 ? 1 : 0,
          }}
          initial={{ y: 700, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.section>

      <motion.section className="section10">
        <motion.div className="sec10-img">
          <motion.img
            src={Img16}
            alt="img16"
            className="img16"
            ref={refSection12}
            animate={{
              y: inViewSection12 ? 0 : 100,
              opacity: inViewSection12 ? 1 : 0,
            }}
            initial={{ y: 500, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <motion.div className="sec10-img-wrap" ref={refSection13}>
            <motion.img
              src={Img17}
              alt="img17"
              className="img17"
              animate={{
                y: inViewSection13 ? 0 : 100,
                opacity: inViewSection13 ? 1 : 0,
              }}
              initial={{ y: 500, opacity: 0 }}
              transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }}
            />
            <motion.img
              src={Img18}
              alt="img18"
              className="img18"
              animate={{
                y: inViewSection13 ? 0 : 100,
                opacity: inViewSection13 ? 1 : 0,
              }}
              initial={{ y: 500, opacity: 0 }}
              transition={{ delay: 1.4, duration: 1, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="section11" ref={refSection14}>
        <motion.img
          src={Img19}
          alt="img19"
          className="img19"
          animate={{
            y: inViewSection14 ? 0 : 100,
            opacity: inViewSection14 ? 1 : 0,
          }}
          initial={{ y: 500, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.section>
      <motion.section className="section12" ref={refSection15}>
        <motion.img
          src={Img20}
          alt="img20"
          className="img20"
          animate={{
            y: inViewSection15 ? 0 : 100,
            opacity: inViewSection15 ? 1 : 0,
          }}
          initial={{ y: 500, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.section>
    </>
  );
};

export default Photo;
