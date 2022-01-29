let doc1 = document.getElementById("textBox");
doc1.addEventListener("input", function(){
    let userCharInput = this.value;
    let charLenght = userCharInput.length;
    let chnageInnerHtml = document.getElementById("charSpan");
    chnageInnerHtml.innerHTML = charLenght;
   
});


let doc2 = document.getElementById("textBox");
doc2.addEventListener("input", function(){
    let userWordInput = this.value;
    userWordInput = userWordInput.trim();

     let wordSpace = userWordInput.split(" ");
     let cleanCode = wordSpace.filter(function(elm){
            return elm != "";
     })
     let doc3 = document.getElementById("wordsSpan");
     
     doc3.innerText = cleanCode.length;

})