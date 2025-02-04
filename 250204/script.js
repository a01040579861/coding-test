// 세 수 중 최소값 구하기!!!!

// 문제 : 100이하의 자연수 A,B,C를 입력받아 세 수 중 가장 작은 값을 console창에 출력하는 코드를 작성하기
// 예) 6,5,11의 세 숫자를 입력 받았다면, 5의 값이 콘솔창에 출력되어야 함

function strNum(a, b, c) {
  let i = a;

  if (b < i) i = b;
  if (c < i) i = c;

  console.log(i);
}

// 함수 실행
strNum(6, 5, 10);
