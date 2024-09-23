document.getElementById('toggle-for-donation').addEventListener ('click', function  (event) {
    
    toggleBetween ('all-cards');
    toggleBtnColor (event.target.id);
    
})

document.getElementById('toggle-for-history').addEventListener ('click', function  (event) {

    toggleBetween ('all-history');
    toggleBtnColor (event.target.id);
})

document.getElementById('noakhali-donation-btn').addEventListener ('click', function () {
    const amount = getValueFromInputField('noakhali-input-amount');
    let userBalance = getValueFromInnerText ('user-balance');
    const title = getStringFromInnerText('title-noakhali');
    donationBtnAction ('noakhali-balance', userBalance, amount, title);    
   })


document.getElementById('feni-donation-btn').addEventListener ('click', function () {
    const amount = getValueFromInputField('feni-input-amount');
    let userBalance = getValueFromInnerText ('user-balance');
    const title = getStringFromInnerText('title-feni');
    donationBtnAction ('feni-balance', userBalance, amount, title);     
})


document.getElementById('quota-protest-donation-btn').addEventListener ('click', function () {
    const amount = getValueFromInputField('quota-protest-input-amount');
    let userBalance = getValueFromInnerText ('user-balance');
    const title = getStringFromInnerText('title-quota');
    donationBtnAction ('quota-protest-balance', userBalance, amount, title);     
})
