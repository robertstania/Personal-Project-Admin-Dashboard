console.log("%c Proudly Crafted by Tania Roberts.", "background: #222; color: #bada55"),
  function() {
    $(window).on("load", function() {
      $(".loader").fadeOut(), $(".page-loader").delay(350).fadeOut("slow")
    }), $(document).ready(function() {
      function e(e) {
        e.length > 0 && (e.hasClass("home-full-height") ? e.height($(window).height()) : e.height(.85 * $(window).height()))
      }

      function t(e, t) {
        if (e.length > 0) {
          var a = e.height(),
            i = $(document).scrollTop();
          if (e.hasClass("home-parallax") && $(t).scrollTop() <= a && e.css("top", .55 * i), e.hasClass("home-fade") && $(t).scrollTop() <= a) {
            $(".caption-content").css("opacity", 1 - i / e.height() * 1)
          }
        }
      }

      function a(e, t, a) {
        var i = $(window).scrollTop();
        e.length > 0 && t.length > 0 && (i >= a ? e.removeClass("navbar-transparent") : e.addClass("navbar-transparent"))
      }

      function i(e) {
        e > 767 && $(".navbar-custom .navbar-nav > li.dropdown").hover(function() {
          var t = $(".dropdown-menu", $(this)).offset().left,
            a = $(".dropdown-menu", $(this)).width();
          if (e - t < 2 * a ? $(this).children(".dropdown-menu").addClass("leftauto") : $(this).children(".dropdown-menu").removeClass("leftauto"), $(".dropdown", $(this)).length > 0) {
            var i = $(".dropdown-menu", $(this)).width();
            e - t - a < i ? $(this).children(".dropdown-menu").addClass("left-side") : $(this).children(".dropdown-menu").removeClass("left-side")
          }
        })
      }

      function o(e, t) {
        if (e > 767 && !0 !== t) {
          $(".navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown").removeClass("open");
          var a = 0,
            i;
          $(".navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown").hover(function() {
            var e = $(this);
            i = setTimeout(function() {
              e.addClass("open"), e.find(".dropdown-toggle").addClass("disabled")
            }, 0)
          }, function() {
            clearTimeout(i), $(this).removeClass("open"), $(this).find(".dropdown-toggle").removeClass("disabled")
          })
        } else $(".navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown").unbind("mouseenter mouseleave"), $(".navbar-custom [data-toggle=dropdown]").not(".binded").addClass("binded").on("click", function(e) {
          e.preventDefault(), e.stopPropagation(), $(this).parent().siblings().removeClass("open"), $(this).parent().siblings().find("[data-toggle=dropdown]").parent().removeClass("open"), $(this).parent().toggleClass("open")
        })
      }

      function n() {
        var e = {
            zoom: 11,
            scrollwheel: !1,
            center: f,
            styles: [{
              featureType: "all",
              elementType: "geometry.fill",
              stylers: [{
                visibility: "on"
              }, {
                saturation: "-11"
              }]
            }, {
              featureType: "administrative",
              elementType: "geometry.fill",
              stylers: [{
                saturation: "22"
              }]
            }, {
              featureType: "administrative",
              elementType: "geometry.stroke",
              stylers: [{
                saturation: "-58"
              }, {
                color: "#cfcece"
              }]
            }, {
              featureType: "administrative",
              elementType: "labels.text",
              stylers: [{
                color: "#f8f8f8"
              }]
            }, {
              featureType: "administrative",
              elementType: "labels.text.fill",
              stylers: [{
                color: "#999999"
              }, {
                visibility: "on"
              }]
            }, {
              featureType: "administrative",
              elementType: "labels.text.stroke",
              stylers: [{
                visibility: "on"
              }]
            }, {
              featureType: "administrative.country",
              elementType: "geometry.fill",
              stylers: [{
                color: "#f9f9f9"
              }, {
                visibility: "simplified"
              }]
            }, {
              featureType: "landscape",
              elementType: "all",
              stylers: [{
                color: "#f2f2f2"
              }]
            }, {
              featureType: "landscape",
              elementType: "geometry",
              stylers: [{
                saturation: "-19"
              }, {
                lightness: "-2"
              }, {
                visibility: "on"
              }]
            }, {
              featureType: "poi",
              elementType: "all",
              stylers: [{
                visibility: "off"
              }]
            }, {
              featureType: "road",
              elementType: "all",
              stylers: [{
                saturation: -100
              }, {
                lightness: 45
              }]
            }, {
              featureType: "road.highway",
              elementType: "all",
              stylers: [{
                visibility: "simplified"
              }]
            }, {
              featureType: "road.arterial",
              elementType: "labels.icon",
              stylers: [{
                visibility: "off"
              }]
            }, {
              featureType: "transit",
              elementType: "all",
              stylers: [{
                visibility: "off"
              }]
            }, {
              featureType: "water",
              elementType: "all",
              stylers: [{
                color: "#d8e1e5"
              }, {
                visibility: "on"
              }]
            }, {
              featureType: "water",
              elementType: "geometry.fill",
              stylers: [{
                color: "#dedede"
              }]
            }, {
              featureType: "water",
              elementType: "labels.text",
              stylers: [{
                color: "#cbcbcb"
              }]
            }, {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{
                color: "#9c9c9c"
              }]
            }, {
              featureType: "water",
              elementType: "labels.text.stroke",
              stylers: [{
                visibility: "off"
              }]
            }]
          },
          t = document.getElementById("map"),
          a = new google.maps.Map(t, e),
          i = new google.maps.MarkerImage("assets/images/map-icon.png", new google.maps.Size(59, 65), new google.maps.Point(0, 0), new google.maps.Point(24, 42)),
          o = new google.maps.Marker({
            position: m,
            icon: i,
            title: "Titan",
            infoWindow: {
              content: "<p><strong>Rival</strong><br/>121 Somewhere Ave, Suite 123<br/>P: (123) 456-7890<br/>Australia</p>"
            },
            map: a
          })
      }
      wow = new WOW({
        mobile: !1
      }), wow.init(), $(window).scroll(function() {
        $(this).scrollTop() > 100 ? $(".scroll-up").fadeIn() : $(".scroll-up").fadeOut()
      }), $('a[href="#totop"]').click(function() {
        return $("html, body").animate({
          scrollTop: 0
        }, "slow"), !1
      });
      var s = $(".home-section"),
        r = $(".navbar-custom"),
        l = r.height(),
        d = $("#works-grid"),
        p = Math.max($(window).width(), window.innerWidth),
        u = !1;
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (u = !0), e(s), a(r, s, l), i(p), o(p, u), $(window).resize(function() {
        var t = Math.max($(window).width(), window.innerWidth);
        e(s), o(t, u)
      }), $(window).scroll(function() {
        t(s, this), a(r, s, l)
      }), $(".home-section, .module, .module-small, .side-image").each(function(e) {
        $(this).attr("data-background") && $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
      }), $(".hero-slider").length > 0 && $(".hero-slider").flexslider({
        animation: "fade",
        animationSpeed: 1e3,
        animationLoop: !0,
        prevText: "",
        nextText: "",
        before: function(e) {
          $(".titan-caption").fadeOut().animate({
            top: "-80px"
          }, {
            queue: !1,
            easing: "swing",
            duration: 700
          }), e.slides.eq(e.currentSlide).delay(500), e.slides.eq(e.animatingTo).delay(500)
        },
        after: function(e) {
          $(".titan-caption").fadeIn().animate({
            top: "0"
          }, {
            queue: !1,
            easing: "swing",
            duration: 700
          })
        },
        useCSS: !0
      }), $(".rotate").textrotator({
        animation: "dissolve",
        separator: "|",
        speed: 3e3
      }), $(document).on("click", ".navbar-collapse.in", function(e) {
        $(e.target).is("a") && "dropdown-toggle" != $(e.target).attr("class") && $(this).collapse("hide")
      }), $(".video-pop-up").magnificPopup({
        type: "iframe"
      }), $(".gallery-item").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
          enabled: !0,
          navigateByImgClick: !0,
          preload: [0, 1]
        },
        image: {
          titleSrc: "title",
          tError: "The image could not be loaded."
        }
      });
      var d = $("#works-grid"),
        c;
      if (c = d.hasClass("works-grid-masonry") ? "masonry" : "fitRows", d.imagesLoaded(function() {
          d.isotope({
            layoutMode: c,
            itemSelector: ".work-item"
          })
        }), $("#filters a").click(function() {
          $("#filters .current").removeClass("current"), $(this).addClass("current");
          var e = $(this).attr("data-filter");
          return d.isotope({
            filter: e,
            animationOptions: {
              duration: 750,
              easing: "linear",
              queue: !1
            }
          }), !1
        }), $(".testimonials-slider").length > 0 && $(".testimonials-slider").flexslider({
          animation: "slide",
          smoothHeight: !0
        }), $(".post-images-slider").length > 0 && $(".post-images-slider").flexslider({
          animation: "slide",
          smoothHeight: !0
        }), $(".progress-bar").each(function(e) {
          $(this).appear(function() {
            var e = $(this).attr("aria-valuenow");
            $(this).animate({
              width: e + "%"
            }), $(this).find("span").animate({
              opacity: 1
            }, 900), $(this).find("span").countTo({
              from: 0,
              to: e,
              speed: 900,
              refreshInterval: 30
            })
          })
        }), $(".count-item").each(function(e) {
          $(this).appear(function() {
            var e = $(this).find(".count-to").data("countto");
            $(this).find(".count-to").countTo({
              from: 0,
              to: e,
              speed: 1200,
              refreshInterval: 30
            })
          })
        }), $(function() {
          $(".video-player").mb_YTPlayer()
        }), $("#video-play").click(function(e) {
          return e.preventDefault(), $(this).hasClass("fa-play") ? $(".video-player").playYTP() : $(".video-player").pauseYTP(), $(this).toggleClass("fa-play fa-pause"), !1
        }), $("#video-volume").click(function(e) {
          return e.preventDefault(), $(this).hasClass("fa-volume-off") ? $(".video-player").YTPUnmute() : $(".video-player").YTPMute(), $(this).toggleClass("fa-volume-off fa-volume-up"), !1
        }), $(".owl-carousel").each(function(e) {
          $(this).data("items") > 0 ? items = $(this).data("items") : items = 4, $(this).data("pagination") > 0 && !0 === $(this).data("pagination") ? pagination = !0 : pagination = !1, $(this).data("navigation") > 0 && !0 === $(this).data("navigation") ? navigation = !0 : navigation = !1, $(this).owlCarousel({
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            nav: navigation,
            dots: pagination,
            loop: !0,
            dotsSpeed: 400,
            items: items,
            navSpeed: 300,
            autoplay: 2e3
          })
        }), $(".post-masonry").imagesLoaded(function() {
          $(".post-masonry").masonry()
        }), $(".section-scroll").bind("click", function(e) {
          var t = $(this);
          $("html, body").stop().animate({
            scrollTop: $(t.attr("href")).offset().top - 50
          }, 1e3), e.preventDefault()
        }), $("#contactForm").submit(function(e) {
          e.preventDefault();
          var $ = jQuery,
            t = $(this).serializeArray(),
            a = $(this).attr("action"),
            i = $("#contactFormResponse"),
            o = $("#cfsubmit"),
            n = o.text();
          return o.text("Sending..."), $.ajax({
            url: a,
            type: "POST",
            data: t,
            success: function(e) {
              i.html(e), o.text(n), $("#contactForm input[name=name]").val(""), $("#contactForm input[name=email]").val(""), $("#contactForm textarea[name=message]").val("")
            },
            error: function(e) {
              alert("Error occurd! Please try again")
            }
          }), !1
        }), $("#requestACall").submit(function(e) {
          e.preventDefault();
          var $ = jQuery,
            t = $(this).serializeArray(),
            a = $(this).attr("action"),
            i = $("#requestFormResponse"),
            o = $("#racSubmit"),
            n = o.text();
          return o.text("Sending..."), $.ajax({
            url: a,
            type: "POST",
            data: t,
            success: function(e) {
              i.html(e), o.text(n), $("#requestACall input[name=name]").val(""), $("#requestACall input[name=subject]").val(""), $("#requestACall textarea[name=phone]").val("")
            },
            error: function(e) {
              alert("Error occurd! Please try again")
            }
          }), !1
        }), $("#reservationForm").submit(function(e) {
          e.preventDefault();
          var $ = jQuery,
            t = $(this).serializeArray(),
            a = $(this).attr("action"),
            i = $("#reservationFormResponse"),
            o = $("#rfsubmit"),
            n = o.text();
          return o.text("Sending..."), $.ajax({
            url: a,
            type: "POST",
            data: t,
            success: function(e) {
              i.html(e), o.text(n), $("#reservationForm input[name=date]").val(""), $("#reservationForm input[name=time]").val(""), $("#reservationForm textarea[name=people]").val(""), $("#reservationForm textarea[name=email]").val("")
            },
            error: function(e) {
              alert("Error occurd! Please try again")
            }
          }), !1
        }), $("#subscription-form").submit(function(e) {
          e.preventDefault();
          var t = $("#subscription-form"),
            a = $("#subscription-form-submit"),
            i = $("#subscription-response"),
            o = $("input#semail").val();
          $.ajax({
            type: "POST",
            url: "assets/php/subscribe.php",
            dataType: "json",
            data: {
              email: o
            },
            cache: !1,
            beforeSend: function(e) {
              a.empty(), a.append('<i class="fa fa-cog fa-spin"></i> Wait...')
            },
            success: function(e) {
              1 == e.sendstatus ? (i.html(e.message), t.fadeOut(500)) : i.html(e.message)
            }
          })
        }), 0 != $("#map").length && "undefined" != typeof google) {
        google.maps.event.addDomListener(window, "load", n);
        var m = new google.maps.LatLng(40.67, -74.2),
          f = u ? m : new google.maps.LatLng(40.67, -73.94)
      }
    })
  }(jQuery);
