// let p = document.getElementsByClassName('test')
// let p = document.getElementsByName('p')
// console.log(p)

// let p = document.querySelector('.test')
// console.log(p)

// let hello = document.querySelector('#hello')
// console.log(hello)

// let container = document.querySelector('.container')
// console.log(container)

// let nav = document.getElementsByTagName('nav')
// console.log(nav)

// let ul = document.getElementsByTagName('ul')
// console.log(ul)

// let li = document.getElementById('item-2')
// console.log(li)


// console.log(document.body)
// console.log(document.documentElement)
// console.log(document.head)


// let container = document.querySelector('div')
// let ul = document.querySelector('ul')


// let paragraf = document.createElement('p')
// paragraf.innerText = 'This is a dummy paragraph'
// paragraf.style.color = 'red'
// document.body.prepend(paragraf)  //append nfund prepend nfillim
// container.append(paragraf)

// let container = document.querySelector('div')
// let p = document.createElement('p')

// p.innerText = 'This is a dummy paragraph'
// container.before(p.cloneNode(true))
// container.after(p.cloneNode(true))


// let item2 = document.getElementById('item-2')
// item2.remove()

// clonenode lejon klonimin
// item2.classList.add('test')
// item2.setAttribute('class', 'test')
// container.setAttribute("id", "container-name")

// item2.style.setProperty('background-color', 'blue')
// item2.style.setProperty('color', 'white')
// item2.style.setProperty('padding', '0.3cm 0.8cm')
// console.log(container.classList.toggle('.container'))

// let ul = document.querySelector('ul')
// console.log(ul.firstChild)

let container = document.querySelector('.container')
container.id = 'dsad'
container.addEventListener('click',function() {
    console.log('clicked')
})

container.removeEventListener('click', fnc)

// console.log(container.id)