async function handleRequest(request) {
  if (request.url.endsWith('autodiscover.xml')) {
    const xml = await AUTODISCOVER.get('zoho');
    return new Response(xml, {
      headers: {
        'content-type': 'application/xml;charset=UTF-8',
      },
    })
  }
  return fetch(request)
}

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})
