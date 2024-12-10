// print 1 to 10 num in acending order
for(i=1;i<=10;i++){
    console.log(i);
}

// print 1 to 10 num in decending order
for(i=10;i>=1;i--){
    console.log(i);
}

// print -1 to -10 num in decending order
for(i=-1;i>=-10;i--){
    console.log(i);
}

// print 1 to 10 num in decending order
for(i=-10;i<=-1;i++){
    console.log(i);
}

// sum of 10 numbers
let sum=0;
for(i=1;i<=10;i++){
    sum+=i;
}
console.log(sum);

// multiplecation of 10 numbers
let mul=1;
for(i=1;i<=10;i++){
    mul*=i;
}
console.log(mul);

// to find even and odd in 1 to 10 num
for(i=1;i<=10;i++){
    if(i % 2==0){
        console.log(i, "even");
    }else{
        console.log(i, "odd");
    }
}

// to find the sum of even and odd in 1 to 10 num
var sumE=0;
var sumO=0;
for(i=1;i<=10;i++){
    if(i % 2==0){
       sumE+=i;
    }else{
        sumO+=i;
    }
}
console.log(sumE,"sum of even");
console.log(sumO, "sum of odd");