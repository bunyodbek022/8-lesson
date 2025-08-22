function cutInfo(str){
 let index = str.trim().indexOf(" ")
 let str1 = str.slice(0,1);
 let str2 = str.slice(index)
 return str1 + "." + str2;
}
alert(cutInfo(prompt("Enter the fullname ")))