document.addEventListener("DOMContentLoaded",function(){
  fetch('data.json').then(function (response) {
    response.json().then(function (data) {
        data.forEach(function afficheAnalogie(items) {
    var liste = document.querySelector(".liste-analogies");
    liste.innerHTML = liste.innerHTML + "<section id=" + items.id + "><img src='" + items["image"] + "'class='imag'><div class='content'><h2>Si j’étais " + items.analogie + ", je serais " + items.valeurAnalogie + ".</h2><p>" + items.explication + "</p></div></section>";

  });

  // animation scroll

  ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1400,
  });


  ScrollReveal().reveal('.page', { delay: 600, origin: 'bottom' });
  ScrollReveal().reveal('.text-box', { delay: 700, origin: 'right' });
  ScrollReveal().reveal('.content p, .content h2', { delay: 200, origin: 'bottom' });

// Popup
  var popup = document.querySelector('.popup-visible')
  var btnMentions = document.querySelector('.image-cliquable p')
  btnMentions.addEventListener('click', function () {
    popup.style.display = 'block'
  })


  var fermer = document.querySelector('.fermer')
  fermer.addEventListener('click', function () {
    popup.style.display = 'none'

  })

// Section pour les individus
  document.querySelector('#sub').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#vous').innerHTML +=  "<section><img src='" + document.querySelector("#image").value + "'class='imag'><div class='content'><h2>Si j’étais " + document.querySelector("#analogie").value + ", je serais " + document.querySelector("#valeurAnalogie").value + ".</h2><p>" + document.querySelector("#arguments").value + "</p></div></section>";

  // API
    fetch("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=keren&courriel=" + document.querySelector("#mail").value + "&message=Si j'étais " + document.querySelector("#analogie").value + ", je serais " + document.querySelector("#valeurAnalogie").value + document.querySelector("#arguments").value).then(function (response) {
      response.json().then(function (data) {
        if (data.status == "success") {
          document.querySelector("#message").innerHTML = "Votre message a bien été reçu";
        } else {
          document.querySelector("#message").innerHTML = "Désolé votre message n'a pas été reçu";
        }
      })
    })
  });


});

})
});