let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

function SendMessage(){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_c64tye8", "template_nc0an7q", params).then((res)=>{
        document.getElementById("fullName").value="";
        document.getElementById("email_id").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("Your message was sent successfully!");
    })
    .catch((err)=>console.log(err));

}

let icon = document.getElementById("sun-icon");
icon.onclick = function(){
  document.body.classList.toggle("light-theme");
  document.body.classList.contains("light-theme") ? icon.src="photos/moon.png" : icon.src="photos/sun.png";
}

const button = document.getElementsByClassName("icon")[0];
const navbarLink = document.getElementsByClassName("links")[0];

button.addEventListener("click", () => {
  navbarLink.classList.toggle('active');
  event.preventDefault();
})