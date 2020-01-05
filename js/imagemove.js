
function mousemove(event){

    let imageSide = document.getElementById("imageSide");

    let x = event.clientX;
    let y = event.clientY;

    console.log("x:" + x);

    console.log("y:" + y);

    imageSide.style.marginTop=(y/200)+"vh";
    imageSide.style.marginRight=(x/200)+"vh";


}
