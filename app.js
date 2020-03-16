// Useing the fetch api

document.querySelector('.text').addEventListener('keyup', numberE);

function numberE(e) {
  const number = e.target.value;

  fetch(`http://numbersapi.com/${number}`)
    .then(response => response.text())
    .then(data => {
      if (number) {
        let bottom = `<p>${data}</p>`;
        document.querySelector('.bottom').innerHTML = bottom;
      } else {
        document.querySelector('.bottom').innerHTML = '';
      }
    });
}

// Using xhr

// document.querySelector('.text').addEventListener('keyup',xhrWay);

// function xhrWay(e){

//   const number = e.target.value;

//   const xhr = new XMLHttpRequest();

//   xhr.open('GET',`http://numbersapi.com/${number}`,true)

//   xhr.onload = function(){

//     if(number){
//       let bottom = `<p>${xhr.responseText}</p>`
//       document.querySelector('.bottom').innerHTML = bottom;
//     } else{
//       document.querySelector('.bottom').innerHTML = '';
//    }

//   }

//   xhr.send();

//   }
