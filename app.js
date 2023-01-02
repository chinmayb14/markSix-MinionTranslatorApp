var serverURL="	https://api.funtranslations.com/translate/minion.json";
var inputText=document.querySelector("#inputText");
var translateButton=document.querySelector("#translateButton");
var outputText=document.querySelector("#outputText");

function fetchURL(text){

    return serverURL+"?"+"text="+text;
}

function errorHandler(error)
{
    prompt("Error Occured",error)
    alert("Server is facing some issues. Pls try later!")
}

function getTranslatedText(text)
{
    fetch(fetchURL(text))
    .then(response => response.json())
    .then(json =>{
        outputText.innerText=json.contents.translated;
    } )
    .catch(errorHandler)
}

function eventHandler(){
getTranslatedText(inputText.value);
}

translateButton.addEventListener("click", eventHandler)