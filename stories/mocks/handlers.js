// src/mocks/handlers.js
import { http, HttpResponse } from "msw";

export const handlers = [
  // Intercept "GET http://localhost/api/list" requests...
  http.get("/api/list", () => {
    // ...and respond to them using this JSON response.
    console.log('Captured a "GET /api/list" request');
    return HttpResponse.json(["Mango", "Jack Fruit", "Banana"]);
  }),
];
