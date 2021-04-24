function showPass(){
    let inpType=document.querySelector("#password");
    let showpass=$(".showpass");
if(inpType.type === "password"){
inpType.type = "text";
showpass.attr("class","icofont-eye icofont-2x showpass");
}else{
inpType.type = "password";
showpass.attr("class","icofont-eye-blocked icofont-2x showpass");
}
}