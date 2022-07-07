import Footer from "../components/common/Footer";
import Nav from "../components/common/Nav";
import Intro from "../components/intro/index";

export default function Home() {
  return (
    <div className="text-center">
      <Nav />
      <Intro />
      <Footer />
    </div>
  )
}
