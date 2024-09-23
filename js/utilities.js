function toggleBetween (id) {
    document.getElementById ('all-cards').classList.add ('hidden');
    document.getElementById ('all-history').classList.add ('hidden');
    document.getElementById (id).classList.remove ('hidden');
}

function toggleBtnColor (id) {
    document.getElementById ('toggle-for-history').classList.add('bg-transparent', 'border-2');
    document.getElementById ('toggle-for-donation').classList.add('bg-transparent', 'border-2');
    document.getElementById (id).classList.remove('bg-transparent', 'border-2');
    document.getElementById (id).classList.add('bg-brandGreen');
}

function getValueFromInnerText (id) {
    return parseFloat(document.getElementById(id).innerText);
}


function setValueToInnerText (id, value) {
    return parseFloat(document.getElementById (id).innerText = value);
}




function getValueFromInputField (id) {
    const x = document.getElementById(id).value;
    if (!(isNaN(x))) {
        return parseFloat(document.getElementById(id).value);
    }
    else {
        alert ('Please enter valid amount?');
    }
}