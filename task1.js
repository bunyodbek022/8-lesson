function checkPassword(str){
 if(str.length>=8){
    return "Kuchli parol"
 }else{
    return "Kuchsiz parol"
 }
}
console.log(checkPassword(prompt("Enter the password:")))