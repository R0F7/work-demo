import "./App.css";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import GetInTouch from "./components/GetInTouch/GetInTouch";

function App() {
  return (
    <main className="lg:w-[1600px] mx-auto mt-10 space-y-10 md:space-y-14 lg:space-y-20">
      <FAQ></FAQ>
      <GetInTouch></GetInTouch>
      <Footer></Footer>
    </main>
  );
}

export default App;
