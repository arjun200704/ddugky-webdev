/*
let tableOf = 11;
let num = 1;
while (num <=10 ){
  console.log(tableOf,"x",num,"=", tableOf * num);
  num++;
}
  */
 /*
let squ = 8;
let num = 1;
while (num <=20){
  console.log(squ,"x",num,"=", squ * num);
  num++;
}
  */
 ///////////////////////////////
 //PRINT ALL EVEN NUM/////////
 ////////////////////////////
/*
 let num =1 ;
 let max = 50;
 let count = 0;
 while (num <= max ) {
  if (num % 2 == 0)console.log(num);
  count++;
  num++;
 }
  */
 
//////////////////////////
/// PRINT ALL ODD NUM////
/////////////////////////
/*
 
let num =1 ;
let max = 50;
while (num <= max ) {
 if (num % 2 == 1)console.log(num);
 num++;
}
 */
///////////////////////
///count tha digits in a given number //////
///////////////////////


let num = 12614;
while (num >0){
  let digit = num %10 ;
  console.log(digit);
  num = Math.floor(num/10);
}