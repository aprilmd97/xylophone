function myFunction() {
    document.getElementById("box")
}

const keys = document.querySelectorAll(`.bar`);
const keyboard = document.querySelectorAll(`.box`);

const playAndColor = keyNumber => {
   const audio = document.querySelector(`.audio__${keyNumber}`)
   const key = document.querySelector(`.key__${keyNumber}`)
};
   audio.play()
   audio.currentTime = 0

window.addEventListener(`keydown`, e => playAndColor(e.keyCode))

keys.forEach(key => key.addEventListener('click', function(e) {
  const reg = /\d{2}/
  const str = this.className
  playAndColor(str.match(reg)[0])
}))