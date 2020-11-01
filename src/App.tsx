import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";

function App() {
  return (
    <ParallaxProvider>
      <div style={{ overflowX: "hidden", overflowY: "auto" }}>
        <Image src={"/images/pic1.jpg"} />
        <Image src={"/images/pic2.jpg"} />
        <Image src={"/images/pic3.jpg"} />
        <Image src={"/images/pic4.jpg"} />
        <Image src={"/images/pic5.jpg"} />
      </div>
    </ParallaxProvider>
  );
}

const Image = ({ src }: { src: string }) => {
  return (
    <div
      style={{
        backgroundImage: `url('${src}')`,
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    />
  );
};

export default App;
