import "./App.css";
import Board from "./Components/Board/Board";
import React, { useState } from "react";
import belephant from "./icons/pieces/belephant.png";
import welephant from "./icons/pieces/welephant.png";
import bhorse from "./icons/pieces/bhorse.png";
import whorse from "./icons/pieces/whorse.png";
import bcamel from "./icons/pieces/bcamel.png";
import wcamel from "./icons/pieces/wcamel.png";
import bqueen from "./icons/pieces/bqueen.png";
import wqueen from "./icons/pieces/wqueen.png";
import bking from "./icons/pieces/bking.png";
import wking from "./icons/pieces/wking.png";
import bpawn from "./icons/pieces/bpawn.png";
import wpawn from "./icons/pieces/wpawn.png";
function App() {
  const [squares, setSquares] = useState([
    { id: "a1", piece: belephant, name: "belephant" },
    { id: "b1", piece: bhorse, name: "bhorse" },
    { id: "c1", piece: bcamel, name: "bcamel" },
    { id: "d1", piece: bqueen, name: "bqueen" },
    { id: "e1", piece: bking, name: "bking" },
    { id: "f1", piece: bcamel, name: "bcamel" },
    { id: "g1", piece: bhorse, name: "bhorse" },
    { id: "h1", piece: belephant, name: "belephant" },
    { id: "a2", piece: bpawn, name: "bpawn" },
    { id: "b2", piece: bpawn, name: "bpawn" },
    { id: "c2", piece: bpawn, name: "bpawn" },
    { id: "d2", piece: bpawn, name: "bpawn" },
    { id: "e2", piece: bpawn, name: "bpawn" },
    { id: "f2", piece: bpawn, name: "bpawn" },
    { id: "g2", piece: bpawn, name: "bpawn" },
    { id: "h2", piece: bpawn, name: "bpawn" },
    { id: "a3", piece: null },
    { id: "b3", piece: null },
    { id: "c3", piece: null },
    { id: "d3", piece: null },
    { id: "e3", piece: null },
    { id: "f3", piece: null },
    { id: "g3", piece: null },
    { id: "h3", piece: null },
    { id: "a4", piece: null },
    { id: "b4", piece: null },
    { id: "c4", piece: null },
    { id: "d4", piece: null },
    { id: "e4", piece: null },
    { id: "f4", piece: null },
    { id: "g4", piece: null },
    { id: "h4", piece: null },
    { id: "a5", piece: null },
    { id: "b5", piece: null },
    { id: "c5", piece: null },
    { id: "d5", piece: null },
    { id: "e5", piece: null },
    { id: "f5", piece: null },
    { id: "g5", piece: null },
    { id: "h5", piece: null },
    { id: "a6", piece: null },
    { id: "b6", piece: null },
    { id: "c6", piece: null },
    { id: "d6", piece: null },
    { id: "e6", piece: null },
    { id: "f6", piece: null },
    { id: "g6", piece: null },
    { id: "h6", piece: null },
    { id: "a7", piece: wpawn, name: "wpawn" },
    { id: "b7", piece: wpawn, name: "wpawn" },
    { id: "c7", piece: wpawn, name: "wpawn" },
    { id: "d7", piece: wpawn, name: "wpawn" },
    { id: "e7", piece: wpawn, name: "wpawn" },
    { id: "f7", piece: wpawn, name: "wpawn" },
    { id: "g7", piece: wpawn, name: "wpawn" },
    { id: "h7", piece: wpawn, name: "wpawn" },
    { id: "a8", piece: welephant, name: "welephant" },
    { id: "b8", piece: whorse, name: "whorse" },
    { id: "c8", piece: wcamel, name: "wcamel" },
    { id: "d8", piece: wqueen, name: "wqueen" },
    { id: "e8", piece: wking, name: "wking" },
    { id: "f8", piece: wcamel, name: "wcamel" },
    { id: "g8", piece: whorse, name: "whorse" },
    { id: "h8", piece: welephant, name: "welephant" },
  ]);

  const updatePiece = (sourceId, targetId, newPiece, newName) => {
    setSquares((prevSquares) =>
      prevSquares.map((square) => {
        // If the square is the source, remove the piece
        // console.log(square.id);
        if (square.id === sourceId) {
          // console.log('delete kar diya', square.id);
          return { ...square, piece: null, name: "" }; // Remove piece
        }

        // If the square is the target, add the new piece
        if (square.id === targetId) {
          // console.log('add kar diya', square.id);
          return { ...square, piece: newPiece, name: newName }; // Add new piece
        }

        // Keep all other squares unchanged
        return square;
      })
    );
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Board squares={squares} onfuck={updatePiece} />
      </main>
    </div>
  );
}

export default App;
