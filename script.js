// script.js
function sendMoney() {
    const recipient = document.getElementById('recipient').value;
    const amount = document.getElementById('amount').value;

    // You would typically send this data to the server using an API call (e.g., fetch or XMLHttpRequest)
    // For simplicity, we'll just log the data to the console in this example.
    console.log(`Sending ${amount} to ${recipient}`);

    // Display a result message (you would handle this differently in a real app)
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Money sent successfully: ${amount} to ${recipient}`;
}

