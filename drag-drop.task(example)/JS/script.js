let head1=document.querySelectorAll(".head1");
let longBox1=document.querySelectorAll(".longBox1");




head1.forEach(element=>{
    let id=element.getAttribute("id");
    element.ondragstart=function (e) {
     e.dataTransfer.setData("id",id);
    }
})
longBox1.ondragover=(e)=>{
    e.preventDefault();
};

longBox1.ondrop=function (e) {
    let longBox1Element=document.getElementById(e.dataTransfer.getData("id"))
    console.log(longBox1Element);
    longBox1.appendChild(longBox1Element);
}