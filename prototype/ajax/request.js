const getButton = document.getElementById("get-button");
const sendButton = document.getElementById("send-button");


const sendRequest = function () {}

const getData = function () {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
    xhr.responseType = "json";
    xhr.setRequestHeader('Content-Type', "application/json");
    xhr.send();


    xhr.onload = function () {
        const result = xhr.response;
        console.log(result);
    }
};

const sendData = function (data) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }));
    xhr.responseType = "json";
  
    xhr.send(data);
    
    

    xhr.onload = function () {
        const result = xhr.response;
        console.log(result);
    }
};


getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);