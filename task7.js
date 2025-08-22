function convertation(sum){
    if(isNaN(sum)){
        return "Noto'gri ma'lumot"
    }
    return `${Math.round(sum/12_500).toFixed(2)} USD`
}
alert(convertation(+prompt("mablag' UZS kiriting:")))