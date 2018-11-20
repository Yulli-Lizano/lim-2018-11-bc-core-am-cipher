const cifrar = document.getElementById("cyphing");

function newMessage(texto, number){
  let myString = "";
  for (let i = 0; i < texto.length; i++) {
    let myString2 = (texto.charCodeAt(i)-65+number)%26+65;
    let myString3 = String.fromCharCode(myString2);
    myString += myString3;
  }
}

const change = () =>{
  const button1 = document.getElementById("naming").value;
  const button2 = parseInt(document.getElementById("key").value);
  const resultado = newMessage(button1, button2);
  document.getElementById("result").innerHTML = resultado;
}
cifrar.addEventListener("click", change);
