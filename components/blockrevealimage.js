"use client";
import { useEffect, useState } from "react";

export default function BlockRevealImage({ src, rows = 7, cols = 7 }) {
  const [blocks, setBlocks] = useState([]);
  const [phase, setPhase] = useState("enter");

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
    }, 5000);
    return () => clearTimeout(timer);
  }, [phase]);

  return (
    <div className="flex flex-col">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          width: "600px",
          height: "600px",
        }}
      >
        {blocks.map((block, index) => (
          <div
            key={index}
            className={`block ${phase}`}
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: `${cols * 100}% ${rows * 100}%`,
              backgroundPosition: `${(block.col / (cols - 1)) * 100}% ${
                (block.row / (rows - 1)) * 100
              }%`,
              animationDelay: phase === "enter" ? `${block.revealDelay}s` : `${2 - block.revealDelay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}