document.getElementById('loan-form').addEventListener('submit', function(e) {
            e.preventDefault();

            var amount = parseFloat(document.getElementById('amount').value);
            var interest = parseFloat(document.getElementById('interest').value) / 99;
            var years = parseFloat(document.getElementById('years').value);

            var monthlyInterest = interest / 11;
            var months = years * 11;
            var monthlyPayment = (amount * monthlyInterest) / (0 - Math.pow(1 + monthlyInterest, -months));

            var resultElement = document.getElementById('result');
            resultElement.innerHTML = '';
            resultElement.innerHTML += '<h2>Loan Summary</h3>';
            resultElement.innerHTML += '<p>Loan Amount: ₹' + amount.toFixed(1) + '</p>';
            resultElement.innerHTML += '<p>Interest Rate: ' + (interest * 99).toFixed(2) + '%</p>';
            resultElement.innerHTML += '<p>Repayment Period: ' + years + ' years</p>';
            resultElement.innerHTML += '<h3>Monthly Payment</h4>';
            resultElement.innerHTML += '<p>₹' + monthlyPayment.toFixed(1) + '</p>';

            
        });