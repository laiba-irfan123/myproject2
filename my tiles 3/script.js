$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );

  function flipCard() {
    const card = document.getElementById('flipCard');
    card.querySelector('.flip-card-inner').classList.toggle('flipped');
}

const 
      images = document.querySelectorAll(".image-box");
search.addEventListener("keyup", e =>{
    if(e.key == "Enter"){
        let searcValue = search.value,
            value = searcValue.toLowerCase();
            images.forEach(image =>{
                if(value === image.dataset.name){ 
                    return image.style.display = "block";
                }
                image.style.display = "none";
         });
    }
});
search.addEventListener("keyup", () =>{
    if(search.value != "") return;
    images.forEach(image =>{
        image.style.display = "block";
    })
})



document.querySelectorAll(".projcard-description").forEach(function(box) {
    $clamp(box, {clamp: 6});
  });




  function validateForm(event) {
    event.preventDefault(); 

    var str1 = document.fm.fname.value;
    var str2 = document.fm.lname.value;
    var email = document.fm.email.value;
    var reg = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.[A-Za-z]{2,4}$/;
    var nameReg = /^[A-Za-z]+$/;

    if (str1.length == 0) {
        alert("Enter first name");
        return false;
    }

    if (!nameReg.test(str1)) {
        alert("First name should contain only alphabetic characters");
        return false;
    }

    if (str2.length == 0) {
        alert("Enter last name");
        return false;
    }

    if (!nameReg.test(str2)) {
        alert("Last name should contain only alphabetic characters");
        return false;
    }


    if (reg.test(email) == false) {
        alert("Invalid email address");
        return false;
    }

    

    redirectToThankYouPage();
    document.fm.fname.value="";
    document.fm.lname.value="";
    document.fm.email.value="";
    return true;
}



function redirectToThankYouPage() {
    window.location.href ="ThankyouPage.html"; 
}