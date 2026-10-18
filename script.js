// Reveals sections as they scroll into view. Without motion, everything is already visible.
const items = document.querySelectorAll("[data-reveal], .section");
const animated = document.documentElement.classList.contains("anim");
if (!animated || !("IntersectionObserver" in window)) {
  items.forEach((el) => el.classList.add("in"));
} else {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }),
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );
  items.forEach((el) => io.observe(el));
}
