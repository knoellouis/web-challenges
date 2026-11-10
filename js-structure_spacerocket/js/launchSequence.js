// Implement the launch sequence function here and export it as the default export.
import { loadPayload } from "./core/load.js";
import { fuel } from "./core/fuel.js";
import { countdown } from "./core/countdown.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";
import { NFSAT, FISHSAT } from "./payload/satellites.js";
import { getNewRocket, rocket } from "./core/rocket.js";

export default function launch() {
  window.rocket = rocket;
  loadPayload(NFSAT);
  loadPayload(FISHSAT);

  fuel();

  for (let i = 0; i < window.rocket.requiredCountdown; i++) {
    countdown();
  }

  if (window.rocket.countdown === window.rocket.requiredCountdown) {
    liftoff();
  }

  if (window.rocket.liftoff) {
    deployPayload();
  }

  console.log(window.rocket);
}
