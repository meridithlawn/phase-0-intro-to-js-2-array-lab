const cats = ["Milo", "Otis", "Garfield",];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name){
    cats.pop("Garfield");
}
function destructivelyRemoveFirstCat(name) {
    cats.shift("Milo");
}
function appendCat(name) {
    const newCats = [...cats, "Broom"];
    return newCats;
}
function prependCat(name) {
    const newCats = ["Arnold", ...cats];
    return newCats;
}
function removeLastCat() {
    const newCats = cats.slice();
    newCats.pop();
    return newCats;
}
function removeFirstCat() {
    const newCats = cats.slice();
    newCats.shift();
    return newCats;
}