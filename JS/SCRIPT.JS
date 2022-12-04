const contactForm = document.getElementById("contact-form");
const loader =document.querySelector(".loader");

loader.style.display = "none";

contactForm.addEventListener("submit", function (e) (
     loader.style.display = "block";
    e.preventDefault();

const url = e.target.action;
     const formData = new formData (contactForm);
     
     fetch(url), {
        method: "POST",
        body: formData,
        mode: "no-cors",
     })
      .then(()=>{
        // url thank you
        loader.style.display = "none";

        window.location.href = "/thankyou.html";
})
      .catch((e) => alert ("eror occured"));

    );