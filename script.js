 // CKEDITOR
 CKEDITOR.replace('textarea');
 let blog = document.getElementById("blog")
 let btn = document.getElementById("btnS")
 
 btn.addEventListener("click", () => {
     let texterea = CKEDITOR.instances.textarea.getData();
     console.log("texterea");
    //  btn.insertAdjacentHTML("beforebegin", texterea )
     let textTexterea = document.createElement("p");
     textTexterea.innerHTML= texterea;
     let but_del= document.createElement("button");
     but_del.className="but_del"
     but_del.innerHTML= "Delete";
     but_del.addEventListener("click", () => {
        textTexterea.innerHTML="";
        but_del.remove();
     });
     blog.appendChild(textTexterea);
     blog.appendChild(but_del);

 });

 const userName = localStorage.getItem("name");
 if(!userName){
    window.location.href='Login.html';
 }else {
    let textUser = document.getElementById("text");
    textUser.innerText= userName;
 }


 let logout =document.getElementById("logout")
 logout.addEventListener("click", () => {
    localStorage.clear()

 });