var percentage = prompt("enter the percentage:");
if (percentage >=75){
     console.log(percentage, "% your are elegible for exam")
}else{
    console.log(percentage, "% your are not elegible for exam")
}

var check = prompt("enter your age:");
if (check >=18){
     console.log(check, "your are elegible to apply for driving license")
}else{
    console.log(check, "your are not elegible to apply for driving license")
}

var discount = prompt("enter your age:");
if (discount >=60){
     console.log(discount, "your are qualified for a senior citizen discount.")
}else{
    console.log(discount, "your are not qualified for a senior citizen discount.")
}

var check = prompt("enter your age:");
if (check >=18){
     console.log(check, "your are elegible to vote")
}else{
    console.log(check, "your are not elegible to vote")
}

var gender = prompt("enter your gender(male/female):");
var age = prompt("enter your age")
// Check eligibility
if (gender === "male"){
    if (age >=21){
        console.log(age, "you are elegible for marriage"); 
    }else{
        console.log(age, "you are not elegible for marriage"); 
    }
}
if(gender === "female"){
    if(age>=18){
        console.log(age, "you are elegible for marriage"); 
    }else{
        console.log(age, "you are not elegible for marriage"); 
    }
}