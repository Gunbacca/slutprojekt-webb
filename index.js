let a = true;
function Menu(){
    if(a){
        document.getElementById("info").style.display = "block";
        a = false
    }
    else{
        document.getElementById("info").style.display = "none";
        a = true
    }
}