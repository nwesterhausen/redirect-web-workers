/**
 * @param {string} PRESHARED_AUTH_HEADER_KEY Custom header to check for key
 */
const PRESHARED_AUTH_HEADER_KEY = "X-Custom-Auth"

async function handleRequest(request) {
  const psk = request.headers.get(PRESHARED_AUTH_HEADER_KEY)
  const allowed = await AUTH.get('auth1')

  if (psk === allowed) {
    // Correct preshared header key supplied. Fetch request from origin.
    return fetch(request)
  }

  // Incorrect key supplied. Reject the request.
  return new Response("Sorry, you have supplied an invalid key.", {
    status: 403,
  })
}

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})