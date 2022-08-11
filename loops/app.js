//loop
// for(let i = 0; i<10;i++) {
//     console.log(i);
// }

//exercise 1
// for(let j=10;j>0; j--){
//     console.log(j);
// }

// //exercise 2
// for(let k=0; k<=20; k++) {
//     if (k<10 && k%2!=0) {
//         console.log(k);
//     }
//     if (k>10 && k%2==0) {
//         console.log(k-10);
//     }
// }

// //exercise 3
// for (let m=6; m<=60; m+=3) {
//     console.log(m);
// }

// //exercise 4
// var num = "";
// for (let n=0; n<6; n++) {
//     for (o=0; o<n;o++){
//         num += "#";
//     }
//     console.log(num);
//     num = "";
// }

// //exercise 5
// for(let p=0; p<=10; p++){
//     if (p%2==0){
//         console.log(p);
//     }
// }

// //exercise 6
// var num2 = 0;
// for (let q=1; q<=20; q++){
//     console.log(q);
//     if (q%2==0){
//         console.log("even");
//     } else {
//         console.log("odd");
//     }
//     for (r=q-1; r>1 ;r--) {
//         if (q%r==0){
//             num2++;
//         }
//     }
//     if (num2==0 && q!=1){
//         console.log("prime");
//     }
//     num2 = 0;
// }

// //while loop
// let a = 4;
// while (a<10) {
//     console.log(a);
//     a+=2;
// }
    
//exercise while
let num =3;
// //exercise 1
// while (num<35) {
//     console.log(num);
//     num +=3;
// }

// //exercise 2
// num =5;
// while (num<100) {
//     console.log(num);
//     num +=5;
// }

// //exercise 3
// num =0;
// while (num<=20) {
//     if (num%2==0){
//         console.log(3*num);
//     }
//     num++;
// }

//exercise 4
// num = 2;
// let primeNum = 0;
// let num2 = 0;
// while (num<=20) {
//     primeNum = num - 1;
//     while (primeNum>1){
//         if (num%primeNum==0){
//             num2++;
//         }
//         primeNum--;
//     }
//     if (num2==0){
//         console.log(num);
//     }
//     num2 = 0;
//     num++;
// }

//exercise 5
// num =10;
// let quarters = 0;
// while(num>4){
//     quarters += 4;
//     num--;
// }
// console.log("Nando got " + quarters + " quarters in return.");

//exercise 6
// num = 10;
// while(num<=200) {
//     if (num<100 && num%2!=0) {
//         console.log(num);
//     }
//     if (num>100 && num%2==0) {
//         console.log(num-100);
//     }
//     num += 10;
// }

//exercise 7
// num = 500;
// while(num<=800) {
//     if (num%4==0){
//         console.log(num);
//     }
//     num++;
// }

//exercise 8
num = 100;
diff = 0;
total = "You will get back ";
while(num>30){
    num-=10;
    diff++
}
total += (diff + " ten dollar bills and ");
diff = 0; 
while(num>28){
    num--;
    diff++
}
total += (diff + " dollar bills.");
diff = 0;
console.log(total);