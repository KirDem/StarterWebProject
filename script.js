$(document).ready(function() {
  $('.reviews-slider').slick({
    infinite: true,
    speed: 500,
    prevArrow: $("#reviews-previous"),
    nextArrow: $("#reviews-next"),
    fade: true,
    swipe: false, 
    draggable: false,
    slidesToShow: 1,
    adaptiveHeight: true
  });
  
  $('.reviews-slider').on('afterChange', function(event, slick, currentSlide) {
    $('#reviews-number').text('0' + (currentSlide + 1));
  });

  //First slider
  $("#wwu-slider-1").slick({
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10%',
    autoplaySpeed: 3500,
    responsive: [
        {
            breakpoint: 1024,
            settings: {slidesToShow: 3}
        },
        {
            breakpoint: 600, 
            settings: {slidesToShow: 2}
        }
    ]
  });

  //Second slider
  $("#wwu-slider-2").slick({
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10%',
    autoplaySpeed: 3500,
    responsive: [
        {
            breakpoint: 1024,
            settings: {slidesToShow: 3}
        },
        {
            breakpoint:600, 
            settings: {slidesToShow: 2}
        }
    ]
  });  

  $(".faq-enum div:first").addClass("active");
  $(".faq-enum p:not(:first)").hide();
  $(".faq-enum h3").click(function () {
    if (!$(this).parent().hasClass("active")) {
      $(".faq-enum p:visible").slideUp("fast");
      $(this).next("p").slideToggle("fast");
      $(".faq-enum div").removeClass("active");
      $(this).parent().toggleClass("active");
    }
    else {
      $(".faq-enum p:visible").slideUp("fast");
      $(".faq-enum div").removeClass("active");
    }
  });
});

//Send form
function saveLocalStorage() {
  localStorage.setItem("inputName", $("#footer-name").val());
  localStorage.setItem("inputNumber", $("#footer-number").val());
  localStorage.setItem("inputEmail", $("#footer-email").val());
  localStorage.setItem("inputMessage", $("#footer-message").val());
  localStorage.setItem("footer-policy", $("#footer-policy").prop("checked"));
}

function loadLocalStorage() {
  if (localStorage.getItem("name") !== null)
      $("#footer-name").value(localStorage.getItem("inputName"));
  if (localStorage.getItem("number") !== null)
      $("#footer-number").value(localStorage.getItem("inputNumber"));
  if (localStorage.getItem("email") !== null)
      $("#footer-email").value(localStorage.getItem("inputEmail"));
  if (localStorage.getItem("message") !== null)
      $("#footer-message").value(localStorage.getItem("inputMessage"));
  if (localStorage.getItem("policy") !== null) {
      $("input.chb").prop("checked", localStorage.getItem("footer-policy") === "true");
      if ($("input.chb").prop("checked"))
          $("input.footer-contact-button").removeAttr("disabled");
  }
}
function clear() {
  localStorage.clear()
  $("#footer-name").val("");
  $("#footer-number").val("");
  $("#footer-email").val("");
  $("#footer-message").val("");
  $("input.chb").val(false);
}

$(document).ready(function () {
  loadLocalStorage();
  $("#footer-form").submit( async function (e) {
      e.preventDefault();
      let data = $(this).serialize();
      console.log(data)
      await fetch('https://formcarry.com/s/adu1AdDRs76', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
              'Content-Type': 'application/json; charset=UTF-8',
          }
      })
          .then((response) => response.json())
          .then((data) => {
              console.log(data)
              alert("form send")
          })
          .catch((e) => {
              alert('error')
          })
  });

  $("input.chb").change(function () {
    if ((!this.checked))
        $("input.footer-contact-button").attr("disabled", "");
    else
        $("input.footer-contact-button").removeAttr("disabled");
})

$("#footer-form").change(saveLocalStorage);
})                

const feedbackButtons = document.querySelectorAll('button.contact-button')
const feedbackModal = document.querySelector('div.feedback-form-modal')
const feedbackModalClosed = document.querySelector('button.feedback-modal-btn')

feedbackButtons.forEach((button) => {
    const coordinateBtn = button.getBoundingClientRect()
    console.log(coordinateBtn.left)
    console.log(coordinateBtn.top)
    button.addEventListener('mouseover', function (i) {
        if (feedbackModal.className === 'feedback-form-modal') {
            const coords = this.getBoundingClientRect()
            feedbackModal.style = `
            left: ${coords.left}px;
            top: ${coords.bottom}px;
        `
            this.addEventListener('click', function () {
                feedbackModal.classList.add('visible')
            })
        }

    })
})

feedbackModalClosed.addEventListener('click', () => {
    feedbackModal.classList.remove('visible')
})

const nameInput = document.querySelector('input.name-input')
const numberInput = document.querySelector('input.number-input')
const emailInput = document.querySelector('input.email-input')
const messageInput = document.querySelector('textarea.message-input')
const nameInputFooter = document.querySelector('input.name-footer-input')
const numberInputFooter = document.querySelector('input.number-footer-input')
const emailInputFooter = document.querySelector('input.email-footer-input')
const messageInputFooter = document.querySelector('textarea.message-footer-input')
const navbarButton = document.querySelector('button.navbar-toggler')
const navMenu = document.querySelector('div.navbar-collapse')

navbarButton.addEventListener('click', () => {
    if (navMenu.className === 'navbar-collapse collapse active') {
        navMenu.classList.remove('active')
    } else {
        navMenu.classList.add('active')
    }
})

const loadingStorage = () => {
    if (localStorage.getItem('inputName') !== null) {
        nameInputFooter.value = localStorage.getItem('inputName')
        nameInput.value = localStorage.getItem('inputName')
    }
    if (localStorage.getItem('inputNumber') !== null) {
        numberInputFooter.value = localStorage.getItem('inputNumber')
        numberInput.value = localStorage.getItem('inputNumber')
    }
    if (localStorage.getItem('inputEmail') !== null) {
        emailInputFooter.value = localStorage.getItem('inputEmail')
        emailInput.value = localStorage.getItem('inputEmail')
    }
    if (localStorage.getItem('inputMessage') !== null) {
        messageInputFooter.value = localStorage.getItem('inputMessage')
        messageInput.value = localStorage.getItem('inputMessage')
    }
}

loadingStorage()

nameInput.oninput = (e) => {
    localStorage.setItem('inputName', e.target.value)
}
numberInput.oninput = (e) => {
    localStorage.setItem('inputNumber', e.target.value)
}
emailInput.oninput = (e) => {
    localStorage.setItem('inputEmail', e.target.value)
}
messageInput.oninput = (e) => {
    localStorage.setItem('inputMessage', e.target.value)
}
nameInputFooter.oninput = (e) => {
    localStorage.setItem('inputName', e.target.value)
}
numberInputFooter.oninput = (e) => {
    localStorage.setItem('inputNumber', e.target.value)
}
emailInputFooter.oninput = (e) => {
    localStorage.setItem('inputEmail', e.target.value)
}
messageInputFooter.oninput = (e) => {
    localStorage.setItem('inputMessage', e.target.value)
}
