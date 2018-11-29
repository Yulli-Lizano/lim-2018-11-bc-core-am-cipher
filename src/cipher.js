window.cipher = {
  encode:(offset, string) => {
      let cipheredLetter = "";
      for (let i = 0; i < string.length; i++) {
          let newPosition = ((string.toUpperCase()).charCodeAt(i) - 65 + offset) % 26 + 65;
          let cipheredLetter2 = String.fromCharCode(newPosition);
          cipheredLetter += cipheredLetter2;
      }
      return cipheredLetter;
  },
  decode:(offset, string) => {
      let decipheredLetter = "";
      for (let i = 0; i < string.length; i++) {
        let firstPosition = (string.charCodeAt(i) - 90 - offset) % 26 + 90;
        let decipheredLetter2 = String.fromCharCode(firstPosition);
        decipheredLetter += decipheredLetter2;
      }
      return decipheredLetter;
  }
};
