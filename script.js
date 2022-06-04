let cards = document.querySelector('.cards');


let arr = [
    {
        char : 'q',
        found : false,
        id: 1,
    },
    {
        char : 'q',
        found : false,
        id: 2,
    },
    {
        char : 'w',
        found : false,
        id: 3,
    },
    {
        char : 'w',
        found : false,
        id: 4,
    },
    {
        char : 'e',
        found : false,
        id: 5,
    },
    {
        char : 'e',
        found : false,
        id: 6,
    },
    {
        char : 'r',
        found : false,
        id: 7,
    },
    {
        char : 'r',
        found : false,
        id: 8,
    },
    {
        char : 't',
        found : false,
        id: 9,
    },
    {
        char : 't',
        found : false,
        id: 10,
    },
    {
        char : 'y',
        found : false,
        id: 11,
    },
    {
        char : 'y',
        found : false,
        id: 12,
    },
    {
        char : 'u',
        found : false,
        id: 13,
    },
    {
        char : 'u',
        found : false,
        id: 14,
    },
    {
        char : 'i',
        found : false,
        id: 15,
    },
    {
        char : 'i',
        found : false,
        id: 16,
    }

]


const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
shuffle(arr);


const createElements = () => {
    arr.map(el => {
        const newElement = document.createElement('p');
        newElement.textContent = el.char;
        newElement.id = el.id;

        cards.appendChild(newElement);
        if(el.found) {
            newElement.style.color = 'black';
        }
    })
    
}
createElements();


let temArr = [];

document.addEventListener('click', (e) => {
    arr = arr.map(el => el.id === Number(e.target.id) ? {...el,found : true} : el);
    
    let getEl = arr.filter(el => el.id === Number(e.target.id));
    temArr.push(...getEl);
    console.log(temArr)
    cards.innerHTML = '';
    createElements()

    if(temArr.length === 2 && temArr[0].char === temArr[1].char) {
        console.log('it is equal', )
        temArr = [];
    } else if(temArr.length === 2 && temArr[0].char !== temArr[1].char) {
        arr = arr.map(el => el.char === temArr[0].char || el.char === temArr[1].char ?
            {...el,found : false} : el );

            setTimeout(()=> {
                cards.innerHTML = '';
                createElements()
            },1000)
        temArr = [];
    }
});
