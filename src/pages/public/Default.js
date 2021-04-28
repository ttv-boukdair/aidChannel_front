import React, { useState } from "react";
import Header from "../../components/sections/header/Header";
import Footer from "../../components/sections/footer/Footer";
function Default() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="main">
      <Header></Header>
      <div className="public_app"></div>
      <Footer></Footer>
    </div>
  );
}
export default Default;
