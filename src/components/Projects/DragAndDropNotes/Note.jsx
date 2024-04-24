import {forwardRef} from "react";

const Note = forwardRef(({content, initialPos, ...props}, ref) => {
  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        left: `${initialPos?.x}px`,
        top: `${initialPos?.y}px`,
        border: "1px solid lightgray",
        borderRadius: "0.2rem",
        userSelect: "none",
        padding: "10px",
        width: "200px",
        cursor: "move",
        backgroundColor: "rgba(211, 211, 211, 0.339)",
      }}
      {...props}
    >
      📌 {content}
    </div>
  );
});

export default Note;