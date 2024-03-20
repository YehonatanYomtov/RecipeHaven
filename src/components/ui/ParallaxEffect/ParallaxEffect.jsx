//* 3rd-party-import(NPM)
import Tilt from "react-parallax-tilt";

function ParallaxEffect({
  style = { transformStyle: "preserve-3d" },
  className,
  scale,
  glareColor = "white",
  glare = 0.3,
  glarePosition,
  children,
}) {
  return (
    <Tilt
      style={style}
      className={className}
      glareEnable={true}
      glareMaxOpacity={glare}
      glareColor={glareColor}
      scale={scale}
      glarePosition={glarePosition}
    >
      {children}
    </Tilt>
  );
}

export default ParallaxEffect;
