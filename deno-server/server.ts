// Simple Deno server to serve index.html and log 'hello world' to the console
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

console.log("hello world");

serve(async (req) => {
  const url = new URL(req.url);
  if (url.pathname === "/" || url.pathname === "/index.html") {
    const file = await Deno.readFile("./index.html");
    return new Response(file, {
      headers: { "content-type": "text/html" },
    });
  }
  if (url.pathname === "/main.js") {
    const file = await Deno.readFile("./main.js");
    return new Response(file, {
      headers: { "content-type": "application/javascript" },
    });
  }
  return new Response("Not Found", { status: 404 });
}, { port: 8000 });
