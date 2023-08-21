const nav = document.querySelector('nav')
const image_box = [0, 1, 2, 3, 4, 5].map(i => document.querySelector(`#box-${i}`))
const block_3 = document.querySelector('.block-3')
const img_about = document.querySelector('.block-4>img')
const gohome = document.querySelector('.go-home')
const bg1 = document.querySelector('.section-1')
const bg5 = document.querySelector('.bg-5')
const bg7 = document.querySelector('.bg-7')
document.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    const innerHeight = window.innerHeight
    if (scrollY > 10) {
        nav.classList.add("show-nav")
        gohome.classList.add('go-home-show')
    } else {
        nav.classList.remove("show-nav")
        gohome.classList.remove('go-home-show')
    }
    if (block_3.getBoundingClientRect().top < innerHeight - 100) {
        for (let index = 0; index < image_box.length; index++) {
            image_box[index].classList.add('image-box-show');
        }
    }
    if (img_about.getBoundingClientRect().top < innerHeight - 200) {
        img_about.classList.add('img-about-show')
    }
    if (window.innerWidth > 1280) {
        bg1.style.backgroundPositionY = `${-0.22 * scrollY}px`
        const bg5_move = bg5.getBoundingClientRect().top - innerHeight
        if (bg5_move < 0) {
            bg5.style.backgroundPositionY = `${0.4 * bg5_move}px`
        }
        const bg7_move = bg7.getBoundingClientRect().top - innerHeight
        if (bg7_move < 0) {
            bg7.style.backgroundPositionY = `${0.4 * bg7_move}px`
        }
    }
})
const nav_ham = document.querySelector('.nav-menu-ham')
const on_nav_ham = () => {
    nav_ham.classList.toggle('on-nav-ham')
}