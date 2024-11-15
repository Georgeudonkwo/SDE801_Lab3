function increment(id){
    const element=document.getElementById(id);
    const val=element.innerText;
    element.innerText=+val+1;
}
function decrement(id){
    const element=document.getElementById(id);
    const val=element.innerText;
    element.innerText=+val-1;
}
function reset(id){
    const element=document.getElementById(id);
    element.innerText=0;
}
