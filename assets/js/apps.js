document.getElementById('calculate-button').addEventListener('click',function(){
    const footCost = setIdField('food-cost');
    const rentCost = setIdField('rent-cost');
    const clothCost = setIdField('cloth-cost');
    const totalIncome = setIdField('income-id');
    if(footCost.value > 0 && rentCost.value > 0 && clothCost.value > 00 && totalIncome.value > 0){
        const addedValue = Number(footCost.value)+Number(rentCost.value)+Number(clothCost.value);
        const expensesBlance = setIdField('expenced-blance')
        const Blance = setIdField('total-blance')
        if(addedValue <= Number(totalIncome.value)){
        Blance.innerText = Number(totalIncome.value) - addedValue;
        expensesBlance.innerText = addedValue;
        }else{
            alert('blance low')
        }
    }else{
        alert('enter a posative value')
    }

});
//function
function setIdField(id) {
    const inputValue = document.getElementById(id);
    return inputValue;
}