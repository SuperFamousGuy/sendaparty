function sendBirthday() {
    table_number = Math.floor((Math.random() * 10) + 1);
    alert("A Birthday Celebration has been sent to table ".concat(table_number));
}

function setApplebees() {
    document.getElementById("sendtext").innerHTML = "SEND A BIRTHDAY TO A RANDOM TABLE AT APPLEBEES";
}

function setOliveGarden() {
    document.getElementById("sendtext").innerHTML = "SEND A BIRTHDAY TO A RANDOM TABLE AT OLIVE GARDEN";
}

function setCheesecakeFactory() {
    document.getElementById("sendtext").innerHTML = "SEND A BIRTHDAY TO A RANDOM TABLE AT Cheesecake Factory";
}
