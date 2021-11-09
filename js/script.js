function goto() {
    window.location.href = `index.html#video`
}

const stop = document.getElementById('stop');
const logStop = document.getElementById('stopTwo');
const moveOn = document.getElementById('move');
const moveOnLog = document.getElementById('moveLogin');
var modal = document.getElementById("myModal");

var loginModal = document.getElementById("loginModal");

const names = document.getElementById('izina');
const sector = document.getElementById('umurenge');
const pass = document.getElementById('ijambobanga');
const namesLog = document.getElementById('izinaLog');
const sectorLog = document.getElementById('umurengeLog');
const passLog = document.getElementById('ijambobangaLog');
const ubudehe = document.getElementById('ubudehe');

stop.addEventListener('click', ()=> {
    modal.style.display = "none";
})

moveOn.addEventListener('click', ()=>{
    if(names.value === '' || sector.value === '' || pass.value === '' || ubudehe.value === ''){
        alert("Hari amakuru abura, yuzuzemo wongere ugerageze!")
    }else{
        alert('Kwiyandikisha byagenze neza, injira utangire ukore imihigo!');
        modal.style.display = "none";
    }
})

logStop.addEventListener('click', ()=> {
    loginModal.style.display = "none";
})

moveOnLog.addEventListener('click', ()=>{
    if(namesLog.value === '' || sectorLog.value === '' || passLog.value === ''){
        alert("Hari amakuru abura, yuzuzemo wongere ugerageze!")
    }else{
        modal.style.display = "none";
        window.location.href = "umuryango/index.html"
    }
})

let imihi = document.getElementById('imihi')

imihi.addEventListener('click', ()=> {
    window.location.href = 'index.html#imihigo'
})
