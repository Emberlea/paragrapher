var no=[];
function doit()
{
    for(var n=1; n<=12; n++){
    no.push(document.getElementById("para"+ n).value);
    document.getElementById("dave").innerHTML=no.join(". ")
    }
}