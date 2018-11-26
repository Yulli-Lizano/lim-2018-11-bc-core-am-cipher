const cifrar = document.getElementById("ciphering");

const textInCode = () =>{
  const message = document.getElementById("userText").value;
  const number = parseInt(document.getElementById("key").value);
  const resultado = cipher.encode(number, message);
  document.getElementById("result").value = resultado;
}
cifrar.addEventListener("click", textInCode)

const descifrar = document.getElementById("deciphering");

const codeInText = () =>{
  const message = document.getElementById("userText").value;
  const number = parseInt(document.getElementById("key").value);
  const initialLetter = cipher.decode(number, message);
  document.getElementById("result").value = initialLetter;
}
descifrar.addEventListener("click", codeInText);
