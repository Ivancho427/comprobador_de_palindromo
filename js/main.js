function palindrome(str) {    
  let comparar = str.match(/[A-Za-z0-9]/gi).join("").toLowerCase();
  str = str.match(/[A-Za-z0-9]/gi).reverse().join('').toLowerCase();
  console.log(comparar === str);
  return comparar === str;

  }  
  
palindrome();






// palindrome("eye") debería devolver un booleano.
// palindrome("eye") debería devolver verdadero.
// palindrome("_eye") debería devolver verdadero.
// palindrome("race car") debería devolver verdadero.
// palindrome("not a palindrome") debe devolver falso.
// palindrome("A man, a plan, a canal. Panama") debería devolver verdadero.
// palindrome("never odd or even") debería devolver verdadero.
// palindrome("nope") debe devolver falso.
// palindrome("almostomla") debe devolver falso.
// palindrome("My age is 0, 0 si ega ym.") debería devolver verdadero.
// palindrome("1 eye for of 1 eye.") debe devolver falso.
// palindrome("0_0 (: /-\ :) 0-0") debería devolver verdadero.
// palindrome("five|\_/|four") debe devolver falso.