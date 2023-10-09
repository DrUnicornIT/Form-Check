var name=localStorage.getItem("fullname");
var dob=localStorage.getItem("Date of Birth");
var email=localStorage.getItem("email");
var phone=localStorage.getItem("mobile_number");
var gen=localStorage.getItem("Gender");
var school=localStorage.getItem("school");
var des=localStorage.getItem("describe");
document.getElementById("fullname_ouput").innerHTML = "Full name: " + name;
document.getElementById("Date of Birth").innerHTML = "Date of Birth: " + dob;
document.getElementById("Email").innerHTML = "Email: " + email;
document.getElementById("Mobile Number").innerHTML = "Mobile Number: " + phone;
document.getElementById("Gender").innerHTML = "Gender: " + gen;
document.getElementById("School").innerHTML = "School: " + school;
document.getElementById("Describe").innerHTML = "Describe: " + des;


var des_1=localStorage.getItem("pic1");
document.getElementById("pic1").src = des_1;

console.log(des_1);
console.log(document.getElementById("pic2").src)

var des_2=localStorage.getItem("pic2");
document.getElementById("pic2").src = des_2;

var des_3=localStorage.getItem("pic1");
document.getElementById("pic3").src = des_3;

var des_4=localStorage.getItem("pic1");
document.getElementById("pic4").src = des_4;

