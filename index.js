// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}

function appendCat(name){
    const newCats = [...cats, name];
    return newCats;
}

function prependCat(name){
    const preCats = [name, ...cats];
    return preCats;
}

function removeLastCat(){
    const lastCats = cats.slice(0, cats.length-1);
    return lastCats;
}

function removeFirstCat(){
    const firstCats = cats.slice(1);
    return firstCats;
}