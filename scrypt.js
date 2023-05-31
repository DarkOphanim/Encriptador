//Constante que indica el contenido escrito para encriptar / desencritar
const textArea = document.querySelector(".encryptDecryptArea-TextArea");
//Constante que indica el contenido resultante de la encriptacion / desencriptacion
const textAreaResult = document.querySelector(".resultingMessageArea-TextArea");
//Constate pare el boton de copiar
const copyButton = document.querySelector(".copyButton-copy");
//Constante para el area del boton de copiar
const copyButtonArea = document.querySelector(".copyButton");
//Constate para mensajes e imagen en "resultingMessageTextArea"
const characterMessage = document.querySelector(".resultingMessageArea-img1");
const warningMessageOne = document.querySelector(".resultingMessageArea-p1");
const warningMessageTwo = document.querySelector(".resultingMessageArea-p2");

//Funcion para boton de encriptacion
function btnEncryptMessage(){ 
    const encryptText = encryptMessage(textArea.value);
    textAreaResult.value = encryptText;
    textArea.value = "";
}

//Funcion para boton de desencriptacion
function btnDecryptMessage(){
    const encryptText = decryptMessage(textArea.value);
    textAreaResult.value = encryptText;
    textArea.value = "";
}

//Funcion para boton de copiado
function btnCopyMessage(){
    navigator.clipboard.writeText(textAreaResult.value);
}

//Funcion para ocultar mensajes e imagen
function doThisDisplay(){
    copyButton.style.display= "block";
    copyButtonArea.style.display="block";
    characterMessage.style.display= "none";
    warningMessageOne.style.display= "none";
    warningMessageTwo.style.display= "none";
}

//Funcion en escenario de que no se haya escrito un mensaje a encriptar / desencriptar
function noMessageWrited(){
    if(textArea.value == ""){
        textAreaResult.value = "No se ingreso ningún mensaje. Por favor, escriba un mensaje a encriptar o desencriptar.";
    }
}

//Funcion para encriptacion
function encryptMessage(encryptString){
    let encryptVocals = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    let encryptVocalsAccent = [["é","enter"],["í","imes"],["á","ai"],["ó","ober"],["ú","ufat"]];
    encryptString = encryptString.toLowerCase();
    doThisDisplay();
    
        if(textArea.value==""){
            noMessageWrited();
            return textAreaResult.value;
        }

        else{
            for(let i = 0; i < encryptVocals.length; i++){
                if(encryptString.includes(encryptVocals[i][0])){
                    encryptString = encryptString.replaceAll(encryptVocals[i][0],encryptVocals[i][1]);
                    }   
                }

            for(let i = 0; i < encryptVocalsAccent.length; i++){
                if(encryptString.includes(encryptVocalsAccent[i][0])){
                    encryptString = encryptString.replaceAll(encryptVocalsAccent[i][0],encryptVocalsAccent[i][1]);
                    }   
                }
            }
        return encryptString;
}


//Funcion para desencriptacion
function decryptMessage(encryptString){
    let encryptVocals = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    let encryptVocalsAccent = [["é","enter"],["í","imes"],["á","ai"],["ó","ober"],["ú","ufat"]];
    encryptString = encryptString.toLowerCase();
    doThisDisplay();

    if(textArea.value==""){
        noMessageWrited();
        return textAreaResult.value;
    }

    else{
        for(let i = 0; i < encryptVocals.length; i++){
            if(encryptString.includes(encryptVocals[i][0])){
                encryptString = encryptString.replaceAll(encryptVocals[i][1],encryptVocals[i][0]);
                }   
            }
        }
    return encryptString;
}