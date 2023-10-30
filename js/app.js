let friendName = document.getElementById("nome-amigo");
let friendsList = document.getElementById("lista-amigos");

let friendsArray = [];



function adicionar() {

    if (friendName.value == "") {
        alert ("O campo 'Nome do Amigo' não pode ficar em branco");
    } else if (friendsArray.includes(friendName.value) == true) {
        alert ("Este nome já foi incluído na lista");
    } else { 
        friendsArray.push(friendName.value);
        friendsList.innerHTML = `<p> ${friendsList.innerHTML + friendName.value} </p>`;
        friendName.value = "";
    } 
}

function shuffleArray() {
    var i = friendsArray.length - 1;
    for (i; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = friendsArray[j];
        friendsArray[j] = friendsArray[i];
        friendsArray[i] = k;
    }
}

function sortear() { 
    if (friendsArray.length <= 2) {
        alert ("Para sortear o amigo secreto, é preciso que haja ao menos 3 pessoas na lista");
        return;
    } 
    shuffleArray();
    let sortedList = document.getElementById("lista-sorteio");
    var i = friendsArray.length;
    var j = i;
    while (i>0) {
        if (i == 1) {
            var k = `${friendsArray[i-1]} e ${friendsArray [j-1]}`;
        } else { 
            var k = `${friendsArray[i-1]} e ${friendsArray[i-2]}`;  
        }
        sortedList.innerHTML = `<p> ${sortedList.innerHTML + k} </p>`;
        i--;
        i--;  
    }
}

function reiniciar() {
    alert ("Reiniciar!");
    let sortedList = document.getElementById("lista-sorteio");
    friendName.value = "";
    friendsList.innerHTML = "";
    sortedList.innerHTML = "";
    friendsArray = [];
}
