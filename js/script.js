var angkaCalculate = document.getElementById("result").innerText;

function operasi(){
    var result = eval(angkaCalculate);

    const hasil = document.getElementById("result");

    const attr = document.createAttribute("value");
    attr.value = result;
    
    hasil.setAttributeNode(attr);

    //Logging
    logging(result);
}

function input(value){
    const hasil = document.getElementById("result");

    angkaCalculate += value;


    const attr = document.createAttribute("value");
    attr.value = angkaCalculate;

    hasil.setAttributeNode(attr);
}

function hapus(){
    const hasil = document.getElementById("result");
    
    const attr = document.createAttribute("value");
    angkaCalculate = "";
    attr.value = "";

    hasil.setAttributeNode(attr);
}

function logging(log){
    let d = new Date();
    let text = d.toUTCString();
    console.log(text + " Logging : " +  log);
}