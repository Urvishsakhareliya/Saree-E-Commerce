  const documentWidth = document.documentElement.clientWidth;
  const windowWidth = window.innerWidth;
  const scrollBarWidth = windowWidth - documentWidth; 
  $(".humber_menu").click(function () {
    $(".backlayer").show();
    $(".bottom-navigation").addClass("active");
    $("body").addClass("overflow-hidden");
    $("body").css("padding-right", `${scrollBarWidth}px`);
  });

  $(".backlayer,.nav-link").click(function () {
    $(".backlayer").hide();
    $(".bottom-navigation").removeClass("active");
    $(".FIlters_sections").removeClass("show");
    $(".Cart-section").removeClass("active");
    $("body").removeClass("overflow-hidden");
    $("body").css("padding-right", `initial`);
  });

  $(".nav_close").click(function () {
    $("body").removeClass("overflow-hidden");
    $("body").css("padding-right", `initial`);
    $(".bottom-navigation").removeClass("active");
    $(".backlayer").hide();
  });

  $(".bottom-navigation .nav-link").click(function () {
    $(".bottom-navigation .nav-link").removeClass("active");
    $(this).addClass("active");
  });

  $(".country_dropdown li").click(function () {
    var src = $(this).find("a > img").attr("src");
    $("#countryimg").attr("src", src);
  });

  $("#searchbtn").click(function () {
    $(".search_bar").slideToggle();
  });

  $(".close-btn").click(function () {
    $(".search_bar").slideUp();
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("#Fix").addClass("fix_nav");
    } else {
      $("#Fix").removeClass("fix_nav");
    }
  });

  $(".cart_icon").click(function () {
    $(".Cart-section").addClass("active");
    $(".backlayer").show();
    $("body").addClass("overflow-hidden");
    $("body").css("padding-right", `${scrollBarWidth}px`);
  });

  $(".close_cart_btn").click(function () {
    $(".Cart-section").removeClass("active");
    $(".backlayer").hide();
    $("body").removeClass("overflow-hidden");
    $("body").css("padding-right", `initial`);
  });

  function auto_tab_input() {
    $("#otp_div .form-control").keyup(function () {
      if (this.value.length == this.maxLength) {
        $(this).nextAll("#otp_div .form-control:enabled:first").focus();
      }
    });
  }
  function auto_backspace() {
    $("#otp_div .form-control").keyup(function (e) {
      if (e.keyCode == 8) {
        if ($(this).prev().length > 0) {
          $(this).prev("input").focus();
        }
      }
    });
  }

  $(document).ready(function () {
    auto_tab_input();
    auto_backspace();
  });

  function getOTP(e) {
    alert();
    e.preventdefault();
    window.location.href = "get-otp.html";
  }
