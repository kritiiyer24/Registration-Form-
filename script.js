function validate(){ 
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var age=document.getElementById("age").value;

if(name==="")
{ 
    document.getElementById("nameError").innerHTML="Name Cannot Be Empty"; 
    document.getElementById("nameError").style="color:red";
}

else{ 
    document.getElementById("nameError").innerHTML=""; 
}
if(email==="")
{ 
    document.getElementById("emailError").innerHTML="Email Cannot Be Empty"; 
    document.getElementById("emailError").style="color:red";
}

else{ 
    document.getElementById("emailError").innerHTML=""; 
}

if(age==="")
{ 
    document.getElementById("ageError").innerHTML="Age Cannot Be Empty"; 
    document.getElementById("ageError").style="color:red";
}

else{ 
    document.getElementById("ageError").innerHTML=""; 
} 

if(valid){
    var displayDiv = document.getElementById("displayValues");
    displayDiv.innerHTML = "<h3>Submitted Information:</h3>" +
    "<p>Name: " + name + "</p>" + "<p>Email: " + email + "</p>" + "<p>Age: " + age + "</p>";
    }

else{
        document.getElementById("displayValues").innerHTML = "";
    }
} 