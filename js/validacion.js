function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").addEventListener("click",()=>{
    if (    document.querySelectorAll("input").value!=""
            &&document.getElementById("terminos").checked
            &&document.getElementById("password1").value==document.getElementById("password2").value
            &&document.getElementById("password1").value.length>=6) {
                showAlertSuccess();
     } else {
                showAlertError();
    }
    
});