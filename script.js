

document.getElementById("Submit").onclick = function() {
    var name=document.getElementById("fullname").value;
    var aduuudob=document.getElementById("Date of Birth").value;
    var email=document.getElementById("Email").value;
    var phone=document.getElementById("Mobile Number").value;
    var gen=document.getElementById("Gender").value;
    var school=document.getElementById("School").value;
    var des=document.getElementById("Describe").value;


    localStorage.setItem("fullname", name);
    localStorage.setItem("Date of Birth", aduuudob);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile_number", phone);
    localStorage.setItem("Gender", gen);
    localStorage.setItem("school", school);
    localStorage.setItem("describe", des);
    console.log("Ahihi");
    

}



document.getElementById("Move").onclick = function() {
    console.log("Heelo");

    window.location.href ='profile.html';

}
