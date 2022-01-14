// Плавный скролл
const scrollSmooth = (anchor) => {
    
    let dist = document.documentElement.scrollTop + anchor.getBoundingClientRect().top;

    window.scrollTo({
        top: dist,
        behavior: "smooth"
    })
}

export { scrollSmooth }