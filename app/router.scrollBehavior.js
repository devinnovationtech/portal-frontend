export default function (to, from, savedPosition) {
  // Scroll to anchor tag if any
  if (to.hash) {
    return {
      selector: to.hash,
      offset: { x: 0, y: 96 }, // 96px is safe offset from Website Navbar
      behavior: 'smooth'
    }
  }

  if (savedPosition) {
    return savedPosition
  }

  return { x: 0, y: 0 }
}
