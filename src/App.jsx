import Main from "./components/main";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <>
      <Main />
    </>
  );
}

export default App;
