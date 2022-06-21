var opr = prompt("Operator:  ")
var num1 = parseInt(prompt("Enter the first number:  "))
var num2 = parseInt(prompt("Enter the second number:  "))

if (opr == "+"){
    console.log(num1 + num2)
}
else if(opr == "-"){
    console.log(num1-num2)
}
else if (opr == "*"){
    console.log(num1 * num2)
}
else if (opr == "/"){
    console.log(num1/num2)
}