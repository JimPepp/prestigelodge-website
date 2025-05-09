"use client";

import { Fh1, Fh2h3, Fh6, Fparagraph } from "../modules/fonts";
import { gsap, useGSAP, ScrollTrigger } from "../modules/gsap";
import Image from "next/image";

// By default the menu is closed
var menuIsOpen = false;

// This function simply gets the logo and toggles the recenter class.
// For more info check globals.css and below
function recenterLogo() {
  // get the logo container
  const logo = document.querySelector(".logo");
  // toggle the content justification of the logo
  logo.classList.toggle("recenter");
}

export default function Header() {
  // set .menu-image height property using JS
  // height = window.height - header.height

  useGSAP(() => {
    // Animation that controls the header border color
    let headerBorder = gsap.to(".header", {
      css: {
        borderColor: "#f5f5f0",
      },
      duration: 1.7,
      ease: "ease",
      paused: true,
    });

    // Transforming the "MENU" text in the header to "CLOSED"
    let headerMenuText = gsap.to("#menuText", {
      duration: 0.3,
      paused: true,
      text: "close",
      ease: "none",
      delay: 1,
      reversed: true,
    });

    // Array of animations for each line of the
    // burger, turning it to an "X"
    let burgerToX = [
      gsap.to(".line1", {
        // line 1 rotates 45
        rotateZ: 45,
        translateY: 10,
        duration: 0.1,
        ease: "none",
        paused: true,
      }),
      gsap.to(".line2", {
        // line 2 opacity 0
        opacity: 0,
        duration: 0.1,
        ease: "none",
        paused: true,
      }),
      gsap.to(".line3", {
        // line 3 rotates -45
        rotateZ: -45,
        translateY: -10,
        duration: 0.1,
        ease: "none",
        paused: true,
      }),
    ];

    // Slide the menu in, when the user clicks on the burger
    const menuContainer = gsap.to(".menu", {
      left: 0,
      paused: true,
      duration: 1,
      ease: "sine",
      zIndex: 100,
    });

    // The element with class .main-tool-bar is the header.
    // This is the animation that hides / shows the header.
    const showAnim = gsap
      .from(".main-tool-bar", {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    // This scroll trigger checks if the user is scrolling down or up to display
    // the header accordingly (scrolling down hides the header, scrolling up displays it)
    const headerTrigger = ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });

    // This was being controlled by the callback of the menu button.
    // However that practice was unnecessary due to the fact that
    // we now use overflowY = hidden while the menu is open, which
    // disables the vertical scroll of the page. Check lines 217-218
    // the how the callback function uses the 'theBody' variable.
    // (Possibly better for optimization)
    // headerTrigger.enable();
    // ║
    // ╚══> This created the bug noted in the TODOLIST.md

    // Timeline to control the animation of the logo
    let logoAnim = gsap.timeline({ repeat: 0, paused: true });
    logoAnim.to(".logo", {
      opacity: 0,
      duration: 0.3,
      ease: "sine",
    });
    logoAnim.to(".logo", {
      opacity: 1,
      delay: 1,
      duration: 0.3,
      ease: "expo.inOut",
      // Callbacks
      onStart: recenterLogo,
      onReverseComplete: recenterLogo,
    });

    // The arrow animation that indicates the user
    // to scroll down in the image section of the menu.
    const arrowAnim = gsap.to("#scrollArrows", {
      duration: 0.5,
      ease: "elastic.inOut(0.3)",
      y: -10,
      repeat: -1,
      yoyo: true,
    });
    arrowAnim.play();

    // The scroll trigger that initiates the scrolled function above.
    ScrollTrigger.observe({
      target: ".menu-image",
      type: "wheel, scroll",
      onUp: () => !animating && scrolled(currentIndex - 1, -1),
      onDown: () => !animating && scrolled(currentIndex + 1, 1),
    });

    // Variables for the scrolling function
    let currentIndex = -1,
      sections = document.querySelectorAll(".scrollWrapItem"),
      images = document.querySelectorAll("#menuImage"),
      headings = gsap.utils.toArray(".menu-image-txt"),
      wrapper = gsap.utils.wrap(0, sections.length),
      animating = false;

    function scrolled(index, direction) {
      index = wrapper(index);
      animating = true;

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
        tl.to(images[currentIndex], { yPercent: -15 * direction }).set(
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
      ).fromTo(images[index], { yPercent: 15 * direction }, { yPercent: 0 }, 0);

      // Set the current index to the section index that was animated
      // during the run of this function
      currentIndex = index;
    }

    // Calling scrolled in order to display the first section
    scrolled(0, 1);

    // This variable references the body, and we simply control the overflowY.
    // Done to disable scrolling on the whole page if the menu is open.
    let theBody = document.querySelector("body");
    theBody.style.overflowY = "visible";

    // Adding an onClick event on the burger icon dynamically
    // This initiates all the header animations
    document.querySelector("#burgerIcon").onclick = () => {
      // boolean to identify the state of the menu
      menuIsOpen = !menuIsOpen;

      // If the menu has to open we play the animations
      // and disable the header trigger
      if (menuIsOpen) {
        // Set the logo animation to frame 0 and play
        logoAnim.seek(0);
        logoAnim.play();
        headerBorder.play();
        headerMenuText.play();
        headerTrigger.disable();
        burgerToX[0].play();
        burgerToX[1].play();
        burgerToX[2].play();
        menuContainer.play();
        theBody.style.overflowY = "hidden";
      } else {
        // If the menu has to close we reset the animations
        // and re-enable the header trigger
        logoAnim.reverse();
        headerBorder.reverse();
        headerMenuText.reverse();
        headerTrigger.enable();
        burgerToX[0].reverse();
        burgerToX[1].reverse();
        burgerToX[2].reverse();
        menuContainer.reverse();
        theBody.style.overflowY = "visible";
      }
    };
  });
  return (
    <>
      <header className="main-tool-bar">
        <div className="w-full flex flex-row-reverse items-center sm:pl-24 sm:pr-24 pl-8 pr-8 flex-nowrap m-0 p-0 border-2 header">
          <div className="w-full flex logo">
            <h1 className={`${Fh1.className} text-5xl sm:text-6xl`}>
              <a href="/">Prestige Lodge</a>
            </h1>
          </div>
          <div className="flex flex-row items-center justify-center" id="burgerIcon">
            <button className="cursor-pointer pr-4">
              <div className=" w-8 my-2 rounded line line1"></div>
              <div className=" w-8 my-2 rounded line line2"></div>
              <div className=" w-8 my-2 rounded line line3"></div>
            </button>
            <h4
              className={`${Fh2h3.className} hidden cursor-pointer lg:flex text-2xl md:text-4xl`}
              id="menuText"
            >
              menu
            </h4>
          </div>
        </div>
      </header>
      <div className="menu items-center justify-center lg:justify-between">
        <div className="flex justify-center text-center items-center lg:items-baseline flex-col pl-24 pr-24">
          <h6 className={`${Fh2h3.className} nav-item mb-14 short:mb-4 lg:text-xl`}>
            <a href="/">Home</a>
          </h6>
          <h6 className={`${Fh2h3.className} nav-item mb-14 short:mb-4 lg:text-xl`}>
            <a href="/services">Services</a>
          </h6>
          {/* <h6 className={`${Fh2h3.className} nav-item mb-14 short:mb-4 lg:text-xl`}>
            Portfolio
          </h6>
          <h6 className={`${Fh2h3.className} nav-item mb-14 short:mb-4 lg:text-xl`}>
            Testimonials
          </h6> */}
          <h6 className={`${Fh2h3.className} nav-item mb-14 short:mb-4 lg:text-xl`}>
            <a href="/contactus">Contact</a>
          </h6>
        </div>
        <div className="menu-image hidden lg:flex self-center lg:self-auto">
          <section className="first scrollWrapItem">
            <div
              className={`${Fh6.className} menu-image-txt w-full flex absolute justify-center z-50`}
            >
              <h2 className="text-xl lg:text-3xl">Hotels</h2>
            </div>
            <Image
              className="relative object-cover object-center"
              id="menuImage"
              src="/images/hotel-pool-pexels.png"
              // fill = true adjusts the image dimations to the div
              // use along-side with object-fit and object-position for correct aspect ratio!
              // check : golbals.css @ .menu-image>img
              fill={true}
              sizes="(min-width: 1024px) 100vw, 33vw"
              alt="Picture of a pool in a hotel, surrounded by a spruce deck. Various trees behind the deck and sea in the far background"
            />
          </section>
          <section className="second scrollWrapItem">
            <div
              className={`${Fh6.className} menu-image-txt w-full flex absolute justify-center z-50`}
            >
              <h2 className="text-xl lg:text-3xl">Restaurants</h2>
            </div>
            <Image
              className="relative"
              id="menuImage"
              src="/images/restaurant-pexels.png"
              // fill = true adjusts the image dimations to the div
              // use along-side with object-fit and object-position for correct aspect ratio!
              // check : golbals.css @ .menu-image>img
              fill={true}
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 100vw, 33vw"
              alt="Picture of a nice restaurant next to a marina. Yachts on the background. The restaurant has wooden chairs with blue cloth on the cushions, and wooden tables with light blue decorations."
            />
          </section>
          <section className="third scrollWrapItem">
            <div
              className={`${Fh6.className} menu-image-txt w-full flex absolute justify-center z-50`}
            >
              <h2 className="text-xl lg:text-3xl">Cafeterias</h2>
            </div>
            <Image
              className="relative z-40"
              id="menuImage"
              src="/images/coffee-shop-pexels.png"
              // fill = true adjusts the image dimations to the div
              // use along-side with object-fit and object-position for correct aspect ratio!
              // check : golbals.css @ .menu-image>img
              fill={true}
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 100vw, 33vw"
              alt="Picture of a coffee shop, with white marble on top of the bar. A display of various ingredients to makek beverages. Gold decorations on a white wall."
            />
          </section>
          <section className="fourth scrollWrapItem">
            <div
              className={`${Fh6.className} menu-image-txt w-full flex absolute justify-center z-50`}
            >
              <h2 className="text-xl lg:text-3xl">Bars And Nightclubs</h2>
            </div>
            <Image
              className="relative z-40"
              id="menuImage"
              src="/images/bar-pexels.png"
              // fill = true adjusts the image dimations to the div
              // use along-side with object-fit and object-position for correct aspect ratio!
              // check : golbals.css @ .menu-image>img
              fill={true}
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 100vw, 33vw"
              alt="Picture of a bar, surrounded by stools. Coasy atmosphere and a display of bottles with various alcoholic drinks."
            />
          </section>
          <div className="flex justify-center w-full flex-col self-end">
            <p
              className={`${Fparagraph.className} menu-image-txt flex relative justify-center z-50`}
            >
              Scroll Down Here!
            </p>
            <p
              className={`${Fparagraph.className} menu-image-txt flex relative justify-center z-50 `}
              id="scrollArrows"
            >
              ⇣⇣⇣
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
