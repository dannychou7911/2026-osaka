export function mapUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

export function resolveMapLinks(html) {
  if (!html) return html
  return html.replace(
    /<a([^>]*?)data-place="([^"]+)"([^>]*)>/g,
    (_, pre, place, post) =>
      `<a${pre}href="${mapUrl(place)}" target="_blank" rel="noopener noreferrer"${post}>`
  )
}
