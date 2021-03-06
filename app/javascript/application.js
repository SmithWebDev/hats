// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

// Connects ActionCable consumer, with MRUJS wrapping CableCar for CableReady
// usage
import consumer from "./channel/consumer";
import CableReady from "cable_ready";
import mrujs from "mrujs";
import { CableCar } from "mrujs/plugins";

mrujs.start({
  plugins: [
    new CableCar(CableReady)
  ]
})
