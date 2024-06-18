let banners = document.querySelectorAll('.banner__content')
let appearBlock = document.querySelectorAll('.appear')
let dataBlock = document.querySelector('.data')
let downIcon = document.querySelector('.down')

window.addEventListener('scroll', () => {
    banners.forEach((banner) => {
        if (banner.getBoundingClientRect().top < 0) {
            banner.style.maxWidth = '100%'
            banner.style.borderRadius = '0'
        } else {
            banner.removeAttribute('style')
        }
    })

    appearBlock.forEach((appear) => {
        if (appear.getBoundingClientRect().top < window.innerHeight - 100) {
            appear.style.opacity = '1'
        } else {
            appear.removeAttribute('style')
        }
    })

    if (dataBlock.getBoundingClientRect().top <= 0) {
        dataBlock.classList.add('sticky')
    } else {
        dataBlock.classList.remove('sticky')
    }
})