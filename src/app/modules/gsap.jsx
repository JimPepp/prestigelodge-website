// Register plugins here and import as needed in each component.
// While it does not make a huge difference if plugins are registered
// multiple times, a better practice is to load them once here.
// Each additional compenent that needs to use any gsap animations
// can directly reference the imports from here.

// First export the core and needed plugins.
export * from "gsap";
export * from "gsap/Observer";
export * from "gsap/ScrollTrigger"
export * from "gsap/TextPlugin"
export * from "gsap/Flip"
export * from '@gsap/react'

// Then import the cpre and plugins.
import gsap from "gsap";
import { _Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/all";
import { Flip } from "gsap/Flip";

// Plugins must ALWAYS be registered. This can result in failure while
// building for production.
gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin, Flip);