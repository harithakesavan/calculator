//display all numbers and operators other than ac and = inside input with id=in
function display(num){
    result.value+=num
}
//clear all contents from input when we click on AC 
function clearAll(){
    result.value=""

}
//evaluate expression using eval()
function output(){
    result.value=eval(result.value)
}
//<--
function removelast(){
    result.value=(result.value).slice(0,-1)
}