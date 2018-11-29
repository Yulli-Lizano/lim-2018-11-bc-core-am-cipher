window.cipher = {
    encode:(offset, string) => {
      //creamos una variable vacia para guardar nuestro resultado final
        let cipheredLetter = "";
        //hacemos un bucle para iterar por todo el string
            for (let i = 0; i < string.length; i++) {
            let newPosition = ((string.toUpperCase()).charCodeAt(i) - 65 + offset) % 26 + 65;
       //creamos una variable para guardar el string cifrado
            let cipheredLetter2 = String.fromCharCode(newPosition);
       //concatenamos el resultado a nuestra variable vacia
            cipheredLetter += cipheredLetter2;
            }
        return cipheredLetter;
    },
    decode:(offset, string) => {
      //creamos una variable vacia para guardar nuestro resultado final
        let decipheredLetter = "";
        //iteramos por todo el string a través de un bucle
            for (let i = 0; i < string.length; i++) {
            let firstPosition = (string.charCodeAt(i) - 90 - offset) % 26 + 90;
        //creamos una variable para guardar el string cifrado
            let decipheredLetter2 = String.fromCharCode(firstPosition);
        //concatenamos el resultado a nuestra variable vacia
            decipheredLetter += decipheredLetter2;
            }
        return decipheredLetter;
    }
};
