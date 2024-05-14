import { gsap } from "gsap";
import { useEffect } from "react";

// Variables for the scrolling function
// let currentIndex = -1,
//   sections = document.querySelectorAll("section"),
//   images = document.querySelectorAll("#menuImage"),
//   headings = gsap.utils.toArray(".menu-image-txt"),
//   wrap = gsap.utils.wrap(0, sections.length),
//   animating = false;

/**
 * This function will be called when scrolling in the image section of the menu.
 * By default all sections are invisible, and once it is call it sets a new one to visible.
 * Every time the user scrolls it will render the next/prev section with an animation for top/bottom
 * (depending on the direction of the scroll). Once the animation is finished the old section
 * that was already displayed will be set to the default value of invisible (`visibility: hidden` with css).
 * The `animating` variable does not allow the user to initiate another scroll event,
 * if the animation has not finished. All necessary animations are being added through a timeline
 * dynamically, and all values change dynamically as well.
 * @param {int} index - The current index to display the item
 * @param {int} direction - The direction that the transition will take (1 is down, -1 is up)
 * @param {NodeList} sections - The sections to get animate from. Use document.querySelectorAll()
 * @param {NodeList} items - The items to animate between. Use document.querySelectorAll()
 * @param {Array} headings - An array of the headings to animate between them. Use gsap.utils.toArray()
 * @param {wrap} wrap - the wrap of the sections
 * @param {boolean} animating - A boolean to represent if the animation is currently playing or not.
 */
export function scrolled(
  index,
  direction,
  sections,
  items,
  headings,
  wrap,
  animating,
  currentIndex
) {
  animating = true;
  index = gsap.utils.wrap(index);

  // Enabling the dFactor will result in the transition
  // coming only from above. On every yPercent property
  // the direction parameter must be replaced with dFactor.
  // let dFactor = direction === -1 ? -1 : 1;

  let tl = gsap.timeline({
    defaults: { duration: 1.25, ease: "power1.inOut" },
    onComplete: () => (animating = false),
  });
  gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });

  // Animate the previous section to invisible
  // On the first run currentIndex is -1 so we do not
  // animate any previous section
  if (currentIndex >= 0) {
    gsap.set(sections[currentIndex], { zIndex: 0 });
    tl.to(items[currentIndex], { yPercent: -15 * direction }).set(
      sections[currentIndex],
      { autoAlpha: 0 }
    );
    tl.to(headings[currentIndex], { yPercent: 0 });
  }

  // Animate the current section to a visible position
  gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
  tl.fromTo(
    [sections[index], headings[index]],
    {
      yPercent: (i) => (i ? -100 * direction : 100 * direction),
    },
    {
      yPercent: 0,
    },
    0
  ).fromTo(items[index], { yPercent: 15 * direction }, { yPercent: 0 }, 0);

  // Set the current index to the section index that was animated
  // during the run of this function
  currentIndex = index;
}
