/**
 * Eduport- LMS, Education and Course Theme
 *
 * @author Webestica (https://www.webestica.com/)
 **/

/* ===================
Table Of Content
======================
01 PRELOADER
02 MEGA MENU
03 STICKY HEADER
04 TINY SLIDER
05 STICKY BAR
06 TOOLTIP
07 POPOVER
08 BACK TO TOP
09 STICKY POST
10 GLIGHTBOX
11 ISOTOPE
12 DARK MODE
13 CHOICES
14 AOS ANIMATION
15 DASHBOARD CHART
16 Eduport CHART
17 Eduport CHART 2
18 QUILL EDITOR
19 STEPPER
20 VIDEO PLAYER
21 NAVBAR TOGGLER
====================== */

"use strict";
!(function () {
  (window.Element.prototype.removeClass = function () {
    let className =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      selectors = this;
    if (!(selectors instanceof HTMLElement) && selectors !== null) {
      selectors = document.querySelector(selectors);
    }
    if (this.isVariableDefined(selectors) && className) {
      selectors.classList.remove(className);
    }
    return this;
  }),
    (window.Element.prototype.addClass = function () {
      let className =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        selectors = this;
      if (!(selectors instanceof HTMLElement) && selectors !== null) {
        selectors = document.querySelector(selectors);
      }
      if (this.isVariableDefined(selectors) && className) {
        selectors.classList.add(className);
      }
      return this;
    }),
    (window.Element.prototype.toggleClass = function () {
      let className =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        selectors = this;
      if (!(selectors instanceof HTMLElement) && selectors !== null) {
        selectors = document.querySelector(selectors);
      }
      if (this.isVariableDefined(selectors) && className) {
        selectors.classList.toggle(className);
      }
      return this;
    }),
    (window.Element.prototype.isVariableDefined = function () {
      return !!this && typeof this != "undefined" && this != null;
    });
})();

