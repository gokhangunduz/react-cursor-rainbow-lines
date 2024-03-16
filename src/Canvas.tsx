import React, { CSSProperties, Fragment, ReactElement, useEffect } from "react";
import { renderCanvas } from "./canvas.function";

interface IRainbowLines {
  style?: CSSProperties;
  className?: string;
}

export default function RainbowLines({
  style,
  className,
}: IRainbowLines): ReactElement {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <Fragment>
      <canvas
        className={className}
        style={{
          pointerEvents: "none",
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 99999999999,
          ...style,
        }}
        id="canvas"
      />
    </Fragment>
  );
}
