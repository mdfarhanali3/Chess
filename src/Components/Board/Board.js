import React, { useState } from "react";
import "./Board.css";

const Board = (props) => {
  var selectedGridPieceName = null;
  var selectedGridImg = null;
  var selectedGridId = null;

  function gridInfo(event) {
    function clearColumnPath(sourceRowId, targetRowId) {
    }

    function firstMoveOfBlackPawn() {
      if (
        // first or double move of black pawn
        selectedGridPieceName === "bpawn" &&
        selectedGridId[0] === event.currentTarget.id[0] &&
        selectedGridId[1] === "2" &&
        (event.currentTarget.id[1] === "3" || event.currentTarget.id[1] === "4")
      ) {
        props.onfuck(
          selectedGridId,
          event.currentTarget.id,
          selectedGridImg,
          selectedGridPieceName
        );
      }
    }

    function firstMoveOfWhitePawn() {
      if (
        // first or double move of white pawn
        selectedGridPieceName === "wpawn" &&
        selectedGridId[0] === event.currentTarget.id[0] &&
        selectedGridId[1] === "7" &&
        (event.currentTarget.id[1] === "6" || event.currentTarget.id[1] === "5")
      ) {
        props.onfuck(
          selectedGridId,
          event.currentTarget.id,
          selectedGridImg,
          selectedGridPieceName
        );
      }
    }

    function singleMoveOfWhitePawn() {
      if (
        // single move of white pawn
        selectedGridPieceName === "wpawn" &&
        selectedGridId[0] === event.currentTarget.id[0] &&
        +event.currentTarget.id[1] + 1 === +selectedGridId[1]
      ) {
        props.onfuck(
          selectedGridId,
          event.currentTarget.id,
          selectedGridImg,
          selectedGridPieceName
        );
      }
    }

    function singleMoveOfBlackPawn() {
      if (
        // single move of black pawn
        selectedGridPieceName === "bpawn" &&
        selectedGridId[0] === event.currentTarget.id[0] &&
        event.currentTarget.id[1] - 1 === +selectedGridId[1]
      ) {
        props.onfuck(
          selectedGridId,
          event.currentTarget.id,
          selectedGridImg,
          selectedGridPieceName
        );
      }
    }

    function ElephantMove() {
      //  move of elephant
      if (
        (selectedGridPieceName === "belephant" ||
          selectedGridPieceName === "welephant") &&
        ((selectedGridId[0] === event.currentTarget.id[0] &&
          clearColumnPath(selectedGridId[0], event.currentTarget.id[0])) || // same column
          (selectedGridId[1] === event.currentTarget.id[1] &&
            clearColumnPath(selectedGridId[0], event.currentTarget.id[0])))
      ) {
        props.onfuck(
          selectedGridId,
          event.currentTarget.id,
          selectedGridImg,
          selectedGridPieceName
        );
      }
    }

    function pawnWayofKill() {
      // pawn ka maarne ka style
      if (
        (selectedGridPieceName === "bpawn" &&
          event.target.alt[0].includes("w") &&
          selectedGridId[0] != event.currentTarget.id[0] && // not same row
          (event.currentTarget.id[0] ===
            String.fromCharCode(selectedGridId[0].charCodeAt(0) + 1) || // next column
            event.currentTarget.id[0] ===
              String.fromCharCode(selectedGridId[0].charCodeAt(0) - 1)) && // previous coulum
          +event.currentTarget.id[1] - 1 === +selectedGridId[1]) ||
        (selectedGridPieceName === "wpawn" &&
          event.target.alt[0].includes("b") &&
          selectedGridId[0] != event.currentTarget.id[0] && // not same row
          (event.currentTarget.id[0] ===
            String.fromCharCode(selectedGridId[0].charCodeAt(0) + 1) || // next column
            event.currentTarget.id[0] ===
              String.fromCharCode(selectedGridId[0].charCodeAt(0) - 1)) && // previous coulum
          +event.currentTarget.id[1] + 1 === +selectedGridId[1])
      ) {
        props.onfuck(
          selectedGridId,
          event.currentTarget.id,
          selectedGridImg,
          selectedGridPieceName
        );
      }
    }

    function elephantWayofKill() {
      // elephant ka maarne ka style
      if (
        (selectedGridPieceName === "belephant" &&
          event.target.alt[0].includes("w") &&
          ((selectedGridId[0] === event.currentTarget.id[0] &&
            clearColumnPath(selectedGridId, event.currentTarget.id[0])) || // same column
            (selectedGridId[1] === event.currentTarget.id[1] &&
              clearColumnPath(selectedGridId, event.currentTarget.id[0])))) ||
        (selectedGridPieceName === "welephant" &&
          event.target.alt[0].includes("b") &&
          ((selectedGridId[0] === event.currentTarget.id[0] &&
            clearColumnPath(selectedGridId, event.currentTarget.id[0])) || // same column
            (selectedGridId[1] === event.currentTarget.id[1] &&
              clearColumnPath(selectedGridId, event.currentTarget.id[0]))))
      ) {
        // console.log(selectedColumnId, targetColumnId)
        props.onfuck(
          selectedGridId,
          event.currentTarget.id,
          selectedGridImg,
          selectedGridPieceName
        );
      }
    }

    if (selectedGridPieceName && event.target.alt === undefined) {
      // moves of all pieces to empty grid.
      firstMoveOfBlackPawn();
      singleMoveOfBlackPawn();
      firstMoveOfWhitePawn();
      singleMoveOfWhitePawn();
      ElephantMove();

      selectedGridPieceName = null;
    }

    if (selectedGridPieceName && event.target.alt) {
      pawnWayofKill();
      elephantWayofKill();
      // function clearColumnPath(selectedColumnId, targetColumnId) {
      //  var sc = String.fromCharCode(selectedColumnId[0].charCodeAt(0))
      //   for (let index = sc; index < targetColumnId; index++) {
      //     console.log(selectedGridPieceName);
      //     if (0) {
      //       console.log("goti hai ", index, targetColumnId);
      //       return false;
      //     }
      //     continue;
      //   }
      //   for (let index = selectedColumnId[0]; index < targetColumnId; index++) {
      //     if (0) {
      //       console.log("goti2hai ", index, targetColumnId);
      //       return false;
      //     }
      //     // console.log('2')
      //     return true;
      //   }

      // }

      selectedGridPieceName = null;
    }

    if (event.target.alt) {
      selectedGridPieceName = event.target.alt;
      selectedGridId = event.currentTarget.id;
      selectedGridImg = event.target.src;
    }
  }

  return (
    <div>
      <h1>Chess Board</h1>

      <div className="wrapper">
        <div className="BoardGrid">
          {props.squares.map(({ id, piece, name }) => (
            <div
              key={id}
              id={id}
              onClick={gridInfo}
              className={
                (id.charCodeAt(0) - "a".charCodeAt(0) + parseInt(id[1])) % 2 ===
                0
                  ? "black"
                  : ""
              }
            >
              {piece && <img src={piece} alt={name} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