var e = {
  init: function () {
    e.preLoader(),
      e.megaMenu(),
      e.stickyHeader(),
      e.tinySlider(),
      e.stickyBar(),
      e.toolTipFunc(),
      e.popOverFunc(),
      e.backTotop(),
      e.stickyPost(),
      e.lightBox(),
      e.enableIsotope(),
      e.darkMode(),
      e.choicesSelect(),
      e.aosFunc(),
      e.dashboardChart(),
      e.earningChart(),
      e.earningChart2(),
      e.quill(),
      e.stepper(),
      e.videoPlyr(),
      e.activeClass(),
      e.overlayScrollbars(),
      e.navbarToggle();
  },
  isVariableDefined: function (el) {
    return typeof !!el && el != "undefined" && el != null;
  },
  getParents: function (el, selector, filter) {
    const result = [];
    const matchesSelector =
      el.matches ||
      el.webkitMatchesSelector ||
      el.mozMatchesSelector ||
      el.msMatchesSelector;

    // match start from parent
    el = el.parentElement;
    while (el && !matchesSelector.call(el, selector)) {
      if (!filter) {
        if (selector) {
          if (matchesSelector.call(el, selector)) {
            return result.push(el);
          }
        } else {
          result.push(el);
        }
      } else {
        if (matchesSelector.call(el, filter)) {
          result.push(el);
        }
      }
      el = el.parentElement;
      if (e.isVariableDefined(el)) {
        if (matchesSelector.call(el, selector)) {
          return el;
        }
      }
    }
    return result;
  },
  getNextSiblings: function (el, selector, filter) {
    let sibs = [];
    let nextElem = el.parentNode.firstChild;
    const matchesSelector =
      el.matches ||
      el.webkitMatchesSelector ||
      el.mozMatchesSelector ||
      el.msMatchesSelector;
    do {
      if (nextElem.nodeType === 3) continue; // ignore text nodes
      if (nextElem === el) continue; // ignore elem of target
      if (nextElem === el.nextElementSibling) {
        if (!filter || filter(el)) {
          if (selector) {
            if (matchesSelector.call(nextElem, selector)) {
              return nextElem;
            }
          } else {
            sibs.push(nextElem);
          }
          el = nextElem;
        }
      }
    } while ((nextElem = nextElem.nextSibling));
    return sibs;
  },
  on: function (selectors, type, listener) {
    document.addEventListener("DOMContentLoaded", () => {
      if (!(selectors instanceof HTMLElement) && selectors !== null) {
        selectors = document.querySelector(selectors);
      }
      selectors.addEventListener(type, listener);
    });
  },
  onAll: function (selectors, type, listener) {
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll(selectors).forEach((element) => {
        if (type.indexOf(",") > -1) {
          let types = type.split(",");
          types.forEach((type) => {
            element.addEventListener(type, listener);
          });
        } else {
          element.addEventListener(type, listener);
        }
      });
    });
  },
  removeClass: function (selectors, className) {
    if (!(selectors instanceof HTMLElement) && selectors !== null) {
      selectors = document.querySelector(selectors);
    }
    if (e.isVariableDefined(selectors)) {
      selectors.removeClass(className);
    }
  },
  removeAllClass: function (selectors, className) {
    if (e.isVariableDefined(selectors) && selectors instanceof HTMLElement) {
      document.querySelectorAll(selectors).forEach((element) => {
        element.removeClass(className);
      });
    }
  },
  toggleClass: function (selectors, className) {
    if (!(selectors instanceof HTMLElement) && selectors !== null) {
      selectors = document.querySelector(selectors);
    }
    if (e.isVariableDefined(selectors)) {
      selectors.toggleClass(className);
    }
  },
  toggleAllClass: function (selectors, className) {
    if (e.isVariableDefined(selectors) && selectors instanceof HTMLElement) {
      document.querySelectorAll(selectors).forEach((element) => {
        element.toggleClass(className);
      });
    }
  },
  addClass: function (selectors, className) {
    if (!(selectors instanceof HTMLElement) && selectors !== null) {
      selectors = document.querySelector(selectors);
    }
    if (e.isVariableDefined(selectors)) {
      selectors.addClass(className);
    }
  },
  select: function (selectors) {
    return document.querySelector(selectors);
  },
  selectAll: function (selectors) {
    return document.querySelectorAll(selectors);
  },

  // START: 01 Preloader
  preLoader: function () {
    window.onload = function () {
      var preloader = e.select(".preloader");
      if (e.isVariableDefined(preloader)) {
        preloader.className += " animate__animated animate__fadeOut";
        setTimeout(function () {
          preloader.style.display = "none";
        }, 2000);
      }
    };
  },
  // END: Preloader

  // START: 02 Mega Menu
  megaMenu: function () {
    e.onAll(
      ".dropdown-menu a.dropdown-item.dropdown-toggle",
      "click",
      function (event) {
        var element = this;
        event.preventDefault();
        event.stopImmediatePropagation();
        if (
          e.isVariableDefined(element.nextElementSibling) &&
          !element.nextElementSibling.classList.contains("show")
        ) {
          const parents = e.getParents(element, ".dropdown-menu");
          e.removeClass(parents.querySelector(".show"), "show");
          if (e.isVariableDefined(parents.querySelector(".dropdown-opened"))) {
            e.removeClass(
              parents.querySelector(".dropdown-opened"),
              "dropdown-opened"
            );
          }
        }
        var $subMenu = e.getNextSiblings(element, ".dropdown-menu");
        e.toggleClass($subMenu, "show");
        $subMenu.previousElementSibling.toggleClass("dropdown-opened");
        var parents = e.getParents(element, "li.nav-item.dropdown.show");
        if (e.isVariableDefined(parents) && parents.length > 0) {
          e.on(parents, "hidden.bs.dropdown", function (event) {
            e.removeAllClass(".dropdown-submenu .show");
          });
        }
      }
    );
  },
  // END: Mega Menu

  // START: 03 Sticky Header
  stickyHeader: function () {
    var stickyNav = e.select(".navbar-sticky");
    var navbarCollapse = e.select("#navbarCollapse-2");
    var navbarColor = e.select("#navbarColor");
    var logo = e.select("#logo");
    if (e.isVariableDefined(stickyNav)) {
      var stickyHeight = stickyNav.offsetHeight;
      stickyNav.insertAdjacentHTML("afterend", '<div id="sticky-space"></div>');
      var stickySpace = e.select("#sticky-space");
      if (e.isVariableDefined(stickySpace)) {
        document.addEventListener("scroll", function (event) {
          var scTop = window.pageYOffset || document.documentElement.scrollTop;
          if (scTop >= 400) {
            stickySpace.addClass("active");
            e.select("#sticky-space.active").style.height = stickyHeight + "px";
            stickyNav.addClass("navbar-sticky-on");
            navbarCollapse.removeClass("navbar-dark");
            // navbarColor.removeClass("navbar-dark-gradient");
            logo.src = "assets/images/logo.svg";
          } else {
            stickySpace.removeClass("active");
            stickySpace.style.height = "0px";
            stickyNav.removeClass("navbar-sticky-on");
            // navbarColor.addClass("navbar-dark-gradient");
            navbarCollapse.addClass("navbar-dark");
            logo.src = "assets/images/logo-light.svg";
          }
        });
      }
    }
  },
  // END: Sticky Header

  // START: 21 Navbar Toggle
  navbarToggle: function () {
    var logo = e.select("#toggler");
    var navbarCollapse = e.select("#navbarCollapse-2");
    if (e.isVariableDefined(logo)) {
      document.addEventListener("click", function (event) {
        if (navbarCollapse.classList.contains("navbar-dark")) {
          navbarCollapse.removeClass("navbar-dark");
        } else {
          navbarCollapse.addClass("navbar-dark");
        }
      });
    }
  },
  // END: Navbar Toggle

  // START: 04 Tiny Slider
  tinySlider: function () {
    var $carousel = e.select(".tiny-slider-inner");
    if (e.isVariableDefined($carousel)) {
      var tnsCarousel = e.selectAll(".tiny-slider-inner");
      tnsCarousel.forEach((slider) => {
        var slider1 = slider;
        var sliderMode = slider1.getAttribute("data-mode")
          ? slider1.getAttribute("data-mode")
          : "carousel";
        var sliderAxis = slider1.getAttribute("data-axis")
          ? slider1.getAttribute("data-axis")
          : "horizontal";
        var sliderSpace = slider1.getAttribute("data-gutter")
          ? slider1.getAttribute("data-gutter")
          : 30;
        var sliderEdge = slider1.getAttribute("data-edge")
          ? slider1.getAttribute("data-edge")
          : 0;

        var sliderItems = slider1.getAttribute("data-items")
          ? slider1.getAttribute("data-items")
          : 4; //option: number (items in all device)
        var sliderItemsXl = slider1.getAttribute("data-items-xl")
          ? slider1.getAttribute("data-items-xl")
          : Number(sliderItems); //option: number (items in 1200 to end )
        var sliderItemsLg = slider1.getAttribute("data-items-lg")
          ? slider1.getAttribute("data-items-lg")
          : Number(sliderItemsXl); //option: number (items in 992 to 1199 )
        var sliderItemsMd = slider1.getAttribute("data-items-md")
          ? slider1.getAttribute("data-items-md")
          : Number(sliderItemsLg); //option: number (items in 768 to 991 )
        var sliderItemsSm = slider1.getAttribute("data-items-sm")
          ? slider1.getAttribute("data-items-sm")
          : Number(sliderItemsMd); //option: number (items in 576 to 767 )
        var sliderItemsXs = slider1.getAttribute("data-items-xs")
          ? slider1.getAttribute("data-items-xs")
          : Number(sliderItemsSm); //option: number (items in start to 575 )

        var sliderSpeed = slider1.getAttribute("data-speed")
          ? slider1.getAttribute("data-speed")
          : 500;
        var sliderautoWidth = slider1.getAttribute("data-autowidth") === "true"; //option: true or false
        var sliderArrow = slider1.getAttribute("data-arrow") !== "false"; //option: true or false
        var sliderDots = slider1.getAttribute("data-dots") !== "false"; //option: true or false

        var sliderAutoPlay = slider1.getAttribute("data-autoplay") !== "false"; //option: true or false
        var sliderAutoPlayTime = slider1.getAttribute("data-autoplaytime")
          ? slider1.getAttribute("data-autoplaytime")
          : 4000;
        var sliderHoverPause =
          slider1.getAttribute("data-hoverpause") === "true"; //option: true or false
        if (e.isVariableDefined(e.select(".custom-thumb"))) {
          var sliderNavContainer = e.select(".custom-thumb");
        }
        var sliderLoop = slider1.getAttribute("data-loop") !== "false"; //option: true or false
        var sliderRewind = slider1.getAttribute("data-rewind") === "true"; //option: true or false
        var sliderAutoHeight =
          slider1.getAttribute("data-autoheight") === "true"; //option: true or false
        var sliderfixedWidth =
          slider1.getAttribute("data-fixedwidth") === "true"; //option: true or false
        var sliderTouch = slider1.getAttribute("data-touch") !== "false"; //option: true or false
        var sliderDrag = slider1.getAttribute("data-drag") !== "false"; //option: true or false
        // Check if document DIR is RTL
        var ifRtl = document
          .getElementsByTagName("html")[0]
          .getAttribute("dir");
        var sliderDirection;
        if (ifRtl === "rtl") {
          sliderDirection = "rtl";
        }

        var tnsSlider = tns({
          container: slider,
          mode: sliderMode,
          axis: sliderAxis,
          gutter: sliderSpace,
          edgePadding: sliderEdge,
          speed: sliderSpeed,
          autoWidth: sliderautoWidth,
          controls: sliderArrow,
          nav: sliderDots,
          autoplay: sliderAutoPlay,
          autoplayTimeout: sliderAutoPlayTime,
          autoplayHoverPause: sliderHoverPause,
          autoplayButton: false,
          autoplayButtonOutput: false,
          controlsPosition: top,
          navContainer: sliderNavContainer,
          navPosition: top,
          autoplayPosition: top,
          controlsText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>',
          ],
          loop: sliderLoop,
          rewind: sliderRewind,
          autoHeight: sliderAutoHeight,
          fixedWidth: sliderfixedWidth,
          touch: sliderTouch,
          mouseDrag: sliderDrag,
          arrowKeys: true,
          items: sliderItems,
          textDirection: sliderDirection,
          responsive: {
            0: {
              items: Number(sliderItemsXs),
            },
            576: {
              items: Number(sliderItemsSm),
            },
            768: {
              items: Number(sliderItemsMd),
            },
            992: {
              items: Number(sliderItemsLg),
            },
            1200: {
              items: Number(sliderItemsXl),
            },
          },
        });
      });
    }
  },
  // END: Tiny Slider

  // START: 05 Sticky Bar
  stickyBar: function () {
    var sb = e.select("[data-sticky]");
    if (e.isVariableDefined(sb)) {
      var sticky = new Sticky("[data-sticky]");
    }
  },
  // END: Sticky Bar

  // START: 06 Tooltip
  // Enable tooltips everywhere via data-toggle attribute
  toolTipFunc: function () {
    var tooltipTriggerList = [].slice.call(
      e.selectAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  },
  // END: Tooltip

  // START: 07 Popover
  // Enable popover everywhere via data-toggle attribute
  popOverFunc: function () {
    var popoverTriggerList = [].slice.call(
      e.selectAll('[data-bs-toggle="popover"]')
    );
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });
  },
  // END: Popover

  // START: 08 Back to Top
  backTotop: function () {
    var scrollpos = window.scrollY;
    var backBtn = e.select(".back-top");
    if (e.isVariableDefined(backBtn)) {
      var add_class_on_scroll = () => backBtn.addClass("back-top-show");
      var remove_class_on_scroll = () => backBtn.removeClass("back-top-show");

      window.addEventListener("scroll", function () {
        scrollpos = window.scrollY;
        if (scrollpos >= 800) {
          add_class_on_scroll();
        } else {
          remove_class_on_scroll();
        }
      });

      backBtn.addEventListener("click", () =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      );
    }
  },
  // END: Back to Top

  // START: 09 Sticky post
  stickyPost: function () {
    var scrollpos = window.scrollY;
    var sp = e.select(".sticky-post");
    if (e.isVariableDefined(sp)) {
      var add_class_on_scroll = () => sp.addClass("sticky-post-stick");
      var remove_class_on_scroll = () => sp.removeClass("sticky-post-stick");

      window.addEventListener("scroll", function () {
        scrollpos = window.scrollY;
        if (scrollpos >= 1400) {
          add_class_on_scroll();
        } else {
          remove_class_on_scroll();
        }
      });
    }
  },
  // END: Sticky Post

  // START: 10 GLightbox
  lightBox: function () {
    var light = e.select("[data-glightbox]");
    if (e.isVariableDefined(light)) {
      var lb = GLightbox({
        selector: "*[data-glightbox]",
        openEffect: "fade",
        closeEffect: "fade",
      });
    }
  },
  // END: GLightbox

  // START: 11 Isotope
  enableIsotope: function () {
    var isGridItem = e.select(".grid-item");
    if (e.isVariableDefined(isGridItem)) {
      // Code only for normal Grid
      var onlyGrid = e.select("[data-isotope]");
      if (e.isVariableDefined(onlyGrid)) {
        var allGrid = e.selectAll("[data-isotope]");
        allGrid.forEach((gridItem) => {
          var gridItemData = gridItem.getAttribute("data-isotope");
          var gridItemDataObj = JSON.parse(gridItemData);
          var iso = new Isotope(gridItem, {
            itemSelector: ".grid-item",
            layoutMode: gridItemDataObj.layoutMode,
          });

          imagesLoaded(gridItem).on("progress", function () {
            // layout Isotope after each image loads
            iso.layout();
          });
        });
      }

      // Code only for normal Grid
      var onlyGridFilter = e.select(".grid-menu");
      if (e.isVariableDefined(onlyGridFilter)) {
        var filterMenu = e.selectAll(".grid-menu");
        filterMenu.forEach((menu) => {
          var filterContainer = menu.getAttribute("data-target");
          var a = menu.dataset.target;
          var b = e.select(a);
          var filterContainerItemData = b.getAttribute("data-isotope");
          var filterContainerItemDataObj = JSON.parse(filterContainerItemData);
          var filter = new Isotope(filterContainer, {
            itemSelector: ".grid-item",
            transitionDuration: "0.7s",
            layoutMode: filterContainerItemDataObj.layoutMode,
          });

          var menuItems = menu.querySelectorAll("li a");
          menuItems.forEach((menuItem) => {
            menuItem.addEventListener("click", function (event) {
              var filterValue = menuItem.getAttribute("data-filter");
              filter.arrange({ filter: filterValue });
              menuItems.forEach((control) => control.removeClass("active"));
              menuItem.addClass("active");
            });
          });

          imagesLoaded(filterContainer).on("progress", function () {
            filter.layout();
          });
        });
      }
    }
  },
  // END: Isotope

  // START: 12 Dark mode
  darkMode: function () {
    var dark = e.select("#darkModeSwitch");
    if (e.isVariableDefined(dark)) {
      var dms = document.querySelector("#darkModeSwitch");
      var style = document.getElementById("style-switch");
      var mode = document.getElementsByTagName("BODY")[0];
      var dir = document.getElementsByTagName("html")[0].getAttribute("dir");

      dms.addEventListener("click", function () {
        if (dir == "rtl") {
          if (style.getAttribute("href") == "assets/css/style-rtl.css") {
            style.setAttribute("href", "assets/css/style-dark-rtl.css");
          } else {
            style.setAttribute("href", "assets/css/style-rtl.css");
          }
        } else {
          if (style.getAttribute("href") == "assets/css/style.css") {
            style.setAttribute("href", "assets/css/style-dark.css");
          } else {
            style.setAttribute("href", "assets/css/style.css");
          }
        }
        mode.classList.toggle("dark-mode");
      });
    }
  },
  // END: Dark mode

  // START: 13 Choices
  choicesSelect: function () {
    var choice = e.select(".js-choice");

    if (e.isVariableDefined(choice)) {
      var element = document.querySelectorAll(".js-choice");

      element.forEach(function (item) {
        var removeItemBtn =
          item.getAttribute("data-remove-item-button") == "true" ? true : false;
        var placeHolder =
          item.getAttribute("data-placeholder") == "false" ? false : true;
        var placeHolderVal = item.getAttribute("data-placeholder-val")
          ? item.getAttribute("data-placeholder-val")
          : "Type and hit enter";
        var maxItemCount = item.getAttribute("data-max-item-count")
          ? item.getAttribute("data-max-item-count")
          : 3;
        var searchEnabled =
          item.getAttribute("data-search-enabled") == "false" ? false : true;

        var choices = new Choices(item, {
          removeItemButton: removeItemBtn,
          placeholder: placeHolder,
          placeholderValue: placeHolderVal,
          maxItemCount: maxItemCount,
          searchEnabled: searchEnabled,
        });
      });
    }
  },
  // END: Choices

  // START: 14 AOS Animation
  aosFunc: function () {
    var aos = e.select(".aos");
    if (e.isVariableDefined(aos)) {
      AOS.init({
        duration: 500,
        easing: "ease-out-quart",
        once: true,
      });
    }
  },
  // END: AOS Animation

  // START: 15 Dashboard Chart
  dashboardChart: function () {
    var ac = e.select("#ChartPayout");
    if (e.isVariableDefined(ac)) {
      // Get CSS var value
      var ThemeColor = (function () {
        return {
          getCssVariableValue: function (e) {
            var t = getComputedStyle(document.documentElement).getPropertyValue(
              e
            );
            return t && t.length > 0 && (t = t.trim()), t;
          },
        };
      })();

      var options = {
        series: [
          {
            name: "Payout",
            data: [
              2909, 1259, 950, 1563, 1825, 2526, 2010, 3260, 3005, 3860, 4039,
            ],
          },
        ],
        chart: {
          height: 300,
          type: "area",
          // sparkline: {
          //   enabled: !0
          // }
          toolbar: {
            show: false,
          },
        },

        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "smooth",
        },
        colors: [ThemeColor.getCssVariableValue("--bs-primary")],
        xaxis: {
          type: "Payout",
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct ",
            "Nov",
            "Dec",
          ],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: [
          {
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
          },
        ],
        tooltip: {
          y: {
            title: {
              formatter: function (e) {
                return "" + "$";
              },
            },
          },
          marker: {
            show: !1,
          },
        },
      };
      var chart = new ApexCharts(
        document.querySelector("#ChartPayout"),
        options
      );
      chart.render();
    }
  },
  // END: Dashboard Chart

  // START: 16 Earning Chart
  earningChart: function () {
    var cpe = e.select("#ChartPayoutEarning");
    if (e.isVariableDefined(cpe)) {
      // Get CSS var value
      var ThemeColor = (function () {
        return {
          getCssVariableValue: function (e) {
            var t = getComputedStyle(document.documentElement).getPropertyValue(
              e
            );
            return t && t.length > 0 && (t = t.trim()), t;
          },
        };
      })();

      var options = {
        series: [
          {
            name: "Payout",
            data: [
              500, 700, 900, 1500, 1800, 2500, 2000, 3200, 3000, 4800, 4000,
            ],
          },
        ],
        chart: {
          height: 300,
          type: "area",
          sparkline: {
            enabled: !0,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        colors: [ThemeColor.getCssVariableValue("--bs-primary")],
        xaxis: {
          type: "Payout",
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct ",
            "Nov",
            "Dec",
          ],
        },
        grid: {},
        tooltip: {
          y: {
            title: {
              formatter: function (e) {
                return "" + "$";
              },
            },
          },
          marker: {
            show: !1,
          },
        },
      };
      var chart = new ApexCharts(
        document.querySelector("#ChartPayoutEarning"),
        options
      );
      chart.render();
    }
  },
  // END: Earning Chart

  // START: 17 Earning Chart 2
  earningChart2: function () {
    var cpv = e.select("#ChartPageViews");
    if (e.isVariableDefined(cpv)) {
      // Get CSS var value
      var ThemeColor = (function () {
        return {
          getCssVariableValue: function (e) {
            var t = getComputedStyle(document.documentElement).getPropertyValue(
              e
            );
            return t && t.length > 0 && (t = t.trim()), t;
          },
        };
      })();

      // CHART: Page Views
      var options = {
        series: [50, 20, 20, 10, 10],
        labels: ["Course-1", "Course-2", "Course-3", "Course-4", "Course-5"],
        chart: {
          height: 300,
          width: 300,
          offsetX: 50,
          type: "donut",
          sparkline: {
            enabled: !0,
          },
        },
        colors: [
          ThemeColor.getCssVariableValue("--bs-success"),
          ThemeColor.getCssVariableValue("--bs-warning"),
          ThemeColor.getCssVariableValue("--bs-danger"),
          ThemeColor.getCssVariableValue("--bs-primary"),
          ThemeColor.getCssVariableValue("--bs-secondary"),
        ],
        tooltip: {
          theme: "dark",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 100,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      };
      var chart = new ApexCharts(
        document.querySelector("#ChartPageViews"),
        options
      );
      chart.render();
    }
  },
  // END: Earning Chart 2

  // START: 18 Quill Editor
  quill: function () {
    var ql = e.select("#quilleditor");
    if (e.isVariableDefined(ql)) {
      var editor = new Quill("#quilleditor", {
        modules: { toolbar: "#quilltoolbar" },
        theme: "snow",
      });
    }
  },
  // END: Quill Editor

  // START: 19 Stepper
  stepper: function () {
    var stp = e.select("#stepper");
    if (e.isVariableDefined(stp)) {
      var nxtBtn = document.querySelectorAll(".next-btn");
      var prvBtn = document.querySelectorAll(".prev-btn");

      var stepper = new Stepper(document.querySelector("#stepper"), {
        linear: false,
        animation: true,
      });

      nxtBtn.forEach(function (button) {
        button.addEventListener("click", () => {
          stepper.next();
        });
      });

      prvBtn.forEach(function (button) {
        button.addEventListener("click", () => {
          stepper.previous();
        });
      });
    }
  },
  // END: Stepper

  // START: 20 Video player
  videoPlyr: function () {
    var vdp = e.select(".video-player");
    if (e.isVariableDefined(vdp)) {
      // youtube
      const playerYoutube = new Plyr("#player-youtube", {});
      window.player = playerYoutube;

      // Vimeo
      const playerVimeo = new Plyr("#player-vimeo", {});
      window.player = playerVimeo;

      // HTML video
      const playerHtmlvideo = new Plyr("video", {
        captions: { active: true },
      });
      window.player = playerHtmlvideo;

      // HTML audio
      const playerHtmlaudio = new Plyr("audio", {
        captions: { active: true },
      });
      window.player = playerHtmlaudio;
    }
  },
  // END: Video player
  // START: 21 Navbar Toggle
  navbarToggle: function () {
    var logo = e.select("#navbarToggler");
    var navbarCollapse = e.select("#navbarCollapse-2");
    if (e.isVariableDefined(logo)) {
      logo.addEventListener("click", function (event) {
        if (navbarCollapse.classList.contains("navbar-dark")) {
          navbarCollapse.removeClass("navbar-dark");
        } else {
          navbarCollapse.addClass("navbar-dark");
        }
      });
    }
  },
  // END: Navbar Toggle
  // START: 17 Active class
  activeClass: function () {
    var currentPath = window.location.pathname;
    var path = currentPath.split("/").pop();

    var d = e.select(".navbar .left-sidebar");
    if (e.isVariableDefined(d)) {
      var hTarget = e.select(
        '.left-sidebar .list-group-borderless .list-group-item[href="' +
          path +
          '"]'
      );

      if (e.isVariableDefined(hTarget)) {
        var hh = hTarget.getAttribute("href");

        if (path === hh) {
          hTarget.classList.add("active");
        }
      }
    }
  },
  // END: Active class

  // START: 27 Overlay scrollbars
  overlayScrollbars: function () {
    var os = e.select(".custom-scrollbar");
    if (os) {
      document.addEventListener("DOMContentLoaded", function () {
        var cs = document.querySelectorAll(".custom-scrollbar");
        cs.forEach((c) => {
          OverlayScrollbars(c, {
            scrollbars: {
              autoHide: "leave",
              autoHideDelay: 200,
            },
            overflowBehavior: {
              x: "visible-hidden",
              y: "scroll",
            },
          });
        });
      });
    }
  },
  // END: Overlay scrollbars
};

e.init();

/* Clipboard JS - Copy code button */
var cl = document.querySelector(".copy-link");
if (typeof !!cl && cl != "undefined" && cl != null) {
  var cle = document.querySelectorAll(".copy-link");
  cle.forEach((el) => {
    el.addEventListener("click", function () {
      var theButton = this;
      var copyId = this.getAttribute("id");
      var clipboard = new ClipboardJS("#" + copyId);

      clipboard.on("success", function (e) {
        e.clearSelection();
        theButton.innerHTML = "Copied";
        setTimeout(function () {
          theButton.innerHTML = "Copy";
        }, 10000);
      });
    });
  });
}
