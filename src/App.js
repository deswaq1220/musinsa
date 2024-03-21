import { motion, useScroll, useTransform } from "framer-motion";
import "./App.css";
import SpringPointer from "./components/SpringPointer";
import Photo from "./page/Photo";
import Footer from "./page/footer";
import Main from "./page/main";
function App() {
  const { scrollYProgress } = useScroll();

  // 스크롤 위치에 따라 회전 각도 설정
  const rotation = useTransform(
    scrollYProgress,
    [0, 1], // 스크롤 위치의 범위
    [0, 360] // 회전 각도의 범위 (0도에서 360도까지)
  );
  return (
    <motion.div className="app">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <SpringPointer />
      <Main />
      <Photo />
      <Footer />
      <motion.img
        src="/image/1.svg"
        alt="1"
        className="circle"
        style={{ rotate: rotation }}
      />
    </motion.div>
  );
}

export default App;
