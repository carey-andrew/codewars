String.prototype.toAlternatingCase = function () {
    // store string in variable str
    let str = "";
        // store string in variable - loop through and alternate.;
    for (let char of this) {
       if (char === char.toUpperCase()) {
         str += char.toLowerCase()
       } else {
        str += char.toUpperCase()
      } 
      }
        return str;
    } 