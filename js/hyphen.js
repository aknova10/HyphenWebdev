function popup() 
{
var message = document.getElementById("comment").value;
alert(message);

}

function changeColor() {
    document.getElementById("color-control").style.color = "#2C8EC4";
    if (document.getElementById("color-control").style.color === 'rgb(44, 142, 196)') 
    {
        
        document.getElementById("color-control").style.color = "#000000";
    }
    else 
    {
        document.getElementById("color-control").style.color = "#2C8EC4";
    }
}