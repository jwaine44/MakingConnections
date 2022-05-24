function changeName() {
    document.querySelector("#name").innerText = "Eren Yeager";
}

var requests = 2;
var countRequests = document.querySelector("#requests");

function hideTodd() {
    document.querySelector(".toddebar").remove();
    requests--;
    countRequests.innerText = requests;
}

function hidePhil() {
    document.querySelector(".philkbar").remove();
    requests--;
    countRequests.innerText = requests;
}

var connections = 4181;
var countConnections = document.querySelector("#connections");

function acceptTodd() {
    document.querySelector(".toddebar").remove();
    requests--;
    countRequests.innerText = requests;
    connections++;
    countConnections.innerText = connections;
}

function acceptPhil() {
    document.querySelector(".philkbar").remove();
    requests--;
    countRequests.innerText = requests;
    connections++;
    countConnections.innerText = connections;
}