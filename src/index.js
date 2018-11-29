//obtenemos el elemento en el que se va a detectar un evento
const encryptedCharacter = document.getElementById("ciphering");
//se crea una función para dentro de esta llamar a la función cipher.encode y pasarle argumentos
const textInCode = () => {
    const message = document.getElementById("userText").value;
    const number = parseInt(document.getElementById("key").value);
    const resultado = cipher.encode(number, message);
    document.getElementById("result").value = resultado;
};
//se llama a la función que definimos cuando ocurra el evento en el elemento obtenido
encryptedCharacter.addEventListener("click", textInCode);

//obtenemos el elemento en el que se va a detectar un evento
const readCharacter = document.getElementById("deciphering");
//se crea una función para dentro de esta llamar a la función cipher.decode y pasarle argumentos
const codeInText = () => {
    const message = document.getElementById("userText").value;
    const number = parseInt(document.getElementById("key").value);
    const initialLetter = cipher.decode(number, message);
    document.getElementById("result").value = initialLetter;
};
//se llama a la función que definimos cuando ocurra el evento en el elemento obtenido
readCharacter.addEventListener("click", codeInText);
