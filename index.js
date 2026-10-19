export default {
  async fetch(request, env, ctx) {
    const targetUrl = "https://github.com/Xion-Xer/ZORO-MD-MODULES-main/archive/refs/heads/main.zip";

    try {
      const response = await fetch(targetUrl, {
        headers: {
          "User-Agent": "Cloudflare-Worker-Proxy"
        }
      });

      return new Response(response.body, {
        status: response.status,
        headers: response.headers
      });
    } catch (e) {
      return new Response("Error fetching update: " + e.message, { status: 500 });
    }
  },
};
