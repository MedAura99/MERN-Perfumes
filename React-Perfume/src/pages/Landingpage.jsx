import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./landing.css";
import logo from "../assets/logo.jpeg";


const Landingpage = () => {
  const navigate = useNavigate();

  const [visibleLetters, setVisibleLetters] = useState([]);
  const [showLogo, setShowLogo] = useState(false);
  const [animateLogo, setAnimateLogo] = useState(false);

  const taglineText = "Unnleash the Power of Fragrance";
  const taglineLetters = taglineText.split("");

  useEffect(() => {
    // Show logo after 1s
    const showLogoTimeout = setTimeout(() => setShowLogo(true), 1000);

    // Move logo after 3s
    const moveLogoTimeout = setTimeout(() => setAnimateLogo(true), 3000);

    // Animate tagline letters starting after 1s
    let i = 0;
    const taglineInterval = setInterval(() => {
      setVisibleLetters((prev) => [...prev, taglineLetters[i]]);
      i++;
      if (i >= taglineLetters.length) clearInterval(taglineInterval);
    }, 120);

    // Redirect after 8s
    const redirectTimeout = setTimeout(() => navigate("/home"), 5000);

    // Cleanup
    return () => {
      clearTimeout(showLogoTimeout);
      clearTimeout(moveLogoTimeout);
      clearInterval(taglineInterval);
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <div className="landing-container">
      {showLogo && (
        <div className={`landing-logo ${animateLogo ? "move-to-header" : ""}`}>
          <img className="logo1" src={logo} alt="Alamgeer Perfumes" />
        </div>
        
      )}

      <div className="content">
        <h1 className="main-title">AF Official</h1>
        <p className="tagline">{visibleLetters.join("")}</p>
      </div>
    </div>
  );
};

export default Landingpage;
