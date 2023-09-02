console.log("hello");
const display1E1=document.querySelector('.display-1');
const display2E1=document.querySelector('.display-2');
const tempResultE1=document.querySelector('.temp-result');
const numbersE1=document.querySelectorAll('.number');
const operationE1=document.querySelectorAll('.operation');
const equalE1=document.querySelector('.equal');
const clearE1=document.querySelector('.all-clear');
const toggleSign1=document.querySelector('.toggleSign');
let dis1Num='';
let dis2Num='';
let result=null;
let lastOperation='';
let haveDot=false;

numbersE1.forEach(number => {
    number.addEventListener('click',(e)=>{
      if(e.target.innerText === '.'&& !haveDot){
        haveDot=true;
      } else if (e.target.innerText === '.' && haveDot){
        return;
      }
      dis2Num+=e.target.innerText;
      display2E1.innerText=dis2Num;
    });
});
// operation
operationE1.forEach((operation) =>{
  operation.addEventListener('click',(e)=>{
    // /,*,%
    if(!dis2Num){
      return;
    }
    haveDot=false;
    const operationName=e.target.innerText;
    if(dis1Num && dis2Num && lastOperation){
      mathOperation();
    }else{
      result=parseFloat(dis2Num);//string to a number
    }
    clearVar(operationName);
    lastOperation=operationName;
    // console.log(result);
  });
});
function clearVar(name= ''){
dis1Num+=dis2Num+' '+name+' ';
display1E1.innerText=dis1Num;
display2E1.innerText='';
dis2Num='';
tempResultE1.innerText=result;
}
function mathOperation(){
  if(lastOperation==='*'){
    result=parseFloat(result) * parseFloat(dis2Num);
  }else if(lastOperation==='+'){
    result=parseFloat(result) + parseFloat(dis2Num)
  }else if(lastOperation==='-'){
    result=parseFloat(result) -parseFloat(dis2Num);
  }else if(lastOperation==='/'){
    result=parseFloat(result)/parseFloat(dis2Num);
  }else if(lastOperation==='%'){
    result=parseFloat(result)%parseFloat(dis2Num);
  }
}
// = button
equalE1.addEventListener('click',()=>{
if(!dis2Num ||  !dis1Num)return;
  haveDot=false;
  mathOperation();
  clearVar();
  display2E1.innerText=result;
  tempResultE1.innerText='';
  dis2Num=result;
  dis1Num='';
});
clearE1.addEventListener('click',(e)=>{
  display1E1.innerText='';
  display2E1.innerText='';
  dis1Num='';
  dis2Num='';
  result='';
  tempResultE1.innerText='';

})
// if you want to be use your calcalutor button
window.addEventListener('keydown',(e)=>{
  if(e.key==='0'||e.key==='1'||e.key==='2'||e.key==='3'||e.key==='4'||e.key==='5'||e.key==='6'||e.key==='7'||e.key==='8'||e.key==='9'||e.key==='.'){
    clickButtonE1(e.key);
  }else if(  e.key==='+'|| e.key==='-'|| e.key==='*'|| e.key==='/'|| e.key==='%'){
     clickOperation(e.key);
  }else if(e.key=='Enter'|| e.key==='='){
    clickEqual();
  }
  
});
function clickButtonE1(key){
numbersE1.forEach(button=>{
if(button.innerText===key){
  button.click();
}
})
}
function clickOperation(key){
  operationE1.forEach(button=>{
    if(button.innerText===key){
      button.click();
    }
})
}
function clickEqual(){
  equalE1.click();

};