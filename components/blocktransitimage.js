"use client";
import { useEffect, useState } from "react";

export default function BlockTransitImage({ src1, src2, rows = 7, cols = 7 }) {
  const [blocks, setBlocks] = useState([]);
  const [phase, setPhase] = useState("enter");
  const [showSecondImage, setShowSecondImage] = useState(false);

  useEffect(() => {
    const newBlocks = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const revealDelay = Math.random() * 2;
        newBlocks.push({
          row: r,
          col: c,
          revealDelay,
        });
      }
    }
    setBlocks(newBlocks);
  }, [rows, cols]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase(prev => prev === "enter" ? "exit" : "enter");
      // Toggle which image is showing
      setShowSecondImage(prev => !prev);
    }, 5000);
    return () => clearTimeout(timer);
  }, [phase]);

  return (
    <div className="flex flex-col">
      <div
        className="grid relative"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          width: "600px",
          height: "600px",
        }}
      >
        {/* First image blocks */}
        {blocks.map((block, index) => (
          <div
            key={`img1-${index}`}
            className={`block ${phase === "enter" ? "enter" : "exit"}`}
            style={{
              backgroundImage: `url(${src1})`,
              backgroundSize: `${cols * 100}% ${rows * 100}%`,
              backgroundPosition: `${(block.col / (cols - 1)) * 100}% ${
                (block.row / (rows - 1)) * 100
              }%`,
              animationDelay: phase === "enter" ? `${block.revealDelay}s` : `${2 - block.revealDelay}s`,
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />
        ))}

        {/* Second image blocks */}
        {blocks.map((block, index) => (
          <div
            key={`img2-${index}`}
            className={`block ${phase === "exit" ? "enter" : "exit"}`}
            style={{
              backgroundImage: `url(${src2})`,
              backgroundSize: `${cols * 100}% ${rows * 100}%`,
              backgroundPosition: `${(block.col / (cols - 1)) * 100}% ${
                (block.row / (rows - 1)) * 100
              }%`,
              animationDelay: phase === "exit" ? `${block.revealDelay}s` : `${2 - block.revealDelay}s`,
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />
        ))}
      </div>
    </div>
  );
}