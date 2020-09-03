function rot13(str) {
    var ascii1 = ("ABCDEFGHIJKLM");
    var ascii2 = ("NOPQRSTUVWXYZ")
    //  ascii1.charCodeAt();
    //  ascii2.charCodeAt();

console.log(ascii1.charCodeAt(0)); // Revisión del primer arreglo en código ASCII
console.log(ascii2.charCodeAt(12)); // Revisión del segundo arreglo en código ASCII
 var cambioLetras = str.split("");   

    for (var i = 0; i < str.length; i++) {
       for (var j = 0; j < ascii1.length; j++) {
         if ( str[i] === ascii1 [j] ) {
            cambioLetras[i] = ascii2[j];
      
         } else if (str[i] === ascii2 [j]) {
            cambioLetras[i] = ascii1[j];
         }
        
       }
    } 
    return cambioLetras.join("");

 }
 console.log(rot13("SERR PBQR PNZC"));
 console.log(rot13("SERR CVMMN!"));
 console.log(rot13("SERR YBIR?"));
 console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));