const discount = function(narx, miqdor, callback){
let sum = narx * miqdor;
callback((sum >= 100_000 ) ? sum * 0.9 : sum)
}
function check(result){
 if(isNaN(result)){
    alert("Kirish malumotlari xato")
 }else{
    alert(result)
}
}
let narx = +prompt("Summa: ")
let miqdor = +prompt("Miqdorni kiriting: ")
discount(narx, miqdor, check)
