import { type Step } from "react-joyride";

export const tourSteps: Step[] = [
  {
    target: ".step-1",
    content: "This is step 1",
    disableBeacon: true,
    placement: "top-start",
  },
  {
    target: ".step-2",
    content: "This is step 2",
    disableBeacon: true,
    placement: "top-start",
  },
  {
    target: ".step-3",
    content: "This is step 3",
    disableBeacon: true,
    placement: "top-start",
  },
];

// const steps: Step[] = [
//   {
//     target: ".dashboard-step",
//     content: "Welcome to your dashboard! This is where you can see your stats.",
//     placement: "bottom",
//     disableBeacon: true, // 👈 IMPORTANT
//   },
//   {
//     target: ".add-project-step",
//     content: "Click here to add a new project.",
//     placement: "bottom",
//     disableBeacon: true, // 👈 IMPORTANT
//   },
// ];

//tour step handle
