import { Field } from "@/components/Field";

export const quantRows = 16;
export const quantCols = 10;
export const quantMines = 32;

export const createField = (rows: number, cols: number): Field => {
  const field: Field = [];
  for (let i = 0; i < rows; i++) {
    field.push([]);
    for (let j = 0; j < cols; j++) {
      field[i].push({
        row: i,
        column: j,
        state: "closed",
        hasMine: false,
        nearMines: 0,
      });
    }
  }
  placeMines(field, quantMines);
  field.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (!cell.hasMine) {
        cell.nearMines = getNearMines(field, i, j);
      }
    });
  });
  return field;
};

const placeMines = (field: Field, mines: number) => {
  const rows = field.length;
  const cols = field[0].length;
  for (let i = 0; i < mines; i++) {
    let row = Math.floor(Math.random() * rows);
    let col = Math.floor(Math.random() * cols);
    if (field[row][col].hasMine) {
      i--;
    } else {
      field[row][col].hasMine = true;
    }
  }
};

const getNearMines = (field: Field, row: number, col: number) => {
  let nearMines = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue;
      if (field[row + i]?.[col + j]?.hasMine) nearMines++;
    }
  }
  return nearMines;
};

export const openSquare = (field: Field, row: number, col: number) => {
  if (field[row]?.[col]?.state === "closed") {
    field[row][col].state = "open";
    if (field[row][col].nearMines === 0) {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue;
          openSquare(field, row + i, col + j);
        }
      }
    }
  }
};

export const openMines = (field: Field) => {
  field.forEach((row) => {
    row.forEach((cell) => {
      if (cell.hasMine) cell.state = "open";
    });
  });
};

export const countClosed = (field: Field) => {
  let closed = 0;
  field.forEach((row) => {
    row.forEach((cell) => {
      if (cell.state === "closed") closed++;
    });
  });
  return closed;
};

export const countCorrectFlags = (field: Field) => {
  let correctFlags = 0;
  field.forEach((row) => {
    row.forEach((cell) => {
      if (cell.state === "flag" && cell.hasMine) correctFlags++;
    });
  });
  return correctFlags;
};
