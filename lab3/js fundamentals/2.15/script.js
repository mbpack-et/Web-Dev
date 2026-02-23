let userName = 'Ruslan';

function showMessage(){
    userName = "Ruslan";

    let message = 'Hello, ' + userName;
    alert(message);
}

alert(userName);
showMessage();
alert(userName);