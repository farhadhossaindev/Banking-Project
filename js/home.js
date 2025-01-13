

document
    .getElementById('dipositeBtn')
    .addEventListener('click', function () {

        //--------------- diposite Section ------------------------//
        const dipositeInput = document.getElementById('dipositeInput');
        const dipositeInputValue = dipositeInput.value;

        if (dipositeInputValue === '') {
            alert('Deposite field must not be Emty !')
        } else {

            const dipositeAmount = document.getElementById('dipositeamount');

            const dipositeAmountText = dipositeAmount.innerText;

            const dipositeAmountCalculation = parseFloat(dipositeInputValue) + parseFloat(dipositeAmountText);

            dipositeAmount.innerText = dipositeAmountCalculation


            // Clear input field
            dipositeInput.value = "";

            // total blance
            const totalBlance = document.getElementById('total_blance');
            const totalBlanceText = totalBlance.innerText;

            totalBlance.innerText = parseFloat(dipositeInputValue) + parseFloat(totalBlanceText);

        }



    });


//--------------------withdraw section-------------------------//

document.getElementById('Withdraw_btn').addEventListener('click', function () {

    const withdrawInput = document.getElementById('Withdraw_input');
    const withdrawInputValue = withdrawInput.value;

    if (withdrawInputValue === '') {
        alert('Withdraw field must not be enty !')
    } else {
        const withdrawAmount = document.getElementById('Withdraw_amount');

        const withdrawAmountText = withdrawAmount.innerText;

        const withdrawAmountCalculation = parseFloat(withdrawInputValue) + parseFloat(withdrawAmountText);

        withdrawAmount.innerText = withdrawAmountCalculation;


        withdrawInput.value = ''

        // total blance
        const totalBlance = document.getElementById('total_blance');
        const totalBlanceText = totalBlance.innerText;

        totalBlance.innerText = parseFloat(totalBlanceText) - withdrawInputValue;
    }



})