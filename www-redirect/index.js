const statusCode = 302

async function handleRequest(request) {

  return Response.redirect(insertWWW(request.url), statusCode)
}

addEventListener("fetch", async event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * 
 * @param {string} url 
 */
function insertWWW(url) {
  return `${url.split("//")[0]}//www.${url.split("//")[1]}`    
}