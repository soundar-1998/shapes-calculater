
function circle(){
    let r= Number(prompt("enter the radius value"))
    let area = Math.PI *(r*r)
window.alert(`The area of the circle is:${area}`);

}function square(){
    let r= Number(prompt("enter the side of square value"))
    let area = r*r
window.alert(`The area of the squre is:${area}`);

}function cylinder(){
    let r= Number(prompt("enter the first cylinder value"))
    let h= Number(prompt("enter the  second cylinder value"))
    let area = (2*Math.PI*r*h)+(2*Math.PI*(r*r))
window.alert(`The area of the cylinder values is:${area}`);

}function simpleinterest(){
    let p= Number(prompt("enter the first radius value"))
    let r= Number(prompt("enter  the  second  radius value"))
    let t= Number(prompt("enter the  thired radius value"))
    let area = (p*r*t)/100
window.alert(`The area of the Simpleinterest is:${area}`);
}
function ABC(){
    let  ch=prompt(" type  a character:");

if( ch=='a'||ch=='e'|| ch=='i'|| ch=='o'|| ch=='u')
{
window.alert(" it is a vowal");
}
else{
    window.alert("it is a constant");
}
}