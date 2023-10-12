function Checknow() {
    let name = document.getElementById('name').value;
    let credit = parseFloat(document.getElementById('credit').value);
    let salary = parseFloat(document.getElementById('salary').value);


    console.log(typeof name)
    if (credit > 800 && salary > 80000) {
        alert('Congratulations, ' + name + '! You qualify for up to 1.5 lakhs loan.');
    } else if (credit > 780 && salary > 50000) {
        alert('Congratulations, ' + name + '! You qualify for up to 80k loan.');
    } else if (credit > 720 && salary > 20000) {
        alert('Congratulations, ' + name + '! You qualify for up to 50k loan.');
    } else {
        alert('You do not meet any conditions.');
    }
}
