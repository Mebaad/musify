  

function validate(){

var Username = document.getElementById("UN").value; 
var PhoneNumber = document.getElementById("PN").value; 
var EmailAdress = document.getElementById("ED").value; 
var Adress = document.getElementById("A").value; 
var Password = document.getElementById("P").value; 
var ConfirmPassword = document.getElementById("CP").value; 

Usernamepattern = /^[a-zA-z]{3,20}$/;
PhoneNumberpattern = /^[0-9]/;
EmailAdresspattern = /^[a-zA-Z._]+@(gmail|outlook|hotmail|yahoo).[a-z]{3,}$/;
Adresspattern = /^[a-zA-Z/-0-9]/;
Passworpattern = /^[a-zA-Z0-9]/;
ConfirmPassworpattern = /^[a-zA-Z0-9]/;
}
// username

if(Usernamepattern.test(Username)){
document.getElementById("UNerror").innerHTML = "";
document.getElementById("UN").style.borderColor = "green";
}

else{
document.getElementById("UNerror").innerHTML = "Username Is Invalid!";    
document.getElementById("UNerror").style.color = "red";
}

// PhoneNumber

if(PhoneNumberpattern.test(PhoneNumber)){
document.getElementById("PNerror").innerHTML = "";
document.getElementById("PN").style.borderColor = "green";
}

else{
document.getElementById("PNerror").innerHTML = "PhoneNumber Is Invalid!";    
document.getElementById("PNerror").style.color = "red";
}

// EmailAdress

if(EmailAdresspattern.test(EmailAdress)){
document.getElementById("EDerror").innerHTML = "";
document.getElementById("ED").style.borderColor = "green";
}

else{
document.getElementById("EDerror").innerHTML = "EmailAdress Is Invalid!";    
document.getElementById("EDerror").style.color = "red";
}

// address

if(Adresspattern.test(Adress)){
document.getElementById("Aerror").innerHTML = "";
document.getElementById("A").style.borderColor = "green";
}

else{
document.getElementById("Aerror").innerHTML = "Adress Is Invalid!";    
document.getElementById("Aerror").style.color = "red";
}

// Password

if(Passworpattern.test(Password)){
document.getElementById("Perror").innerHTML = "";
document.getElementById("P").style.borderColor = "green";
}

else{
document.getElementById("Perror").innerHTML = "Password Is Invalid!";    
document.getElementById("Perror").style.color = "red";
}

// ConfirmPassword

if(ConfirmPassworpattern.test(ConfirmPassword)){
document.getElementById("CPerror").innerHTML = "";
document.getElementById("CP").style.borderColor = "green";
}

else{
document.getElementById("CPerror").innerHTML = "ConfirmPassword Is Invalid!";    
document.getElementById("CPerror").style.color = "red";
}






