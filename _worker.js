export default {
  async fetch(req) {
    const url = new URL(req.url);
    
    const redirects = {
      "/xe": "https://xeversea.sytes.net",
      "/xd": "https://kent8899.github.io/website-XD/",
    };

    if (redirects[url.pathname]) {
      return Response.redirect(redirects[url.pathname], 302);
    }

    // fallback to static assets
    return fetch(req);
  }
}