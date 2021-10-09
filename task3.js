let changeablediv = document.getElementsByClassName('carsblock')

let changeablelink = document.getElementsByClassName('changeablelink')

let suvsdiv = document.getElementsByClassName('suvs')

let passengerdiv = document.getElementsByClassName('PASSENGERVEHICLES')

let cvdiv = document.getElementsByClassName('cv')

let suvslink = document.getElementById('suvslink')

let passengerlink = document.getElementById('passengerlink')

let cvlink = document.getElementById('cvlink')

for (let index = 0; index < changeablelink.length; index++) {
    let element = changeablelink[index];
    element.addEventListener('click', changeclass)

}

passengerlink.addEventListener('click', passerngerchangeclass)
suvslink.addEventListener('click', suvschangeclass)
cvlink.addEventListener('click', cvchangeclass)

function cvchangeclass() {
    console.log('t')
    for (let index = 0; index < changeablediv.length; index++) {
        console.log("a")
        let i = changeablediv[index];
        i.classList.remove('visable')
        i.classList.add('notvisable')
    }
    for (let index = 0; index < cvdiv.length; index++) {
        console.log("a")
        let i = cvdiv[index];
        i.classList.remove('notvisable')
        i.classList.add('visable')
    }

}

function suvschangeclass() {
    console.log('t')
    for (let index = 0; index < changeablediv.length; index++) {
        console.log("a")
        let i = changeablediv[index];
        i.classList.remove('visable')
        i.classList.add('notvisable')
    }
    for (let index = 0; index < suvsdiv.length; index++) {
        console.log("a")
        let i = suvsdiv[index];
        i.classList.remove('notvisable')
        i.classList.add('visable')
    }

}

function passerngerchangeclass() {
    console.log('t')
    for (let index = 0; index < changeablediv.length; index++) {
        console.log("a")
        let i = changeablediv[index];
        i.classList.remove('visable')
        i.classList.add('notvisable')
    }
    for (let index = 0; index < passengerdiv.length; index++) {
        console.log("a")
        let i = passengerdiv[index];
        i.classList.remove('notvisable')
        i.classList.add('visable')
    }

}


function changeclass() {
    for (let index = 0; index < changeablediv.length; index++) {
        console.log("a")
        let i = changeablediv[index];

        i.classList.remove('notvisable')
        i.classList.add('visable')


    }

}