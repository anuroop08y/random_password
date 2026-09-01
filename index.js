const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",":",";","<",">",",",".","?","/"];
let length=15;
function gp()
{
document.getElementById("b2-el1").textContent="";
document.getElementById("b2-el2").textContent="";
for(let i=0;i<length;i++)
{
    document.getElementById("b2-el1").textContent+=characters[Math.floor(Math.random()*characters.length)];
    document.getElementById("b2-el2").textContent+=characters[Math.floor(Math.random()*characters.length)];
}

}
function copyText1() {
    const text = document.getElementById("b2-el1").innerText;

    navigator.clipboard.writeText(text);
}
function copyText2() {
    const text = document.getElementById("b2-el2").innerText;

    navigator.clipboard.writeText(text);
}
