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

  const direction = {
    FRONT: 0,
    RIGHT: 1,
    BACK: 2,
    LEFT: 3,
    BOTTOM: 4,
    TOP: 5,
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
          cubeArr[direction.FRONT][i][j];
        screen.BACK[miniScreen].style.backgroundColor =
          cubeArr[direction.BACK][2 - i][j];
        screen.LEFT[miniScreen].style.backgroundColor =
          cubeArr[direction.LEFT][i][j];
        screen.RIGHT[miniScreen].style.backgroundColor =
          cubeArr[direction.RIGHT][i][2 - j];
        screen.TOP[miniScreen].style.backgroundColor =
          cubeArr[direction.TOP][i][j];
        screen.BOTTOM[miniScreen].style.backgroundColor =
          cubeArr[direction.BOTTOM][2 - i][j];
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
      alert(`정답입니다.`);
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

  const shuffleCube = (count) => {
    const shuffleCaseArray = [
      rotateTopLeft,
      rotateBottomLeft,
      rotateLeftUp,
      rotateRightUp,
      rotateCenterDown,
      rotateMiddleRight,
    ];

    for (let i = 0; i < count; i++) {
      const randomNumber = Math.floor(Math.random() * shuffleCaseArray.length);
      shuffleCaseArray[randomNumber]();
    }
    drawCube(false, cubeArr);
    drawScreen();
  };

  const startGame = () => {
    const regexp = /^[0-9]*$/;
    const count = prompt("몇 회 섞으시겠습니까?(Ex: 3)");
    if (Number(count) === 0 || !regexp.test(Number(count))) {
      alert("0을 제외한 숫자를 입력해주세요");
      startGame();
      return;
    }
    removeGameAnimation();
    shuffleCube(count);
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

    rotateRight(direction.TOP);
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

    rotateLeft(direction.TOP);
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

    rotateRight(direction.BOTTOM);
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

    rotateLeft(direction.BOTTOM);
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

    rotateRight(direction.TOP);
    rotateRight(direction.BOTTOM);
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

    rotateLeft(direction.TOP);
    rotateLeft(direction.BOTTOM);
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

    rotateUp(direction.LEFT);
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
    rotateDown(direction.LEFT);
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

    rotateUp(direction.RIGHT);
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

    rotateDown(direction.RIGHT);
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

    rotateUp(direction.RIGHT);
    rotateUp(direction.LEFT);
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

    rotateDown(direction.RIGHT);
    rotateDown(direction.LEFT);
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
        changeBackgroundColor(
          selectedCube,
          back,
          direction.BACK,
          BACK_I,
          BACK_J
        );
      }

      if ((7 <= i && i <= 9) || (16 <= i && i <= 18) || (25 <= i && i <= 27)) {
        const front = smallCube.querySelector(".front");
        changeBackgroundColor(
          selectedCube,
          front,
          direction.FRONT,
          FRONT_I,
          FRONT_J
        );
      }

      if (i <= 9) {
        const top = smallCube.querySelector(".top");
        changeBackgroundColor(selectedCube, top, direction.TOP, TOP_I, TOP_J);
      }

      if (i >= 19) {
        const bottom = smallCube.querySelector(".bottom");
        changeBackgroundColor(
          selectedCube,
          bottom,
          direction.BOTTOM,
          BOTTOM_I,
          BOTTOM_J
        );
      }

      if (i % 3 === 1) {
        const left = smallCube.querySelector(".left");
        changeBackgroundColor(
          selectedCube,
          left,
          direction.LEFT,
          LEFT_I,
          LEFT_J
        );
      }

      if (i % 3 === 0) {
        const right = smallCube.querySelector(".right");
        changeBackgroundColor(
          selectedCube,
          right,
          direction.RIGHT,
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

  const selectNewLeftRightDOM = () => {
    const cubeTop = document.querySelector(".cube-top");
    const cubeMiddle = document.querySelector(".cube-middle");
    const cubeBottom = document.querySelector(".cube-bottom");

    return { cubeTop, cubeMiddle, cubeBottom };
  };

  const selectNewUpDownDOM = () => {
    const cubeLeft = document.querySelector(".cube-left");
    const cubeCenter = document.querySelector(".cube-center");
    const cubeRight = document.querySelector(".cube-right");

    return { cubeLeft, cubeCenter, cubeRight };
  };

  const rotateHorizontal = (direction) => {
    switch (direction) {
      case TOP_RIGHT:
        if (cube.classList.contains("cube-UpDown")) {
          changeCubeUpDown();
          drawCube(prevCubeArr);
          const newDOM = selectNewLeftRightDOM();
          rotateCubePieces(newDOM.cubeTop, Y, PLUS_90, cubeTopMiddleBottomHTML);
        } else {
          const newDOM = selectNewLeftRightDOM();
          rotateCubePieces(newDOM.cubeTop, Y, PLUS_90, cubeTopMiddleBottomHTML);
        }
        break;

      case MIDDLE_RIGHT:
        if (cube.classList.contains("cube-UpDown")) {
          changeCubeUpDown();
          drawCube(prevCubeArr);
          const newDOM = selectNewLeftRightDOM();
          rotateCubePieces(
            newDOM.cubeMiddle,
            Y,
            PLUS_90,
            cubeTopMiddleBottomHTML
          );
        } else {
          const newDOM = selectNewLeftRightDOM();
          rotateCubePieces(
            newDOM.cubeMiddle,
            Y,
            PLUS_90,
            cubeTopMiddleBottomHTML
          );
        }
        break;

      case BOTTOM_RIGHT:
        if (cube.classList.contains("cube-UpDown")) {
          changeCubeUpDown();
          drawCube(prevCubeArr);
          const newDOM = selectNewLeftRightDOM();
          rotateCubePieces(
            newDOM.cubeBottom,
            Y,
            PLUS_90,
            cubeTopMiddleBottomHTML
          );
        } else {
          const newDOM = selectNewLeftRightDOM();
          rotateCubePieces(
            newDOM.cubeBottom,
            Y,
            PLUS_90,
            cubeTopMiddleBottomHTML
          );
        }
        break;

      case TOP_LEFT:
        if (cube.classList.contains("cube-UpDown")) {
          changeCubeUpDown();
          drawCube(prevCubeArr);
          const newDOM = selectNewLeftRightDOM();
          rotateCubePieces(
            newDOM.cubeTop,
            Y,
            MINUS_90,
            cubeTopMiddleBottomHTML
          );
        } else {
          const newDOM = selectNewLeftRightDOM();
          rotateCubePieces(
            newDOM.cubeTop,
            Y,
            MINUS_90,
            cubeTopMiddleBottomHTML
          );
        }
        break;

      case MIDDLE_LEFT:
        if (cube.classList.contains("cube-UpDown")) {
          changeCubeUpDown();
          drawCube(prevCubeArr);
          const newDOM = selectNewLeftRightDOM();
          rotateCubePieces(
            newDOM.cubeMiddle,
            Y,
            MINUS_90,
            cubeTopMiddleBottomHTML
          );
        } else {
          const newDOM = selectNewLeftRightDOM();
          rotateCubePieces(
            newDOM.cubeMiddle,
            Y,
            MINUS_90,
            cubeTopMiddleBottomHTML
          );
        }
        break;

      case BOTTOM_LEFT:
        if (cube.classList.contains("cube-UpDown")) {
          changeCubeUpDown();
          drawCube(prevCubeArr);
          const newDOM = selectNewLeftRightDOM();
          rotateCubePieces(
            newDOM.cubeBottom,
            Y,
            MINUS_90,
            cubeTopMiddleBottomHTML
          );
        } else {
          const newDOM = selectNewLeftRightDOM();
          rotateCubePieces(
            newDOM.cubeBottom,
            Y,
            MINUS_90,
            cubeTopMiddleBottomHTML
          );
        }
        break;

      case RIGHT_ALL:
        if (cube.classList.contains("cube-UpDown")) {
          changeCubeUpDown();
          drawCube(prevCubeArr);
          const newDOM = selectNewLeftRightDOM();
          rotateWholeCube(
            newDOM.cubeTop,
            newDOM.cubeMiddle,
            newDOM.cubeBottom,
            Y,
            PLUS_90,
            cubeTopMiddleBottomHTML
          );
        } else {
          const newDOM = selectNewLeftRightDOM();
          rotateWholeCube(
            newDOM.cubeTop,
            newDOM.cubeMiddle,
            newDOM.cubeBottom,
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
          const newDOM = selectNewLeftRightDOM();
          rotateWholeCube(
            newDOM.cubeTop,
            newDOM.cubeMiddle,
            newDOM.cubeBottom,
            Y,
            MINUS_90,
            cubeTopMiddleBottomHTML
          );
        } else {
          const newDOM = selectNewLeftRightDOM();
          rotateWholeCube(
            newDOM.cubeTop,
            newDOM.cubeMiddle,
            newDOM.cubeBottom,
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
          const newDOM = selectNewUpDownDOM();
          rotateCubePieces(
            newDOM.cubeLeft,
            X,
            PLUS_90,
            cubeLeftCenterRightHTML
          );
        } else {
          const newDOM = selectNewUpDownDOM();
          rotateCubePieces(
            newDOM.cubeLeft,
            X,
            PLUS_90,
            cubeLeftCenterRightHTML
          );
        }

        break;

      case CENTER_UP:
        if (cube.classList.contains("cube-LeftRight")) {
          changeCubeLeftRight();
          drawCube(prevCubeArr);
          const newDOM = selectNewUpDownDOM();
          rotateCubePieces(
            newDOM.cubeCenter,
            X,
            PLUS_90,
            cubeLeftCenterRightHTML
          );
        } else {
          const newDOM = selectNewUpDownDOM();
          rotateCubePieces(
            newDOM.cubeCenter,
            X,
            PLUS_90,
            cubeLeftCenterRightHTML
          );
        }
        break;

      case RIGHT_UP:
        if (cube.classList.contains("cube-LeftRight")) {
          changeCubeLeftRight();
          drawCube(prevCubeArr);
          const newDOM = selectNewUpDownDOM();
          rotateCubePieces(
            newDOM.cubeRight,
            X,
            PLUS_90,
            cubeLeftCenterRightHTML
          );
        } else {
          const newDOM = selectNewUpDownDOM();
          rotateCubePieces(
            newDOM.cubeRight,
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
          const newDOM = selectNewUpDownDOM();
          rotateCubePieces(
            newDOM.cubeLeft,
            X,
            MINUS_90,
            cubeLeftCenterRightHTML
          );
        } else {
          const newDOM = selectNewUpDownDOM();
          rotateCubePieces(
            newDOM.cubeLeft,
            X,
            MINUS_90,
            cubeLeftCenterRightHTML
          );
        }
        break;

      case CENTER_DOWN:
        if (cube.classList.contains("cube-LeftRight")) {
          changeCubeLeftRight();
          drawCube(prevCubeArr);
          const newDOM = selectNewUpDownDOM();
          rotateCubePieces(
            newDOM.cubeCenter,
            X,
            MINUS_90,
            cubeLeftCenterRightHTML
          );
        } else {
          const newDOM = selectNewUpDownDOM();
          rotateCubePieces(
            newDOM.cubeCenter,
            X,
            MINUS_90,
            cubeLeftCenterRightHTML
          );
        }
        break;

      case RIGHT_DOWN:
        if (cube.classList.contains("cube-LeftRight")) {
          changeCubeLeftRight();
          drawCube(prevCubeArr);
          const newDOM = selectNewUpDownDOM();
          rotateCubePieces(
            newDOM.cubeRight,
            X,
            MINUS_90,
            cubeLeftCenterRightHTML
          );
        } else {
          const newDOM = selectNewUpDownDOM();
          rotateCubePieces(
            newDOM.cubeRight,
            X,
            MINUS_90,
            cubeLeftCenterRightHTML
          );
        }
        break;

      case UP_ALL:
        if (cube.classList.contains("cube-LeftRight")) {
          changeCubeLeftRight();
          drawCube(prevCubeArr);
          const newDOM = selectNewUpDownDOM();
          rotateWholeCube(
            newDOM.cubeLeft,
            newDOM.cubeCenter,
            newDOM.cubeRight,
            X,
            PLUS_90,
            cubeLeftCenterRightHTML
          );
        } else {
          const newDOM = selectNewUpDownDOM();
          rotateWholeCube(
            newDOM.cubeLeft,
            newDOM.cubeCenter,
            newDOM.cubeRight,
            X,
            PLUS_90,
            cubeLeftCenterRightHTML
          );
        }
        break;

      case DOWN_ALL:
        if (cube.classList.contains("cube-LeftRight")) {
          changeCubeLeftRight();
          drawCube(prevCubeArr);
          const newDOM = selectNewUpDownDOM();
          rotateWholeCube(
            newDOM.cubeLeft,
            newDOM.cubeCenter,
            newDOM.cubeRight,
            X,
            MINUS_90,
            cubeLeftCenterRightHTML
          );
        } else {
          const newDOM = selectNewUpDownDOM();
          rotateWholeCube(
            newDOM.cubeLeft,
            newDOM.cubeCenter,
            newDOM.cubeRight,
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
