async function loadNav() {
  const headerContainer = document.getElementById('header-placeholder')
  const header = await fetch('./header.html')
  const headerhtml = await header.text()
  headerContainer.innerHTML = headerhtml

  const footerContainer = document.getElementById('footer-placeholder')
  const footer = await fetch('./footer.html')
  const footerhtml = await footer.text()
  footerContainer.innerHTML = footerhtml

  initHamburgerMenu()
  initHeaderVars()
}
loadNav()
// 將 header DOM 綁定拆成一個 function
function initHeaderVars() {
  window.mobileMenuButton = document.getElementById('mobile-menu-button')
  window.mobileMenu = document.getElementById('mobile-menu')
  window.menuIcon = document.getElementById('menu-icon')
  window.closeIcon = document.getElementById('close-icon')

  console.log('Header DOM 綁定完畢')
}
// // 輪播圖
// const track = document.getElementById('carouselTrack')
// const slides = Array.from(track.children)
// const nextButton = document.getElementById('nextBtn')
// const prevButton = document.getElementById('prevBtn')
// const dotsContainer = document.getElementById('dotsContainer')

// const slideCount = slides.length
// let currentSlideIndex = 0

// const generateDots = () => {
//   for (let i = 0; i < slideCount; i++) {
//     const dot = document.createElement('button')
//     dot.classList.add('dot', 'h-3', 'w-3', 'rounded-full', 'bg-gray-300', 'hover:bg-teal-400')
//     dot.addEventListener('click', () => moveToSlide(i))
//     dotsContainer.appendChild(dot)
//   }
// }

// const updateCarousel = () => {
//   track.style.transform = `translateX(-${currentSlideIndex * 100}%)`
//   Array.from(dotsContainer.children).forEach((dot, index) => {
//     dot.classList.toggle('active', index === currentSlideIndex)
//     dot.classList.toggle('bg-teal-600', index === currentSlideIndex)
//   })
// }

// const moveToSlide = (i) => ((currentSlideIndex = i), updateCarousel())
// const moveNext = () => ((currentSlideIndex = (currentSlideIndex + 1) % slideCount), updateCarousel())
// const movePrev = () => ((currentSlideIndex = (currentSlideIndex - 1 + slideCount) % slideCount), updateCarousel())

// nextButton.addEventListener('click', moveNext)
// prevButton.addEventListener('click', movePrev)

// window.onload = () => {
//   generateDots()
//   updateCarousel()
// }
// 漢堡選單初始化
function initHamburgerMenu() {
  const btn = document.getElementById('mobile-menu-button')
  const menu = document.getElementById('mobile-menu')
  const menuIcon = document.getElementById('menu-icon')
  const closeIcon = document.getElementById('close-icon')

  if (!btn || !menu) return

  btn.addEventListener('click', () => {
    const open = menu.classList.contains('max-h-0')
    menu.classList.toggle('max-h-0', !open)
    menu.classList.toggle('max-h-96', open)
    menu.classList.toggle('opacity-0', !open)
    menu.classList.toggle('opacity-100', open)

    menuIcon.classList.toggle('hidden', open)
    closeIcon.classList.toggle('hidden', !open)
  })
}
