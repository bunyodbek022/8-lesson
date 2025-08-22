function repeatWord(words, str){
    let count = 0;
    for(let word of words){
        if(str.toLowerCase()==word.toLowerCase()){
            count++;
        }
    }
    alert(`${count} martda qatnashgan`)
}
repeatWord(prompt("Matnni kiriting:"), prompt("Qaysi harfni qidiryapsiz?"))