import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="brand">AF Official</h1>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
