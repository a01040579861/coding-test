// JS코딩 테스트 문제 3
// 연필 1다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때, N명의 학생수를 입력한다면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.
// (예를 들어 25명의 학생수가 있다면 3다스가 필요합니다. / 178명의 학생수가 있다면 15다스가 필요합니다.)

// 코딩테스트 문제3 풀이 코드
// i = 필요한 학생의 수
function pencilDozens(i) {
  // 연필 다스 변수 값 선언
  const dozen = 12;
  // 학생의 수를 12로 나눈 후 소수점 제외한 정수부분을 선언
  let pencilDozen = Math.floor(i / dozen);
  // 학생의 수를 12로 나누고 나머지가 0이 아니라면
  if (i / dozen !== 0) {
    // 연필다스 증가
    pencilDozen += 1;
  }
  // 계산된 연필다스 값 반환, 필요한 다스 값 구함
  return pencilDozen;
}

console.log(pencilDozens(25)); // 3 다스
console.log(pencilDozens(178)); // 15 다스
