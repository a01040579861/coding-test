// 세 수 중 최소값 구하기!!!!

// 문제 : 100이하의 자연수 A,B,C를 입력받아 세 수 중 가장 작은 값을 console창에 출력하는 코드를 작성하기
// 예) 6,5,11의 세 숫자를 입력 받았다면, 5의 값이 콘솔창에 출력되어야 함

// 1. 풀이 코드
// function strNum(a, b, c) {
//   let i = a;

//   if (b < i) i = b;
//   if (c < i) i = c;

//   console.log(i);
// }

// strNum(6, 5, 10);

// 2. 풀이 코드
let a = parseInt(prompt("첫 번째 숫자 A를 입력하세요:"));
let b = parseInt(prompt("두 번째 숫자 B를 입력하세요:"));
let c = parseInt(prompt("세 번째 숫자 C를 입력하세요:"));

const smallest = Math.min(a, b, c);

console.log("가장 작은 값은: " + smallest);
alert(`가장 작은 값은: ${smallest}`);
