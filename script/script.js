let a = document.querySelector('.kofA');
let b = document.querySelector('.kofB');
let c = document.querySelector('.kofC');

let descriminant = document.querySelector(".descriminant");
let xx1 = document.querySelector(".xone");
let XX2 = document.querySelector(".xtwo");
let X = document.querySelector(".x");
let error = document.querySelector(".error");






function btnADD() {
  let des = b.value * b.value - 4 * a.value * c.value;
  descriminant.innerHTML += des;
  console.log(des);
  if (des > 0) {
    let x1 = (-b.value + Math.sqrt(des)) / 2 * a.value;
    xx1.innerHTML += x1;
    console.log(x1)
    let x2 = (-b.value - Math.sqrt(des)) / 2 * a.value;
    XX2.innerHTML += x2;
    console.log(x2)
  }
  else if (des == 0) {
    let xe = -b.value / 2 * a.value;
    X.innerHTML += xe;
    console.log(xe)

  }
  else {
    error.innerHTML = "ДИСКРИМІНАНТ МЕНШЕ 0. Відповіді нема"
    console.log('не правильно')
  }






}