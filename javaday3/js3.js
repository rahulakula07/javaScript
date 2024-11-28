var percentage = prompt("enter the percentage:");
let grade;
if (percentage >= 90 && percentage<=100){
    grade="A";
}else if (percentage >= 70 && percentage<=89){
    grade="B";
}else if (percentage >= 60 && percentage<=69){
    grade="C";
}else if (percentage >= 50 && percentage<=59){
    grade="C";
}else if (percentage >= 40 && percentage<=49){
    grade="D";
}else if (percentage >= 0 && percentage<=39){
    grade="F";
}
console.log("According to your percentage, your grade was.", grade);
