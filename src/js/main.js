var w = window.innerWidth,
  h = window.innerHeight,
  canvas = document.getElementById("bubble"),
  ctx = canvas.getContext("2d"),
  rate = 60,
  arc = 100,
  time,
  count,
  size = 7,
  speed = 20,
  lights = new Array(),
  colors = ["#d59254", "#ffffff", "#1f2839", "#cf7693"];
canvas.setAttribute("width", w);
canvas.setAttribute("height", h);

function init() {
  time = 0;
  count = 0;
  for (var i = 0; i < arc; i++) {
    lights[i] = {
      x: Math.ceil(Math.random() * w),
      y: Math.ceil(Math.random() * h),
      toX: Math.random() * 5 + 1,
      toY: Math.random() * 5 + 1,
      c: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * size
    };
  }
}

function bubble() {
  ctx.clearRect(0, 0, w, h);
  for (var i = 0; i < arc; i++) {
    var li = lights[i];
    ctx.beginPath();
    ctx.arc(li.x, li.y, li.size, 0, Math.PI * 2, false);
    ctx.fillStyle = li.c;
    ctx.fill();
    li.x = li.x + li.toX * (time * 0.05);
    li.y = li.y + li.toY * (time * 0.05);
    if (li.x > w) {
      li.x = 0;
    }
    if (li.y > h) {
      li.y = 0;
    }
    if (li.x < 0) {
      li.x = w;
    }
    if (li.y < 0) {
      li.y = h;
    }
  }
  if (time < speed) {
    time++;
  }
  timerID = setTimeout(bubble, 1000 / rate);
}
init();
bubble();
//navigation (this is my code)
var animation = "easeOutCubic";
delay = 60;
$(document)
  .on("click", ".fa-bars", function () {
    var i = 0;
    $("nav").before($("#bubble"));
    $("#bubble").fadeIn();
    $("#mainnav")
      .find("li")
      .each(function () {
        var that = $(this);
        i++;
        (function (i, that) {
          setTimeout(function () {
            that
              .animate({
                left: "20px"
              }, {
                duration: 350,
                easing: animation
              })
              .fadeIn({
                queue: false
              });
          }, delay * i);
        })(i, that);
      });
    $(".fa-bars").fadeOut(100, function () {
      $(this)
        .removeClass("fa-bars")
        .addClass("fa-times")
        .fadeIn();
    });
  })
  .on("click", "#bubble, .fa-times", function () {
    $("#bubble").fadeOut();
    $("#mainnav")
      .find("li")
      .animate({
        left: "-550px"
      }, {
        duration: 250
      })
      .fadeOut({
        queue: false
      });
    $(".hamb").fadeOut(100, function () {
      $(this)
        .find($("i"))
        .removeClass("fa-times")
        .addClass("fa-bars")
        .end()
        .fadeIn();
    });
  });
$(document).ready(() => {
  /*// Background random */
  let arrBG = [2, 3, 7, 8, 13, 14, 16, 17, 18, 20, 21, 22];
  let arrBG1000 = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
  ];
  if (window.screen.availWidth > 1000) {
    let rand = arrBG1000[Math.floor(Math.random() * arrBG1000.length)];
    $(".hero").css("background-image", "url('src/img/1000/" + rand + ".jpg')");
  } else {
    let rand = arrBG[Math.floor(Math.random() * arrBG.length)];
    $(".hero").css("background-image", "url('src/img/" + rand + ".jpg')");
  }
