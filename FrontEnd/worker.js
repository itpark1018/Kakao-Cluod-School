//html에서 요청이 오면
onmessage = (event) => {
  //html에서 전송한 데이터 받기
  console.log("워커가 스크립트한데 데이터 받음");
  let num = event.data;
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  //html 파일로 결과를 전송
  postMessage(result);
};
