(function () {
  "use strict";
  const root = document.documentElement;

  const navToggle = document.querySelector("#js-navToggle");
  navToggle.addEventListener("click", function () {
    root.classList.toggle("show-nav");
  });

  const eventPP = document.querySelector("#js-eventPP");

  if (eventPP) {

    const eventOpenBtn = document.querySelector("#js-eventOpenBtn");

    const closeEventPP = function (event) {
      function close() {
        document.removeEventListener("keyup", closeEventPP);
        eventPP.removeEventListener("click", closeEventPP);

        root.classList.remove("show-event-popup");
      }

      switch (event.type) {
        case "keyup":
          if (event.key === "Escape" || event.keyCode === 27) close();
          break;
        case "click":
          if (
            event.target === this ||
            event.target.classList.contains("js-ppCloseBtn")
          )
            close();
          break;
      }
    };

    eventOpenBtn.addEventListener("click", function () {
      root.classList.add("show-event-popup");

      document.addEventListener("keyup", closeEventPP);
      eventPP.addEventListener("click", closeEventPP);
    });
  }

  const swipers = document.querySelectorAll(".js-swiper");

  swipers.forEach(function (swpr) {
    new Swiper(swpr, {
      updateOnWindowResize: true,
      slidesPerView: "auto",
      freeMode: true,
      spaceBetween: 60,
      speed: 500,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-arrow-next",
        prevEl: ".swiper-arrow-prev",
        disabledClass: "arrow--disabled"
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        620: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        962: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1340: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1660: {
          slidesPerView: 3,
          spaceBetween: 60,
        }
      }
    });
  });
  ymaps.ready(init);
  let myMap;

  function init(){     
      myMap = new ymaps.Map ("js-contactsMap", {
          center: [56.485020, 84.947649],
          zoom: 12
    });
  }

const jsSelectric = $(".js-selectric");

if (jsSelectric.length) {
  jsSelectric.selectric({
    nativeOnMobile: false
  });
}

const mobileMask = $('.js-mobileMask');

if (mobileMask.length) {
  mobileMask.mask('+7 (000) 000 00 00', { placeholder: "+7 (___) ___ __ __" });
}

const dateField = $(".js-dateField");
if (dateField.length) {
  const pickerInit = function (pick) {
    const dateInput = pick.find(".js-dateInput");
    const dateDay = pick.find(".js-dateDay");
    const dateMonth = pick.find(".js-dateMonth");
    const dateYear = pick.find(".js-dateYear");

    const dateConfig = {
      autoClose: true,
      minDate: new Date(),
      navTitles: {
        days: "MMMM <i>yyyy</i>"
      },
      onSelect: function ({ date }) {
        dateDay.val(date ? ("0" + date.getDate()).slice(-2) : "");
        dateMonth.val(date ? ("0" + (date.getMonth() + 1)).slice(-2) : "");
        dateYear.val(date ? date.getFullYear() : "");
      }
    };
    new AirDatepicker(dateInput[0], dateConfig);
  };

  $.each(dateField, function (i) {
    pickerInit($(this));
  });
}

const subscribeForm = $("#js-subscribeForm");

if (subscribeForm.length) {
  const subscribeAction = subscribeForm.attr("action");
  const subscribeEmail = subscribeForm.find("#js-subscribeEmail");
  
  subscribeForm.validate({
    errorElement: "span",
    submitHandler: function (form, event) {
      event.preventDefault();
      alert('a');

      $.ajax({
        url: subscribeAction,
        method: "POST",
        data: {
          email: subscribeEmail.val()
        },
        success: function () {
          subscribeEmail.val("");
          subscribeEmail.blur();
          alert("Вы успешно подписались на рассылку новостей");
        },
        error: function () {
          alert("Что-то пошло не так, попробуйте еще раз");
        }
      });
    }
  });
}

})();