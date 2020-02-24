function getData(){    
let fName=document.getElementById("fName").value;
let lName=document.getElementById("lName").value;
let sNum =document.getElementById("sNum").value;
let cName=document.getElementById("cName").value;
let temp=' ';
document.getElementById("fullName").innerHTML=` Student ${fName}, ${lName} is a student at the ${cName} at Sheridan College.`

for(let x=0;x<sNum.length;x++){
temp+=' '+sNum[x];
console.log(sNum[x]);
}
document.getElementById("studentNumber").innerHTML=`${temp}`;

}
