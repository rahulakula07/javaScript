// let userEmail=prompt("enter you email")
// let userPassword=prompt("enter your password")
// let users=[{email:"rahul@gmail.com",
//     password:"rahul@123"}
//     ,{
//         email:"rahul1@gmail.com",
//         password:"rahul1@123"
//     }]
// let user=users.find(user => user.email === userEmail && user.password ===userPassword)
// if(user){
//     console.log("logged in successful");
//     alert("login successfully")   
// }else{
//     console.log("no user found");
//     alert("signup first")
    
// }

// let arr=[1,2,3,[4,5,[6,7,8,]]]
// console.log(arr.flat(Infinity));

//allow pdf and dox file to be uploaded
// let resumetype=[".pdf",".dox"]
// let uploadresume=prompt("wpload your resume")
// if(uploadresume.endsWith(resumetype[0]) || uploadresume.endsWith(resumetype[1])){
//     alert("resume uploaded")
// }else{
//     alert("pls upload on .pdf and .doc files")
// }

// for multiple doc types  
let arr1=[".pdf", ".doc", ".docx", ".txt", ".rtf", ".odt"]
let uploadresume=prompt("upload resume")
let count=false;
for(let ext of arr1){
    if(uploadresume.endsWith(ext)){
        count=true;
        break;
    }
}
if(count){
    console.log("resume uploaed")
}else{
    console.log("Please upload a valid file (e.g., .pdf, .doc, .docx, .txt, .rtf, .odt)")
}

let arr2=[".pdf", ".doc", ".docx", ".txt", ".rtf", ".odt"]
let resume=prompt("upload resume")
for(let ext of arr2){
    if(resume.endsWith(ext)){
        alert=("resume uploaded")
        return;
    }
}
alert=("Please upload a valid file (e.g., .pdf, .doc, .docx, .txt, .rtf, .odt)")