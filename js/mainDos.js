function convertToRoman(num) {
  let numeroEntero = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1,];
  
  let mumeroRomano = [ "M", "CM", "D", "CD", "C", "XC",   "L", "XL", "X", "IX", "V", "IV", "I" ];
  
   let nuevoNumero = '';
   let i = '';
   
    for ( i = 0; i < numeroEntero.length; i++) {
      while ( numeroEntero [i] <= num) {
        nuevoNumero = nuevoNumero + mumeroRomano [i];
        num -= numeroEntero[i];  
      }    
    }

    console.log(nuevoNumero);

    
      return nuevoNumero;
    }
    
   
  
   
  

  
  convertToRoman();
  
    
    
 

   




// convertToRoman(2) debe devolver "II".
// convertToRoman(3) debe devolver "III".
// convertToRoman(4) debe devolver "IV".
// convertToRoman(5) debe devolver "V".
// convertToRoman(9) debe devolver "IX".
// convertToRoman(12) debe devolver "XII".
// convertToRoman(16) debe devolver "XVI".
// convertToRoman(29) debe devolver "XXIX".
// convertToRoman(44) debe devolver "XLIV".
// convertToRoman(45) debe devolver "XLV"
// convertToRoman(68) debe devolver "LXVIII"
// convertToRoman(83) debe devolver "LXXXIII"
// convertToRoman(97) debe devolver "XCVII"
// convertToRoman(99) debe devolver "XCIX"
// convertToRoman(400) debe devolver "CD"
// convertToRoman(500) debe devolver "D"
// convertToRoman(501) debe devolver "DI"
// convertToRoman(649) debe devolver "DCXLIX"
// convertToRoman(798) debe devolver "DCCXCVIII"
// convertToRoman(891) debe devolver "DCCCXCI"
// convertToRoman(1000) debe devolver "M"
// convertToRoman(1004) debe devolver "MIV"
// convertToRoman(1006) debe devolver "MVI"
// convertToRoman(1023) debe devolver "MXXIII"
// convertToRoman(2014) debe devolver "MMXIV"
// convertToRoman(3999) debe devolver "MMMCMXCIX"