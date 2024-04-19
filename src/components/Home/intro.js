import React, { useState, useEffect } from "react";

function Intro() {
  const [text, setText] = useState("");
  const fullText = "empowering everyone through AI";

  useEffect(() => {
    const startTyping = setTimeout(() => {
      let currentIndex = 0;

      const interval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setText(fullText.slice(0, currentIndex + 1));
          currentIndex += 1;
        } else {
          clearInterval(interval);
        }
      }, 40); // Adjust the interval for typing speed

      return () => clearInterval(interval);
    }, 300); // Delay start 

    return () => clearTimeout(startTyping);
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div
      className="typing-effect"
      style={{ 
        display: "flex",
        flex: 1, 
        alignSelf: "flex-start",
        justifyContent: "center",
        fontSize: "50px", 
        color: "white", 
        fontWeight: "bold" 
      }}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}

export default Intro;
