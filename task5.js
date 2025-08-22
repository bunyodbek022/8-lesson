function transClock(minut){
 let soat = Math.floor(minut/60)
 let min = minut % 60
 alert(`${soat} soat ${min} minut`)
}
transClock(+prompt("Minutni kiriting"))