function createBallons(){
    const ballon = document.createElement('div')

    ballon.classList.add('ballons')

    ballon.style.left = Math.random() * 100 + 'vw'

    ballon.style.animationDuration = Math.random() * 2 + 3 + "s"

    ballon.style.animationDelay = Math.random() * 1 + 's'

    ballon.innerText = '0'

    document.body.appendChild(ballon);

    setTimeout(() => {
        ballon.remove()
    }, 4000)
}
setInterval(createBallons,200)