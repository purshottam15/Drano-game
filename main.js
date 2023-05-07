alert('do you want start the game')
dino = document.getElementsByClassName('dino')[0]
obstacle = document.getElementsByClassName('obstacle')[0]
gamename=document.getElementsByClassName('name')[0]

obstacle1 = document.getElementsByClassName('obstacle1')[0]
obstacle.classList.add('obs')
let dinoimg = document.getElementById('dinoimg')
score = 0;
cross = true
audio = new Audio('music.mp3')


// dino=new Audio('')
audio.addEventListener("canplaythrough", () => {
    audio.play().catch(e => {
       window.addEventListener('keydown', () => {
          audio.play()
       })
    })
 });
document.onkeydown = function (e) {
    console.log(e.keyCode)
    if (e.keyCode == 38) {
        dino = document.getElementsByClassName('dino')[0]

        dino.classList.add('animatedino');
        setTimeout(() => {
            dino.classList.remove('animatedino');

        }, 700);
    }
    else if (e.keyCode == 39) {
        dino = document.getElementsByClassName('dino')[0]
        dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
        dino.style.left=dx + 140 + 'px'
        if(dx>650){
            dino.style.left=dx  + 'px'

        }
 
}
else if (e.keyCode == 37) {
    dino = document.getElementsByClassName('dino')[0]
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
    dino.style.left=(dx - 140) + 'px'
    
    if(dx<150){
        dino.style.left=dx  + 'px'

    }
   
    
}
}




console.log(dinoimg.offsetbottom)
setInterval(() => {
    dino = document.getElementsByClassName('dino')[0]
    obstacle = document.getElementsByClassName('obstacle')[0]
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'))


    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'))
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'))
    offsetx = Math.abs(dx - ox)
    offsety = Math.abs(dy - oy)
    if (offsetx < 93 && offsety < 52) {
        obstacle.classList.remove('obs')
        obstacle.style.left = ox + 30+ 'px' 
        audio.pause()
        nextobstacle = document.getElementsByClassName('obstacle')[0]
        gamename.innerHTML="Game Over"

        for(let i =0;i<27;i++){
            setTimeout(()=>{
                dino = document.getElementsByClassName('dino')[0]
                obstacle = document.getElementsByClassName('obstacle')[0]
                dino.style.bottom= '-' + i + '%' 
                obstacle.style.bottom= '-' + i + '%' 

            },600)
        }







    }
    else if (offsetx < 50 && cross) {
        score += 1;
        updatescore(score)
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000)
        setTimeout(() => {
            anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'))
            if(anidur<5){
                newdur = anidur - 0.2;
                obstacle.style.animationDuration = newdur + 's'
            }
          

             else if(anidur<3.8){
                newdur = anidur - 0;
            obstacle.style.animationDuration = newdur + 's'
            }






        }, 100)




    }








}, 10)
function updatescore(score) {
    scorecont.innerHTML = "Score: " + score
}
