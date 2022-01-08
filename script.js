function compute()
{
    var p = document.getElementById("principal").value;
    if (p<=0||p==null){
        //negative value handling
        alert("Enter a Positive Number")
        document.getElementById("principal").focus();
    }else{
        //working of compute button
    var r = document.getElementById("rate").value;
    var t = document.getElementById("years").value;
    var int = p*t*r/100;
    var year = new Date().getFullYear()+parseInt(t);
    const res= "<div>If you deposit <mark>"+p+"</mark>,<br> at an interest rate of <mark>"+r+"%</mark>.<br> You will receive an amount of <mark>"+(int+p)+"</mark>,<br> in the year <mark>"+year+"</mark><div>"
    document.getElementById("result").innerHTML = res;
    }
}
function updateRate()
{
    //to update range values
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}