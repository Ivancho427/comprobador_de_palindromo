function telephoneCheck(str) {

  //    str.replace(/[.*+\-?^${}()|[\]\\]/g,'\\$&'); 

    
  let expresionRegular = /^(1\s?)?(\(\d{2,3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return expresionRegular.test(str);
  
  }
  
  telephoneCheck();
  
  console.log(telephoneCheck("555-555-5555"));
  console.log(telephoneCheck("1 555-555-5555"));
  console.log(telephoneCheck("555-5555"));
  console.log(telephoneCheck("2(757)622-7382"));
