function FizzBuzz(x) {
    if (x%3===0 && x%5===0) {
        return "FizzBuzz";
    } else if (x%5===0) {
        return "Buzz";
    } else if (x%3===0) {
        return "Fizz"
    } else {
        return x
    }
}

// for (let i = 0; i<=100; i++) {
//     console.log(FizzBuzz(i));
// }

function Quarters(x, y) {
    let quarts = 0;
    while(x>y) {
        quarts +=4
        x--
    }
    return quarts
}

// console.log(Quarters(10,4))

function change(num,cost) {
    num *= 100
    cost *= 100
    //rC stands for returned Change
    let rC = [0,0,0,0,0,0,0,0,0]

    while (num>cost) {
        if (num>=cost+5000) {
            num-=5000;
            rC[0] ++;
        } else if (num>=cost+2000) {
            num-=2000;
            rC[1] ++;
        } else if (num>=cost+1000) {
            num-=1000;
            rC[2] ++;
        } else if (num>=cost+500) {
            num-=50;
            rC[3] ++;
        } else if (num>=cost+100) {
            num-=100;
            rC[4] ++;
        } else if (num>=cost+25) {
            num-=25;
            rC[5] ++;
        } else if (num>=cost+10) {
            num-=10;
            rC[6] ++;
        } else if (num>=cost+5) {
            num-=5;
            rC[7] ++;
        }  else if (num>=cost+1) {
            num--;
            rC[8] ++;
        }     
    }
    console.log(rC)
    return ("You will get back " + rC[0] + " fifty dollar bills, " + rC[1] + 
        " twenty dollar bills, " + rC[2] + " ten dollar bills, " + rC[3] + " five dollar bills, " 
        + rC[4] + " one dollar bills, " + rC[5] + " quarters, " + rC[6] + " dimes, " + rC[7] + " nickels, and " + rC[8] + " pennies.")
}

console.log(change(500, 48.19))