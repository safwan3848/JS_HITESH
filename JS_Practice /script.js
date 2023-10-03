let rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (details) {
  let rectanglelocaton = rect.getBoundingClientRect();
  let insiderectval = details.clientX - rectanglelocaton.left;

  if (insiderectval < rectanglelocaton.width / 2) {
    var redColor = gsap.utils.mapRange(
      0,
      rectanglelocaton.width / 2,
      255,
      0,
      insiderectval
    );
    gsap.to(rect, {
      backgroundColor: `rgb(${redColor}, 0 ,0)`,
      ease: Power4,
    });
  } else {
    var blueColor = gsap.utils.mapRange(
      rectanglelocaton.width / 2,
      rectanglelocaton.width,
      0,
      255,
      insiderectval
    );
    gsap.to(rect, {
      backgroundColor: `rgb( 0 ,0, ${blueColor})`,
      ease: Power4,
    });
  }
});

rect.addEventListener("mouseleave", function () {
  gsap.to(rect, {
    backgroundColor: "white",
  });
});
