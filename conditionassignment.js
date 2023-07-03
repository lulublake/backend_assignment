let number = 8534687875;
let converted = number.toString();
let requiredlength = converted.length == 10;

if(!isNaN(number) && requiredlength == true){
    console.log("Phone number activated");
}else{
    console.log("Invalid number");
}
