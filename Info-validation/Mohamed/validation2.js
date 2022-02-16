function validate2() {

    valCheck = true;
    var resultEmailCheck = emailCheck(document.forms["contact information"]["email"].value);
    var image1 = getImage(Boolean(resultEmailCheck), "email");
    var labelNotifyEmail1 = getNotification(Boolean(resultEmailCheck), "email");
    document.getElementById("Email").appendChild(image1);
    document.getElementById("Email").appendChild(labelNotifyEmail1);

    var phoneCheck = numCheck(document.forms["contact information"]["phone"].value);
    var image2 = getImage(Boolean(phoneCheck), "phone");
    document.getElementById("Phone").appendChild(image2);
    var labelNotifyPhoneNum = getNotificationPhone(Boolean(phoneCheck), "phone");
    document.getElementById("Phone").appendChild(labelNotifyPhoneNum);

    var addressCheck = address(document.forms["contact information"]["address"].value);
    var image3 = getImage(Boolean(addressCheck), "address");
    document.getElementById("Address").appendChild(image3);
    var labelNotifyAddress = getNotificationAddress(Boolean(addressCheck), "address");
    document.getElementById("Address").appendChild(labelNotifyAddress);

}

function getNotification(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        label.setAttribute('class', 'errorMessage');
    }

    label.innerHTML = bool ? "" : "Email should be in form xxx@xxx.xxx, which x should be alphanumeric!";
    return label;
}
function getNotificationPhone(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        label.setAttribute('class', 'errorMessage');
    }

    label.innerHTML = bool ? "" : "The phone number has to be in the form xxx-xxx-xxxx or xxxxxxxxxx and x should be numeric!";
    return label;
}

function getNotificationAddress(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        label.setAttribute('class', 'errorMessage');
    }

    label.innerHTML = bool ? "" : "Must be in the form of city & state and seperated by a comma. It also has to be only Alphabetic! Example: Ames,IA";
    return label;
}
function numCheck(p) {
    if (p.length != 10 && p.length != 12) {

        return false;
    }

    else {

        if (p.length == 10) {
            for (i = 0; i < p.length; i++) {

                if (isNaN(p[i])) {

                    return false;
                }
            }

        }
        else {
            Split = p.split('-');
            if (Split.length != 3) {

                return false;
            } else {

                if (Split[0].length != 3 || Split[1].length != 3 || Split[2].length != 4) {

                    return false;
                } else {
                    var nums = /^[0-9]+$/;
                    if (!(Split[0].match(nums)) || !(Split[1].match(nums)) || !(Split[2].match(nums))) {
                        return false;
                    }

                }
            }

        }
    }
    return true;
}

/*
Assuming that the address has to be separated by a comma and 
contain only letters(with no specific number of them) as in the PDF
*/
function address(address) {

    Split = address.split(',');

    if (Split.length != 2) {

        return false;
    }

    let letters = /^[A-Za-z]+$/;

    if (Split[0].length < 2 || Split[1].length < 2) {

        return false;
    }

    if (!(Split[0].match(letters)) || !(Split[1].match(letters))) {
        return false;
    }

    return true;
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

function emailCheck(email) {
    atSplit = email.split('@');
    if (atSplit.length == 2 && alphaNumCheck(atSplit[0])) {
        periodSplit = atSplit[1].split('.')
        if (periodSplit.length == 2 && alphaNumCheck(periodSplit[0] + periodSplit[1])) {
            return true;
        }
    }
    valCheck = false;
    return false;
}


function alphaNumCheck(entry) {
    let regex = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
