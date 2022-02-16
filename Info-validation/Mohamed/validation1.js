function validate1() {
    valCheck = true;
    var FnameCheck = alphaNumCheck(document.forms["Name"]["Fname"].value);
    var LnameCheck = alphaNumCheck(document.forms["Name"]["Lname"].value);
    var genderr = document.getElementById("Gender");
    var selectedG = genderr.value;
    var statee = document.getElementById("State");
    var selectedS = statee.value;


    

    var genderCheck = selectChecker(selectedG);
    var stateCheck = selectChecker(selectedS);
    var image1 = getImage(Boolean(FnameCheck), "Fname");
    var image2 = getImage(Boolean(LnameCheck), "Lname");
    var image3=getImage(Boolean(genderCheck), "Gender");
    var image4=getImage(Boolean(stateCheck), "State");
 
    
    var labelNotifyFname=getNotificationName(Boolean(FnameCheck), "Fname") ;
    var labelNotifyLname=getNotificationName(Boolean(LnameCheck), "Lname") ;
    var labelNotifyGender=getNotificationSelect(Boolean(genderCheck), "Gender") ;
    var labelNotifyState=getNotificationSelect(Boolean(stateCheck), "State") ;
  


    document.getElementById("fname").appendChild(image1);
    document.getElementById("lname").appendChild(image2);
    document.getElementById("gender").appendChild(image3);
    document.getElementById("state").appendChild(image4);
    document.getElementById("fname").appendChild(labelNotifyFname);
    document.getElementById("lname").appendChild(labelNotifyLname);
    document.getElementById("gender").appendChild(labelNotifyGender);
    document.getElementById("state").appendChild(labelNotifyState);


   
  if(FnameCheck && LnameCheck && genderCheck && stateCheck ){
    window.location.href="validation2.html";
  }

}



function alphaNumCheck(entry) {
    let regex = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}
function selectChecker(Selection){

    if(Selection==1){

        return false;
    }

return true;
}


function getNotificationName(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        label.setAttribute( 'class', 'errorMessage' );
      }

    label.innerHTML = bool ? "" : "The name has to be alphanumeric!";
    return label;
}

function getNotificationSelect(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        label.setAttribute( 'class', 'errorMessage' );
      }

    label.innerHTML = bool ? "" : "Please choose one of the options!";
    return label;
}


function getImage(bool, ID) {
    var image = document.getElementById("image" + ID);
    if (image == null) {
        image = new Image(15, 15);
        image.id = "image" + ID;
    }
    image.src = bool ? './correct.png' : './wrong.png';
    return image;
}
