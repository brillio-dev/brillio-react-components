// src/mocks/browser.js
import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

async function enableMocking() {
  const { worker } = setupWorker(...handlers);
  // worker.start()` returns a Promise that resolves once the Service Worker is up and ready to intercept requests.
  return worker.start({ onUnhandledRequest: "bypass" });
}

await enableMocking();
