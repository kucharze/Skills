genRandomNumbers = function () {
  let rNum = [];
  for (let i = 0; i < 100; i++) {
    let rnd = Math.floor(Math.randome() * 9999 + 1);
    rNum.push(rnd);
  }
  return rNum;
};
