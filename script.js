
    document.addEventListener('DOMContentLoaded', function() {
    const taxForm = document.getElementById('taxForm');
    const calculateBtn = document.getElementById('calculateBtn');
    const modal = document.getElementById('myModal');
    const span = document.getElementsByClassName('close')[0];
    const taxResult = document.getElementById('taxResult');
    const grossIncomeInput = document.getElementById('grossIncome');
    const extraIncomeInput = document.getElementById('extraIncome');
    const deductionsInput = document.getElementById('deductions');

    grossIncomeInput.addEventListener('input', function() {
        const grossIncome = parseInt(grossIncomeInput.value);
        const grossIncomeDiv = document.getElementById('gross-income-div');
        let message = '';

        if( isNaN(grossIncome) ) {
            message = 'Gross income should be a number';
            grossIncomeDiv.style.display = 'block';
        } else {
            grossIncomeDiv.style.display = 'none';
        }
    });

    extraIncomeInput.addEventListener('input', function() {
        const extraIncome = parseInt(extraIncomeInput.value);
        const extraIncomeDiv = document.getElementById('extra-income-div');
        let message = '';

        if( isNaN(extraIncome) ) {
            message = 'Extra income should be a number';
            extraIncomeDiv.style.display = 'block';
        } else {
            extraIncomeDiv.style.display = 'none';
        }
    });

    deductionsInput.addEventListener('input', function() {
        const deductionsInputValue = parseInt(deductionsInput.value);
        const deductionsDiv = document.getElementById('totaldeductions');
        let message = '';

        if( isNaN(deductionsInputValue) ) {
            message = 'Deductions should be a number';
            deductionsDiv.style.display = 'block';
        } else {
            deductionsDiv.style.display = 'none';
        }
    });


    calculateBtn.addEventListener('click', function() {
        if (taxForm.checkValidity()) {
            const grossIncome = parseInt(document.getElementById('grossIncome').value);
            const extraIncome = parseInt(document.getElementById('extraIncome').value);
            const deductions = parseInt(document.getElementById('deductions').value);
            const ageGroup = document.getElementById('ageGroup').value;

            let tax = 0;
            const taxableIncome = grossIncome + extraIncome - deductions - 800000;

            if (taxableIncome > 0) {
                if (ageGroup === '<40') {
                    tax = 0.3 * taxableIncome;
                } else if (ageGroup === '≥40 & <60') {
                    tax = 0.4 * taxableIncome;
                } else if (ageGroup === '≥60') {
                    tax = 0.1 * taxableIncome;
                }
            }

            taxResult.textContent = `Your tax amount is: ${tax} Lakhs`;
            modal.style.display = 'block';
        } else {
            showErrors();
        }
    });

    span.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    function showErrors() {
        const inputs = document.querySelectorAll('input[required], select[required]');
        inputs.forEach(input => {
            const errorIcon = input.nextElementSibling;
            if (!input.checkValidity()) {
                errorIcon.style.display = 'inline';
            } else {
                errorIcon.style.display = 'none';
            }
        });
    }
});

