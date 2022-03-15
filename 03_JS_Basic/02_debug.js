let A = "안녕";

function testA() {
     document.getElementById("test").innerHTML = "1";
     debugger;
     document.getElementById("test").innerHTML = "2";
     document.getElementById("test").innerHTML = "3";
     testB()
  }
  
  function testB() {
    document.getElementById("test").innerHTML = A;
    testC();
  }

  function testC() {
    let B = "끝"
    document.getElementById("test").innerHTML = B;
  }

  const buttons = document.querySelectorAll('button');
  
  for(let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', testA);
  }
