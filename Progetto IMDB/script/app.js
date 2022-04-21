const menuBtn = document.getElementById('menu-btn')
const closeMenu = document.getElementById('close-menu')

menuBtn.addEventListener('click',changeDisplay)

function changeDisplay(){
    const menuContainer = document.getElementById('menu-container').style.display = 'block'
}

closeMenu.addEventListener('click',displayNone)
function displayNone(){
    const menuContainer = document.getElementById('menu-container').style.display = 'none'
}

