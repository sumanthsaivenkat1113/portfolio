import React, { useState, useEffect } from "react";
const Typewriter = ({
  texts = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 2000,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (texts.length === 0) return;

    const fullText = texts[textIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      }, deletingSpeed);

      if (currentText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }, typingSpeed);

      if (currentText === fullText) {
        timer = setTimeout(() => setIsDeleting(true), delay);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, delay]);

  return (
    <span className="font-mono">
      {currentText}
      <span className="animate-blink inline-block w-px h-5 ml-1 bg-indigo-500 align-middle"></span>
    </span>
  );
};

export default Typewriter;