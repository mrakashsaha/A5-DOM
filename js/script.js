document.getElementById('toggle-for-donation').addEventListener ('click', function  (event) {
    
    toggleBetween ('all-cards');
    toggleBtnColor (event.target.id);
    
})

document.getElementById('toggle-for-history').addEventListener ('click', function  (event) {

    toggleBetween ('all-history');
    toggleBtnColor (event.target.id);
})

let balance = getValueFromInnerText ('balance');


document.getElementById('noakhali-donation-btn').addEventListener ('click', function () {
    let noakhaliBalance = getValueFromInnerText ('noakhali-balance');
    const amount = getValueFromInputField('noakhali-input-amount');
    
    
    if (balance>0 && amount<=balance) {
        balance = balance - amount;
        noakhaliBalance = noakhaliBalance + amount;

        setValueToInnerText('balance', balance);
        setValueToInnerText('noakhali-balance', noakhaliBalance);
    }
    
    else {
        alert ('Insufficient Balance!');
    }

    
})
