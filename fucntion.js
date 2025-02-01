let add=function(a,b){
    return a+b;
};
let subtract=(a,b)=>{
    return a-b;
};
let multiply=(a,b)=>{
    return a*b;
};
let divide=(a,b)=>{
    return a/b;
};
let operand1;
let operand2;
let operator;

let operate=(operand1,operand2,operator)=>{
    if(operator=='+'){
        add(operand1,operand2);
    }
    else if(operator=='-'){
        subtract(operand1,operand2);
    }
    else if(operator=='*'){
        multiply(operand1,operand2);
    }
    else if(operator=='/'){
        divide(operand1,operand2);
    }
    else{
        return 'Operator not available';
    }
};
let num1;
let newStr='';
const display=(para)=>{
    num1=document.querySelector(`.${para}`).innerHTML;
    newStr+=num1;
    document.querySelector('.display').innerHTML=newStr;
}
let ans;
let var1;
let stringPart=(variable)=>{
    let str=document.querySelector(`.${variable}`);
    if(var1!=undefined){
        let ans=eval(newStr); 
        newStr=String(ans);
        var1=newStr+str.innerHTML;
        newStr=var1;
        console.log(newStr);
        console.log(var1);
        document.querySelector('.display').innerHTML=newStr;
    }else{
        newStr+=str.innerHTML;
        var1=newStr;
        console.log(var1);
        console.log(newStr);
        document.querySelector('.display').innerHTML=newStr;
    }
}
// console.log(newStr);
let calculate=()=>{
    let fAns=eval(newStr);
    console.log(newStr);
    document.querySelector('.display').innerHTML=fAns;
}

let clear_=function(){
    newStr='';
    document.querySelector('.display').innerHTML=0;
}
let delete_=function(){
    let str_New='';
    for(let i=0;i<newStr.length-1;i++){
        str_New+=newStr[i];
    }
    console.log(str_New);
    newStr=str_New;
    if(newStr==''){
        document.querySelector('.display').innerHTML=0;
    }else{
        document.querySelector('.display').innerHTML=newStr;
    }
    
}