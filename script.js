function page1Animation() {
  var tl = gsap.timeline();
  tl.from(".nav-left h1", {
    y: -50,
    duration: 0.8,
    delay: 0.7,
    opacity: 0,
  });
  tl.from(".nav-right h3,.nav-right button", {
    y: -50,
    duration: 0.8,
    opacity: 0,
    stagger: 0.2,
  });
  tl.from(".centre-left h1, .centre-left p , .centre-left button ", {
    x: -70,
    duration: 0.8,
    opacity: 0,
    stagger: 0.3,
  });
  tl.from(
    ".centre-right img",
    {
      x: 70,
      duration: 0.8,
      opacity: 0,
    },
    "-=0.5"
  );
  tl.from(
    ".bottom img",
    {
      y: 70,
      duration: 0.7,
      opacity: 0,
      stagger: 0.15,
    },
    "-=0.5"
  );
}
page1Animation();

function page2Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      start: "top 50%",
      end: "top 0%",
      scrub: 2,
    },
  });
  tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.3,
  });
  tl2.from(
    ".line1.white",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "line1"
  );
  tl2.from(
    ".line1.black",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "line1"
  );

  tl2.from(
    ".line2.black",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "line2"
  );
  tl2.from(
    ".line2.white",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "line2"
  );
}
page2Animation();

function page3Animation() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page3",
      scroller: "body",
      start: "top 50%",
      end: "top 0%",
      scrub: 1,
    },
  });
  tl3.from(".proposal-left h2, .proposal-left p,.proposal-left button", {
    x: -300,
    duration: 0.8,
    stagger: 0.4,
    opacity: 0,
  });
  tl3.from(
    ".proposal-right i",
    {
      scale: 0,
      duration: 0.3,
      stagger: 0.3,
    },
    "-=1"
  );

  var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".case-study",
      scroller: "body",
      start: "top 80%",
      end: "top 45%",
      scrub: 1,
    },
  });
  tl4.from(".case-study", {
    x: -150,
    duration: 0.8,
    opacity: 0,
  });
  var tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: "footer",
      scroller: "body",
      start: "top 75%",
      end: "top 0",
      scrub: 1,
    },
  });
  tl5.from(".one", {
    opacity: 0,
    duration: 0.8,
  });
}
page3Animation();
var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
main.addEventListener("mousemove",function(dets){
  gsap.to(cursor,{
      x : dets.x,
      y : dets.y,
  })
})