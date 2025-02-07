// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어졌을 때, 이 세 막대로 삼각형을 만들 수 있다면 콘솔창에 "Yes"를 출력하고, 만들 수 없으면 "No"를 출력한다.
// (*삼각형이 되려면 두 변의 길이의 합이 나머지 한 변의 길이 값보다 커야합니다.)

// 코딩테스트 문제2 풀이 코드
const triangle = () => {
  // 사용자에게 입력받은 값을 parseInt로 정수 형변환
  let a = parseInt(prompt("첫 번째 변의 길이:"));
  let b = parseInt(prompt("두 번째 변의 길이:"));
  let c = parseInt(prompt("세 번째 변의 길이:"));
  // 삼항 연산자를 이용하여 삼각형을 만들 수 있는지, 없는지 판별 후 Yes or No 출력
  console.log(b + c > a && a + c > b && a + b > c ? "Yes" : "No");
  alert(b + c > a && a + c > b && a + b > c ? "Yes" : "No");
};

triangle();
