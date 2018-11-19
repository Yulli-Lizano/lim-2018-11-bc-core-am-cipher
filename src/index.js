const cifrar = document.getElementById("cyphing");
//definimos la funcion que vamos a llamar una vez suceda el evento
const change = () => {
  const button1 = document.getElementById("naming").value;
  const button2 = parseInt(document.getElementById("key").value);
  //para guardar las letras del mensaje
  let myString ="";
  //recorremos el mensaje ingresado
  for (let i = 0; i < button1.length; i++) {
  //aplicamcoos la formula y obtenemos la posicion desplazada en nuestro alfabeto
    let myString2 = (button1.charCodeAt(i)-65+button2)%26+65;
//pasamos la posicion obtenida a codigo ASCII
    let myString3 = String.fromCharCode(myString2);
    let myString4 = myString += myString3;
    document.getElementById("result").innerHTML = myString4;
  }
}
//llamando a la funcion que definimos
cifrar.addEventListener("click", change);
