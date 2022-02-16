document.getElementById('calculate-button').addEventListener('click',function(){
    const footCost = setIdField('food-cost');
    const rentCost = setIdField('rent-cost');
    const clothCost = setIdField('cloth-cost');
    const totalIncome = setIdField('income-id');
    if(footCost.value >= 0 && rentCost.value >= 0 && clothCost.value >= 00 && totalIncome.value > 0){
        const addedValue = Number(footCost.value)+Number(rentCost.value) + Number(clothCost.value);
        const expensesBlance = setIdField('expenced-blance')
        const Blance = setIdField('total-blance')
        if(addedValue <= Number(totalIncome.value)){
        Blance.innerText = Number(totalIncome.value) - addedValue;
        expensesBlance.innerText = addedValue;
        }else{
            alert('blance low');
        }
    }else{
        alert('enter a posative value');
    }
});

//save part
document.getElementById('save-button').addEventListener('click',function(){
    const saveInput = setIdField('save-input');
    if(saveInput.value > 0){
        const totalIncome = setIdField('income-id');
        const saveBlance = setIdField('saving-blance');
        const saveParcent = Number(saveInput.value).toFixed(2)/100;
        const cheekBlance = Number(totalIncome.value) * saveParcent;
        const remainigBlance = setIdField('remaining-blance');
        const Blance = setIdField('total-blance')
        if(cheekBlance <= Number(Blance.innerText)){
            remainigBlance.innerText = Number(Blance.innerText) - Number(cheekBlance);
            saveBlance.innerText = cheekBlance;
        }else{
             alert('blance is low')
        }
    }else{
        alert('Please enter a possative number');
    }
});

//function
function setIdField(id) {
    const inputValue = document.getElementById(id);
    return inputValue;
}