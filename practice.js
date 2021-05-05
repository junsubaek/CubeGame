import cubeLeftCenterRightHTML from "./cubeLeftCenterRight.js";
import cubeTopMiddleBottomHTML from "./cubeTopMiddleBottom.js";
import {
  TOP_LEFT,
  TOP_RIGHT,
  MIDDLE_LEFT,
  MIDDLE_RIGHT,
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
  LEFT_ALL,
  RIGHT_ALL,
  LEFT_UP,
  LEFT_DOWN,
  CENTER_UP,
  CENTER_DOWN,
  RIGHT_UP,
  RIGHT_DOWN,
  UP_ALL,
  DOWN_ALL,
} from "./cubeDirection.js";
import {
  BACK_I,
  BACK_J,
  FRONT_I,
  FRONT_J,
  TOP_I,
  TOP_J,
  BOTTOM_I,
  BOTTOM_J,
  LEFT_I,
  LEFT_J,
  RIGHT_I,
  RIGHT_J,
} from "./cubeDirectionCount.js";

import { SHUFFLE_BTN, START_BTN, RESET_BTN } from "./button.js";

(() => {
  const cube = document.querySelector("#cube");
  const screen = {
    FRONT: document.querySelectorAll(".monitor-front .small-monitor"),
    BACK: document.querySelectorAll(".monitor-back .small-monitor"),
    LEFT: document.querySelectorAll(".monitor-left .small-monitor"),
    RIGHT: document.querySelectorAll(".monitor-right .small-monitor"),
    TOP: document.querySelectorAll(".monitor-top .small-monitor"),
    BOTTOM: document.querySelectorAll(".monitor-bottom .small-monitor"),
  };
  //   console.log(screen.FRONT);
  const controller = {
    SHUFFLE_BTN: document.querySelector(".shuffle"),
    START_BTN: document.querySelector(".start"),
    RESET_BTN: document.querySelector(".reset"),
  };
  const timer = document.querySelector(".timer");
  const directionObj = {
    CUBE_TOP_RIGHT: {
      arrow: document.querySelector(".top-right"),
    },
    CUBE_TOP_LEFT: {
      arrow: document.querySelector(".top-left"),
    },
    CUBE_MIDDLE_RIGHT: {
      arrow: document.querySelector(".middle-right"),
    },
    CUBE_MIDDLE_LEFT: {
      arrow: document.querySelector(".middle-left"),
    },
    CUBE_BOTTOM_RIGHT: {
      arrow: document.querySelector(".bottom-right"),
    },
    CUBE_BOTTOM_lEFT: {
      arrow: document.querySelector(".bottom-left"),
    },
    CUBE_ALL_RIGHT: {
      arrow: document.querySelector(".right-all"),
    },
    CUBE_ALL_lEFT: {
      arrow: document.querySelector(".left-all"),
    },
    CUBE_LEFT_UP: {
      arrow: document.querySelector(".left-up"),
    },
    CUBE_CENTER_UP: {
      arrow: document.querySelector(".center-up"),
    },
    CUBE_RIGHT_UP: {
      arrow: document.querySelector(".right-up"),
    },
    CUBE_ALL_UP: {
      arrow: document.querySelector(".up-all"),
    },
    CUBE_LEFT_DOWN: {
      arrow: document.querySelector(".left-down"),
    },
    CUBE_CENTER_DOWN: {
      arrow: document.querySelector(".center-down"),
    },
    CUBE_RIGHT_DOWN: {
      arrow: document.querySelector(".right-down"),
    },
    CUBE_ALL_DOWN: {
      arrow: document.querySelector(".down-all"),
    },
  };

  const color = {
    KHAKI: 0,
    NAVY: 1,
    IVORY: 2,
    RED: 3,
    BLACK: 4,
    PINK: 5,
  };

  const countObj = {
    BACK_I: 0,
    BACK_J: 0,
    FRONT_I: 0,
    FRONT_J: 0,
    TOP_I: 0,
    TOP_J: 0,
    BOTTOM_I: 0,
    BOTTOM_J: 0,
    LEFT_I: 0,
    LEFT_J: 0,
    RIGHT_I: 0,
    RIGHT_J: 0,
  };

  const originalCubeArr = [
    [
      //앞//카키 546a61
      ["#546a61", "#546a61", "#546a61"],
      ["#546a61", "#546a61", "#546a61"],
      ["#546a61", "#546a61", "#546a61"],
    ],
    [
      //오른쪽//네이비 3c3555
      ["#3c3555", "#3c3555", "#3c3555"],
      ["#3c3555", "#3c3555", "#3c3555"],
      ["#3c3555", "#3c3555", "#3c3555"],
    ],
    [
      //뒤//아이보리 e1dec3
      ["#e1dec3", "#e1dec3", "#e1dec3"],
      ["#e1dec3", "#e1dec3", "#e1dec3"],
      ["#e1dec3", "#e1dec3", "#e1dec3"],
    ],
    [
      //왼쪽//레드  9d5679
      ["#9d5679", "#9d5679", "#9d5679"],
      ["#9d5679", "#9d5679", "#9d5679"],
      ["#9d5679", "#9d5679", "#9d5679"],
    ],
    [
      //아래//블랙//3a3d49
      ["#3a3d49", "#3a3d49", "#3a3d49"],
      ["#3a3d49", "#3a3d49", "#3a3d49"],
      ["#3a3d49", "#3a3d49", "#3a3d49"],
    ],
    [
      //위//분홍//#c0a4b4
      ["#c0a4b4", "#c0a4b4", "#c0a4b4"],
      ["#c0a4b4", "#c0a4b4", "#c0a4b4"],
      ["#c0a4b4", "#c0a4b4", "#c0a4b4"],
    ],
  ];

  const cubeArr = [
    [
      //앞//카키 546a61
      ["#546a61", "#546a61", "#546a61"],
      ["#546a61", "#546a61", "#546a61"],
      ["#546a61", "#546a61", "#546a61"],
    ],
    [
      //오른쪽//네이비 3c3555
      ["#3c3555", "#3c3555", "#3c3555"],
      ["#3c3555", "#3c3555", "#3c3555"],
      ["#3c3555", "#3c3555", "#3c3555"],
    ],
    [
      //뒤//아이보리 e1dec3
      ["#e1dec3", "#e1dec3", "#e1dec3"],
      ["#e1dec3", "#e1dec3", "#e1dec3"],
      ["#e1dec3", "#e1dec3", "#e1dec3"],
    ],
    [
      //왼쪽//레드  9d5679
      ["#9d5679", "#9d5679", "#9d5679"],
      ["#9d5679", "#9d5679", "#9d5679"],
      ["#9d5679", "#9d5679", "#9d5679"],
    ],
    [
      //아래//블랙//3a3d49
      ["#3a3d49", "#3a3d49", "#3a3d49"],
      ["#3a3d49", "#3a3d49", "#3a3d49"],
      ["#3a3d49", "#3a3d49", "#3a3d49"],
    ],
    [
      //위//분홍//#c0a4b4
      ["#c0a4b4", "#c0a4b4", "#c0a4b4"],
      ["#c0a4b4", "#c0a4b4", "#c0a4b4"],
      ["#c0a4b4", "#c0a4b4", "#c0a4b4"],
    ],
  ];

  const PLUS_90 = 90;
  const MINUS_90 = -90;
  const X = "X";
  const Y = "Y";
  let prevCubeArr = [];
  let timeStop = false;
  let start = false;

  const drawScreen = () => {
    let miniScreen = 0;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        screen.FRONT[miniScreen].style.backgroundColor =
          cubeArr[color.KHAKI][i][j];
        screen.BACK[miniScreen].style.backgroundColor =
          cubeArr[color.IVORY][2 - i][j];
        screen.LEFT[miniScreen].style.backgroundColor =
          cubeArr[color.RED][i][j];
        screen.RIGHT[miniScreen].style.backgroundColor =
          cubeArr[color.NAVY][i][2 - j];
        screen.TOP[miniScreen].style.backgroundColor =
          cubeArr[color.PINK][i][j];
        screen.BOTTOM[miniScreen].style.backgroundColor =
          cubeArr[color.BLACK][2 - i][j];
        miniScreen++;
      }
    }
  };

  const checkAnswer = () => {
    let partCount = 0;
    let wholeCount = 0;

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
          if (cubeArr[i][0][0] === cubeArr[i][j][k]) {
            partCount++;
          }
        }
      }
      if (partCount === 9) {
        wholeCount++;
        partCount = 0;
      } else {
        break;
      }
    }
    if (wholeCount === 6) {
      alert("정답");
      cube.classList.add("cube-LeftRight");
      cube.innerHTML = cubeTopMiddleBottomHTML;
      resetGame();
    }
  };

  const checkTime = () => {
    let hour = 0;
    let minute = 0;
    let second = 0;

    const time = setInterval(() => {
      if (timeStop) {
        clearInterval(time);
      }
      second++;
      if (second >= 60) {
        second = 0;
        minute++;
      }
      if (minute >= 60) {
        hour++;
      }

      timer.innerHTML = `
        <span>${hour < 10 ? `0${hour}` : hour} : ${
        minute < 10 ? `0${minute}` : minute
      } : ${second < 10 ? `0${second}` : second} </span>
        `;
    }, 1000);
  };

  const shuffleCube = () => {
    const shuffleCaseArray = [
      rotateTopLeft,
      rotateTopRight,
      rotateBottomLeft,
      rotateBottomRight,
      rotateLeftAll,
      rotateRightAll,
      rotateLeftUp,
      rotateLeftDown,
      rotateRightUp,
      rotateRightDown,
      rotateUpAll,
      rotateDownAll,
    ];

    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 12);
      shuffleCaseArray[randomNumber]();
    }
    drawCube(false, cubeArr);
    drawScreen();
  };

  const startGame = () => {
    removeGameAnimation();
    shuffleCube();
    drawScreen();
    timeStop = false;
    start = true;
    checkTime();
  };

  const resetGame = () => {
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
          cubeArr[i][j][k] = originalCubeArr[i][j][k];
        }
      }
    }
    prevCubeArr = [];
    timeStop = true;
    start = false;
    drawScreen();
    addGameAnimation();
  };

  const removeGameAnimation = () => {
    const cubePieces = [...document.querySelectorAll("#cube > div")];
    for (let i = 0; i < cubePieces.length; i++) {
      cubePieces[i].classList.remove("reset-ani");
    }
  };

  const addGameAnimation = () => {
    cube.classList.add("cube-LeftRight");
    cube.innerHTML = cubeTopMiddleBottomHTML;
    const cubePieces = [...document.querySelectorAll("#cube > div")];
    for (let i = 0; i < cubePieces.length; i++) {
      setTimeout(() => {
        cubePieces[i].classList.add("reset-ani");
      }, 200 * i);
    }
    setTimeout(() => {
      drawCube(false, cubeArr);
    }, 700);
  };

  const rotateRight = (position) => {
    const tempCubeArr = [];
    for (let i = 0; i < 6; i++) {
      tempCubeArr.push([]);
      for (let j = 0; j < 3; j++) {
        tempCubeArr[i].push([]);
      }
    }
    for (let i = position; i < position + 1; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
          tempCubeArr[i][j][k] = cubeArr[i][2 - k][j];
        }
      }
    }
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        cubeArr[position][i][j] = tempCubeArr[position][i][j];
      }
    }
  };

  const rotateLeft = (position) => {
    const tempCubeArr = [];
    for (let i = 0; i < 6; i++) {
      tempCubeArr.push([]);
      for (let j = 0; j < 3; j++) {
        tempCubeArr[i].push([]);
      }
    }

    for (let i = position; i < position + 1; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
          tempCubeArr[i][j][k] = cubeArr[i][k][2 - j];
        }
      }
    }
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        cubeArr[position][i][j] = tempCubeArr[position][i][j];
      }
    }
  };

  const rotateDown = (position) => {
    const tempCubeArr = [];
    for (let i = 0; i < 6; i++) {
      tempCubeArr.push([]);
      for (let j = 0; j < 3; j++) {
        tempCubeArr[i].push([]);
      }
    }

    for (let i = position; i < position + 1; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
          tempCubeArr[i][j][k] = cubeArr[i][2 - k][j];
        }
      }
    }
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        cubeArr[position][i][j] = tempCubeArr[position][i][j];
      }
    }
  };

  const rotateUp = (position) => {
    const tempCubeArr = [];
    for (let i = 0; i < 6; i++) {
      tempCubeArr.push([]);
      for (let j = 0; j < 3; j++) {
        tempCubeArr[i].push([]);
      }
    }

    for (let i = position; i < position + 1; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
          tempCubeArr[i][j][k] = cubeArr[i][k][2 - j];
        }
      }
    }
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        cubeArr[position][i][j] = tempCubeArr[position][i][j];
      }
    }
  };

  const rotateTopLeft = () => {
    const tempArr = [];
    const tempArr2 = [];

    for (let i = 0; i < 3; i++) {
      tempArr.push(cubeArr[2][0][i]);
      tempArr2.push(cubeArr[0][0][i]);
    }

    for (let i = 0; i < 3; i++) {
      cubeArr[0][0][i] = cubeArr[1][0][2 - i];
      cubeArr[2][0][i] = cubeArr[3][0][2 - i];
    }

    for (let i = 0; i < 3; i++) {
      cubeArr[1][0][i] = tempArr[i];
      cubeArr[3][0][i] = tempArr2[i];
    }

    rotateRight(color.PINK);
  };

  const rotateTopRight = () => {
    const tempArr = [];
    const tempArr2 = [];

    for (let i = 0; i < 3; i++) {
      tempArr.push(cubeArr[0][0][i]);
      tempArr2.push(cubeArr[2][0][i]);
    }

    for (let i = 0; i < 3; i++) {
      cubeArr[0][0][i] = cubeArr[3][0][i];
      cubeArr[2][0][i] = cubeArr[1][0][i];
    }

    for (let i = 0; i < 3; i++) {
      cubeArr[1][0][i] = tempArr[2 - i];
      cubeArr[3][0][i] = tempArr2[2 - i];
    }

    rotateLeft(color.PINK);
  };

  const rotateMiddleLeft = () => {
    const tempArr = [];
    const tempArr2 = [];

    for (let i = 0; i < 3; i++) {
      tempArr.push(cubeArr[2][1][i]);
      tempArr2.push(cubeArr[0][1][i]);
    }

    for (let i = 0; i < 3; i++) {
      cubeArr[0][1][i] = cubeArr[1][1][2 - i];
      cubeArr[2][1][i] = cubeArr[3][1][2 - i];
    }

    for (let i = 0; i < 3; i++) {
      cubeArr[1][1][i] = tempArr[i];
      cubeArr[3][1][i] = tempArr2[i];
    }
  };

  const rotateMiddleRight = () => {
    const tempArr = [];
    const tempArr2 = [];

    for (let i = 0; i < 3; i++) {
      tempArr.push(cubeArr[0][1][i]);
      tempArr2.push(cubeArr[2][1][i]);
    }

    for (let i = 0; i < 3; i++) {
      cubeArr[0][1][i] = cubeArr[3][1][i];
      cubeArr[2][1][i] = cubeArr[1][1][i];
    }

    for (let i = 0; i < 3; i++) {
      cubeArr[1][1][i] = tempArr[2 - i];
      cubeArr[3][1][i] = tempArr2[2 - i];
    }
  };

  const rotateBottomLeft = () => {
    const tempArr = [];
    const tempArr2 = [];

    for (let i = 0; i < 3; i++) {
      tempArr.push(cubeArr[2][2][i]);
      tempArr2.push(cubeArr[0][2][i]);
    }

    for (let i = 0; i < 3; i++) {
      cubeArr[0][2][i] = cubeArr[1][2][2 - i];
      cubeArr[2][2][i] = cubeArr[3][2][2 - i];
    }

    for (let i = 0; i < 3; i++) {
      cubeArr[1][2][i] = tempArr[i];
      cubeArr[3][2][i] = tempArr2[i];
    }

    rotateRight(color.BLACK);
  };

  const rotateBottomRight = () => {
    const tempArr = [];
    const tempArr2 = [];

    for (let i = 0; i < 3; i++) {
      tempArr.push(cubeArr[0][2][i]);
      tempArr2.push(cubeArr[2][2][i]);
    }

    for (let i = 0; i < 3; i++) {
      cubeArr[0][2][i] = cubeArr[3][2][i];
      cubeArr[2][2][i] = cubeArr[1][2][i];
    }

    for (let i = 0; i < 3; i++) {
      cubeArr[1][2][i] = tempArr[2 - i];
      cubeArr[3][2][i] = tempArr2[2 - i];
    }

    rotateLeft(color.BLACK);
  };

  const rotateLeftAll = () => {
    const tempArr = [];
    const tempArr2 = [];

    for (let i = 0; i < 3; i++) {
      tempArr.push([]);
      tempArr2.push([]);
      for (let j = 0; j < 3; j++) {
        tempArr[i].push(cubeArr[1][i][j]);
        tempArr2[i].push(cubeArr[3][i][j]);
      }
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        cubeArr[1][i][j] = cubeArr[2][i][j];
        cubeArr[3][i][j] = cubeArr[0][i][j];
      }
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        cubeArr[0][i][j] = tempArr[i][2 - j];
        cubeArr[2][i][j] = tempArr2[i][2 - j];
      }
    }

    rotateRight(color.PINK);
    rotateRight(color.BLACK);
  };

  const rotateRightAll = () => {
    const tempArr = [];
    const tempArr2 = [];

    for (let i = 0; i < 3; i++) {
      tempArr.push([]);
      tempArr2.push([]);
      for (let j = 0; j < 3; j++) {
        tempArr[i].push(cubeArr[0][i][j]);
        tempArr2[i].push(cubeArr[2][i][j]);
      }
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        cubeArr[0][i][j] = cubeArr[3][i][j];
        cubeArr[2][i][j] = cubeArr[1][i][j];
      }
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        cubeArr[1][i][j] = tempArr[i][2 - j];
        cubeArr[3][i][j] = tempArr2[i][2 - j];
      }
    }

    rotateLeft(color.PINK);
    rotateLeft(color.BLACK);
  };

  const rotateLeftUp = () => {
    const tempArr = [];
    const tempArr2 = [];

    for (let i = 0; i < 3; i++) {
      tempArr.push(cubeArr[2][i][0]);
      tempArr2.push(cubeArr[0][i][0]);
    }

    for (let i = 0; i < 3; i++) {
      cubeArr[0][i][0] = cubeArr[4][2 - i][0];
      cubeArr[2][i][0] = cubeArr[5][2 - i][0];
    }

    for (let i = 0; i < 3; i++) {
      cubeArr[4][i][0] = tempArr[i];
      cubeArr[5][i][0] = tempArr2[i];
    }

    rotateUp(color.RED);
  };

  const rotateLeftDown = () => {
    const tempArr = [];
    const tempArr2 = [];

    for (let i = 0; i < 3; i++) {
      tempArr.push(cubeArr[2][i][0]);
      tempArr2.push(cubeArr[0][i][0]);
    }

    for (let i = 0; i < 3; i++) {
      cubeArr[0][i][0] = cubeArr[5][i][0];
      cubeArr[2][i][0] = cubeArr[4][i][0];
    }

    for (let i = 0; i < 3; i++) {
      cubeArr[5][i][0] = tempArr[2 - i];
      cubeArr[4][i][0] = tempArr2[2 - i];
    }
    rotateDown(color.RED);
  };

  const rotateCenterUp = () => {
    const tempArr = [];
    const tempArr2 = [];

    for (let i = 0; i < 3; i++) {
      tempArr.push(cubeArr[2][i][1]);
      tempArr2.push(cubeArr[0][i][1]);
    }

    for (let i = 0; i < 3; i++) {
      cubeArr[0][i][1] = cubeArr[4][2 - i][1];
      cubeArr[2][i][1] = cubeArr[5][2 - i][1];
    }

    for (let i = 0; i < 3; i++) {
      cubeArr[4][i][1] = tempArr[i];
      cubeArr[5][i][1] = tempArr2[i];
    }
  };

  const rotateCenterDown = () => {
    const tempArr = [];
    const tempArr2 = [];

    for (let i = 0; i < 3; i++) {
      tempArr.push(cubeArr[2][i][1]);
      tempArr2.push(cubeArr[0][i][1]);
    }

    for (let i = 0; i < 3; i++) {
      cubeArr[0][i][1] = cubeArr[5][i][1];
      cubeArr[2][i][1] = cubeArr[4][i][1];
    }

    for (let i = 0; i < 3; i++) {
      cubeArr[5][i][1] = tempArr[2 - i];
      cubeArr[4][i][1] = tempArr2[2 - i];
    }
  };

  const rotateRightUp = () => {
    const tempArr = [];
    const tempArr2 = [];

    for (let i = 0; i < 3; i++) {
      tempArr.push(cubeArr[2][i][2]);
      tempArr2.push(cubeArr[0][i][2]);
    }

    for (let i = 0; i < 3; i++) {
      cubeArr[0][i][2] = cubeArr[4][2 - i][2];
      cubeArr[2][i][2] = cubeArr[5][2 - i][2];
    }

    for (let i = 0; i < 3; i++) {
      cubeArr[4][i][2] = tempArr[i];
      cubeArr[5][i][2] = tempArr2[i];
    }

    rotateUp(color.NAVY);
  };

  const rotateRightDown = () => {
    const tempArr = [];
    const tempArr2 = [];

    for (let i = 0; i < 3; i++) {
      tempArr.push(cubeArr[2][i][2]);
      tempArr2.push(cubeArr[0][i][2]);
    }

    for (let i = 0; i < 3; i++) {
      cubeArr[0][i][2] = cubeArr[5][i][2];
      cubeArr[2][i][2] = cubeArr[4][i][2];
    }

    for (let i = 0; i < 3; i++) {
      cubeArr[5][i][2] = tempArr[2 - i];
      cubeArr[4][i][2] = tempArr2[2 - i];
    }

    rotateDown(color.NAVY);
  };

  const rotateUpAll = () => {
    const tempArr = [];
    const tempArr2 = [];

    for (let i = 0; i < 3; i++) {
      tempArr.push([]);
      tempArr2.push([]);
      for (let j = 0; j < 3; j++) {
        tempArr[i].push(cubeArr[0][i][j]);
        tempArr2[i].push(cubeArr[2][i][j]);
      }
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        cubeArr[0][i][j] = cubeArr[4][2 - i][j];
        cubeArr[2][i][j] = cubeArr[5][2 - i][j];
      }
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        cubeArr[5][i][j] = tempArr[i][j];
        cubeArr[4][i][j] = tempArr2[i][j];
      }
    }

    rotateUp(color.NAVY);
    rotateUp(color.RED);
  };

  const rotateDownAll = () => {
    const tempArr = [];
    const tempArr2 = [];

    for (let i = 0; i < 3; i++) {
      tempArr.push([]);
      tempArr2.push([]);
      for (let j = 0; j < 3; j++) {
        tempArr[i].push(cubeArr[0][i][j]);
        tempArr2[i].push(cubeArr[2][i][j]);
      }
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        cubeArr[0][i][j] = cubeArr[5][i][j];
        cubeArr[2][i][j] = cubeArr[4][i][j];
      }
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        cubeArr[4][2 - i][j] = tempArr[i][j];
        cubeArr[5][2 - i][j] = tempArr2[i][j];
      }
    }

    rotateDown(color.NAVY);
    rotateDown(color.RED);
  };

  const savePrevCubeArr = () => {
    prevCubeArr = [];
    for (let i = 0; i < cubeArr.length; i++) {
      prevCubeArr.push([]);
      for (let j = 0; j < cubeArr[i].length; j++) {
        prevCubeArr[i].push([]);
        for (let k = 0; k < cubeArr[i][j].length; k++) {
          prevCubeArr[i][j][k] = cubeArr[i][j][k];
        }
      }
    }
  };

  const changeBackgroundColor = (selectedCube, position, color, posI, posJ) => {
    position.style.backgroundColor =
      selectedCube[color][countObj[posI]][countObj[posJ]];
    countObj[posJ]++;
    if (countObj[posJ] === 3) {
      countObj[posJ] = 0;
      countObj[posI]++;
    }
    if (countObj[posI] === 3) {
      countObj[posI] = 0;
    }
  };

  const drawCube = (previousCube, presentCube) => {
    const selectedCube = previousCube || presentCube;

    for (let i = 1; i <= 27; i++) {
      const smallCube = document.querySelector(`#small-cube-${i}`);

      if (i <= 3 || (10 <= i && i <= 12) || (19 <= i && i <= 21)) {
        const back = smallCube.querySelector(".back");
        changeBackgroundColor(selectedCube, back, color.IVORY, BACK_I, BACK_J);
      }

      if ((7 <= i && i <= 9) || (16 <= i && i <= 18) || (25 <= i && i <= 27)) {
        const front = smallCube.querySelector(".front");
        changeBackgroundColor(
          selectedCube,
          front,
          color.KHAKI,
          FRONT_I,
          FRONT_J
        );
      }

      if (i <= 9) {
        const top = smallCube.querySelector(".top");
        changeBackgroundColor(selectedCube, top, color.PINK, TOP_I, TOP_J);
      }

      if (i >= 19) {
        const bottom = smallCube.querySelector(".bottom");
        changeBackgroundColor(
          selectedCube,
          bottom,
          color.BLACK,
          BOTTOM_I,
          BOTTOM_J
        );
      }

      if (i % 3 === 1) {
        const left = smallCube.querySelector(".left");
        changeBackgroundColor(selectedCube, left, color.RED, LEFT_I, LEFT_J);
      }

      if (i % 3 === 0) {
        const right = smallCube.querySelector(".right");
        changeBackgroundColor(
          selectedCube,
          right,
          color.NAVY,
          RIGHT_I,
          RIGHT_J
        );
      }
    }
  };

  const selectRotateDirection = (rotateDirection) => {
    switch (rotateDirection) {
      case TOP_RIGHT:
        savePrevCubeArr();
        rotateTopRight();
        rotateHorizontal(TOP_RIGHT);
        break;
      case MIDDLE_RIGHT:
        savePrevCubeArr();
        rotateMiddleRight();
        rotateHorizontal(MIDDLE_RIGHT);
        break;
      case BOTTOM_RIGHT:
        savePrevCubeArr();
        rotateBottomRight();
        rotateHorizontal(BOTTOM_RIGHT);
        break;
      case TOP_LEFT:
        savePrevCubeArr();
        rotateTopLeft();
        rotateHorizontal(TOP_LEFT);
        break;
      case MIDDLE_LEFT:
        savePrevCubeArr();
        rotateMiddleLeft();
        rotateHorizontal(MIDDLE_LEFT);
        break;
      case BOTTOM_LEFT:
        savePrevCubeArr();
        rotateBottomLeft();
        rotateHorizontal(BOTTOM_LEFT);
        break;
      case LEFT_ALL:
        savePrevCubeArr();
        rotateLeftAll();
        rotateHorizontal(LEFT_ALL);
        break;
      case RIGHT_ALL:
        savePrevCubeArr();
        rotateRightAll();
        rotateHorizontal(RIGHT_ALL);
        break;
      case LEFT_UP:
        savePrevCubeArr();
        rotateLeftUp();
        rotateVertical(LEFT_UP);
        break;
      case CENTER_UP:
        savePrevCubeArr();
        rotateCenterUp();
        rotateVertical(CENTER_UP);
        break;
      case RIGHT_UP:
        savePrevCubeArr();
        rotateRightUp();
        rotateVertical(RIGHT_UP);
        break;
      case UP_ALL:
        savePrevCubeArr();
        rotateUpAll();
        rotateVertical(UP_ALL);
        break;
      case LEFT_DOWN:
        savePrevCubeArr();
        rotateLeftDown();
        rotateVertical(LEFT_DOWN);
        break;
      case CENTER_DOWN:
        savePrevCubeArr();
        rotateCenterDown();
        rotateVertical(CENTER_DOWN);
        break;
      case RIGHT_DOWN:
        savePrevCubeArr();
        rotateRightDown();
        rotateVertical(RIGHT_DOWN);
        break;
      case DOWN_ALL:
        savePrevCubeArr();
        rotateDownAll();
        rotateVertical(DOWN_ALL);
        break;
      default:
        break;
    }
  };

  const selectButtonEvents = (btn) => {
    switch (btn) {
      case SHUFFLE_BTN:
        if (start) return;
        shuffleCube();
        break;

      case START_BTN:
        if (start) return;
        startGame();
        break;

      case RESET_BTN:
        resetGame();
        break;
    }
  };

  const bindDirectionEvents = () => {
    for (let direction in directionObj) {
      directionObj[direction].arrow.addEventListener("click", (e) => {
        selectRotateDirection(e.target.dataset.direction);
      });
    }
  };

  const bindControllerEvents = () => {
    for (let btn in controller) {
      controller[btn].addEventListener("click", () => {
        selectButtonEvents(btn);
      });
    }
  };

  const changeCubeUpDown = () => {
    cube.classList.remove("cube-UpDown");
    cube.classList.add("cube-LeftRight");
    cube.innerHTML = cubeTopMiddleBottomHTML;
  };

  const changeCubeLeftRight = () => {
    cube.classList.remove("cube-LeftRight");
    cube.classList.add("cube-UpDown");
    cube.innerHTML = cubeLeftCenterRightHTML;
  };

  const rotateCubePieces = (cubePiece, direction, NINETY, cubeHTML) => {
    setTimeout(() => {
      cubePiece.style.transform = `rotate${direction}(${NINETY}deg)`;
    }, 100);

    cubePiece.addEventListener("transitionend", () => {
      cube.innerHTML = cubeHTML;
      drawCube(false, cubeArr);
      drawScreen();
      if (start) {
        checkAnswer();
      }
    });
  };

  const rotateWholeCube = (
    cubePieces1,
    cubePieces2,
    cubePieces3,
    direction,
    NINETY,
    cubeHTML
  ) => {
    setTimeout(() => {
      cubePieces1.style.transform = `rotate${direction}(${NINETY}deg)`;
      cubePieces2.style.transform = `rotate${direction}(${NINETY}deg)`;
      cubePieces3.style.transform = `rotate${direction}(${NINETY}deg)`;
    }, 100);

    cubePieces3.addEventListener("transitionend", () => {
      cube.innerHTML = cubeHTML;
      drawScreen();
      drawCube(false, cubeArr);
      if (start) {
        checkAnswer();
      }
    });
  };

  const rotateHorizontal = (direction) => {
    switch (direction) {
      case TOP_RIGHT:
        if (cube.classList.contains("cube-UpDown")) {
          changeCubeUpDown();
          drawCube(prevCubeArr);
          const cubeTop = document.querySelector(".cube-top");
          rotateCubePieces(cubeTop, Y, PLUS_90, cubeTopMiddleBottomHTML);
        } else {
          const cubeTop = document.querySelector(".cube-top");
          rotateCubePieces(cubeTop, Y, PLUS_90, cubeTopMiddleBottomHTML);
        }
        break;

      case MIDDLE_RIGHT:
        if (cube.classList.contains("cube-UpDown")) {
          changeCubeUpDown();
          drawCube(prevCubeArr);
          const cubeMiddle = document.querySelector(".cube-middle");
          rotateCubePieces(cubeMiddle, Y, PLUS_90, cubeTopMiddleBottomHTML);
        } else {
          const cubeMiddle = document.querySelector(".cube-middle");
          rotateCubePieces(cubeMiddle, Y, PLUS_90, cubeTopMiddleBottomHTML);
        }
        break;

      case BOTTOM_RIGHT:
        if (cube.classList.contains("cube-UpDown")) {
          changeCubeUpDown();
          drawCube(prevCubeArr);
          const cubeBottom = document.querySelector(".cube-bottom");
          rotateCubePieces(cubeBottom, Y, PLUS_90, cubeTopMiddleBottomHTML);
        } else {
          const cubeBottom = document.querySelector(".cube-bottom");
          rotateCubePieces(cubeBottom, Y, PLUS_90, cubeTopMiddleBottomHTML);
        }
        break;

      case TOP_LEFT:
        if (cube.classList.contains("cube-UpDown")) {
          changeCubeUpDown();
          drawCube(prevCubeArr);
          const cubeTop = document.querySelector(".cube-top");
          rotateCubePieces(cubeTop, Y, MINUS_90, cubeTopMiddleBottomHTML);
        } else {
          const cubeTop = document.querySelector(".cube-top");
          rotateCubePieces(cubeTop, Y, MINUS_90, cubeTopMiddleBottomHTML);
        }
        break;

      case MIDDLE_LEFT:
        if (cube.classList.contains("cube-UpDown")) {
          changeCubeUpDown();
          drawCube(prevCubeArr);
          const cubeMiddle = document.querySelector(".cube-middle");
          rotateCubePieces(cubeMiddle, Y, MINUS_90, cubeTopMiddleBottomHTML);
        } else {
          const cubeMiddle = document.querySelector(".cube-middle");
          rotateCubePieces(cubeMiddle, Y, MINUS_90, cubeTopMiddleBottomHTML);
        }
        break;

      case BOTTOM_LEFT:
        if (cube.classList.contains("cube-UpDown")) {
          changeCubeUpDown();
          drawCube(prevCubeArr);
          const cubeBottom = document.querySelector(".cube-bottom");
          rotateCubePieces(cubeBottom, Y, MINUS_90, cubeTopMiddleBottomHTML);
        } else {
          const cubeBottom = document.querySelector(".cube-bottom");
          rotateCubePieces(cubeBottom, Y, MINUS_90, cubeTopMiddleBottomHTML);
        }
        break;

      case RIGHT_ALL:
        if (cube.classList.contains("cube-UpDown")) {
          changeCubeUpDown();
          drawCube(prevCubeArr);
          const cubeTop = document.querySelector(".cube-top");
          const cubeMiddle = document.querySelector(".cube-middle");
          const cubeBottom = document.querySelector(".cube-bottom");
          rotateWholeCube(
            cubeTop,
            cubeMiddle,
            cubeBottom,
            Y,
            PLUS_90,
            cubeTopMiddleBottomHTML
          );
        } else {
          const cubeTop = document.querySelector(".cube-top");
          const cubeMiddle = document.querySelector(".cube-middle");
          const cubeBottom = document.querySelector(".cube-bottom");
          rotateWholeCube(
            cubeTop,
            cubeMiddle,
            cubeBottom,
            Y,
            PLUS_90,
            cubeTopMiddleBottomHTML
          );
        }
        break;

      case LEFT_ALL:
        if (cube.classList.contains("cube-UpDown")) {
          changeCubeUpDown();
          drawCube(prevCubeArr);
          const cubeTop = document.querySelector(".cube-top");
          const cubeMiddle = document.querySelector(".cube-middle");
          const cubeBottom = document.querySelector(".cube-bottom");
          rotateWholeCube(
            cubeTop,
            cubeMiddle,
            cubeBottom,
            Y,
            MINUS_90,
            cubeTopMiddleBottomHTML
          );
        } else {
          const cubeTop = document.querySelector(".cube-top");
          const cubeMiddle = document.querySelector(".cube-middle");
          const cubeBottom = document.querySelector(".cube-bottom");
          rotateWholeCube(
            cubeTop,
            cubeMiddle,
            cubeBottom,
            Y,
            MINUS_90,
            cubeTopMiddleBottomHTML
          );
        }
        break;

      default:
        break;
    }
  };

  const rotateVertical = (direction) => {
    switch (direction) {
      case LEFT_UP:
        if (cube.classList.contains("cube-LeftRight")) {
          changeCubeLeftRight();
          drawCube(prevCubeArr);
          const cubeLeft = document.querySelector(".cube-left");
          rotateCubePieces(cubeLeft, X, PLUS_90, cubeLeftCenterRightHTML);
        } else {
          const cubeLeft = document.querySelector(".cube-left");
          rotateCubePieces(cubeLeft, X, PLUS_90, cubeLeftCenterRightHTML);
        }

        break;

      case CENTER_UP:
        if (cube.classList.contains("cube-LeftRight")) {
          changeCubeLeftRight();
          drawCube(prevCubeArr);
          const cubeCenter = document.querySelector(".cube-center");
          rotateCubePieces(cubeCenter, X, PLUS_90, cubeLeftCenterRightHTML);
        } else {
          const cubeCenter = document.querySelector(".cube-center");
          rotateCubePieces(cubeCenter, X, PLUS_90, cubeLeftCenterRightHTML);
        }
        break;

      case RIGHT_UP:
        if (cube.classList.contains("cube-LeftRight")) {
          changeCubeLeftRight();
          drawCube(prevCubeArr);
          const cubeRight = document.querySelector(".cube-right");
          rotateCubePieces(cubeRight, X, PLUS_90, cubeLeftCenterRightHTML);
        } else {
          const cubeRight = document.querySelector(".cube-right");
          rotateCubePieces(cubeRight, X, PLUS_90, cubeLeftCenterRightHTML);
        }
        break;

      case UP_ALL:
        if (cube.classList.contains("cube-LeftRight")) {
          changeCubeLeftRight();
          drawCube(prevCubeArr);
          const cubeLeft = document.querySelector(".cube-left");
          const cubeCenter = document.querySelector(".cube-center");
          const cubeRight = document.querySelector(".cube-right");
          rotateWholeCube(
            cubeLeft,
            cubeCenter,
            cubeRight,
            X,
            PLUS_90,
            cubeLeftCenterRightHTML
          );
        } else {
          const cubeLeft = document.querySelector(".cube-left");
          const cubeCenter = document.querySelector(".cube-center");
          const cubeRight = document.querySelector(".cube-right");
          rotateWholeCube(
            cubeLeft,
            cubeCenter,
            cubeRight,
            X,
            PLUS_90,
            cubeLeftCenterRightHTML
          );
        }
        break;

      case LEFT_DOWN:
        if (cube.classList.contains("cube-LeftRight")) {
          changeCubeLeftRight();
          drawCube(prevCubeArr);
          const cubeLeft = document.querySelector(".cube-left");
          rotateCubePieces(cubeLeft, X, MINUS_90, cubeLeftCenterRightHTML);
        } else {
          const cubeLeft = document.querySelector(".cube-left");
          rotateCubePieces(cubeLeft, X, MINUS_90, cubeLeftCenterRightHTML);
        }
        break;

      case CENTER_DOWN:
        if (cube.classList.contains("cube-LeftRight")) {
          changeCubeLeftRight();
          drawCube(prevCubeArr);
          const cubeCenter = document.querySelector(".cube-center");
          rotateCubePieces(cubeCenter, X, MINUS_90, cubeLeftCenterRightHTML);
        } else {
          const cubeCenter = document.querySelector(".cube-center");
          rotateCubePieces(cubeCenter, X, MINUS_90, cubeLeftCenterRightHTML);
        }
        break;

      case RIGHT_DOWN:
        if (cube.classList.contains("cube-LeftRight")) {
          changeCubeLeftRight();
          drawCube(prevCubeArr);
          const cubeRight = document.querySelector(".cube-right");
          rotateCubePieces(cubeRight, X, MINUS_90, cubeLeftCenterRightHTML);
        } else {
          const cubeRight = document.querySelector(".cube-right");
          rotateCubePieces(cubeRight, X, MINUS_90, cubeLeftCenterRightHTML);
        }
        break;

      case DOWN_ALL:
        if (cube.classList.contains("cube-LeftRight")) {
          changeCubeLeftRight();
          drawCube(prevCubeArr);
          const cubeLeft = document.querySelector(".cube-left");
          const cubeCenter = document.querySelector(".cube-center");
          const cubeRight = document.querySelector(".cube-right");
          rotateWholeCube(
            cubeLeft,
            cubeCenter,
            cubeRight,
            X,
            MINUS_90,
            cubeLeftCenterRightHTML
          );
        } else {
          const cubeLeft = document.querySelector(".cube-left");
          const cubeCenter = document.querySelector(".cube-center");
          const cubeRight = document.querySelector(".cube-right");
          rotateWholeCube(
            cubeLeft,
            cubeCenter,
            cubeRight,
            X,
            MINUS_90,
            cubeLeftCenterRightHTML
          );
        }
        break;

      default:
        break;
    }
  };

  bindDirectionEvents();
  bindControllerEvents();
  drawScreen();
})();
