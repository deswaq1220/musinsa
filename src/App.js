import { motion, useScroll } from "framer-motion";
import "./App.css";
import SpringPointer from "./components/SpringPointer";
import Photo from "./page/Photo";
import Footer from "./page/footer";
import Main from "./page/main";
function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <SpringPointer />
      <Main />
      <Photo />
      <Footer />
    </>
  );
}

export default App;
