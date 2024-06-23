const marvel_heros = ["Thor", "Ironmaan", "Spiderman"];
const dc = ["superman", "flash", "batman"];

// marvel_heros.push(dc); // changes are made to the existing array marvel_heros
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

// console.log(marvel_heros.concat(dc));
// const allHeros = marvel_heros.concat(dc); // .concat() combines 2 or more array and results in new array without modifying the existing array.
// console.log(allHeros);

// spread operation
/* const all_new_heros = [...marvel_heros, ...dc];
console.log(all_new_heros); */

const another_array = [1,2,3,[4,5,6], 7,[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Sonar"));
console.log(Array.from("SONAR"));
console.log(Array.from({name: "Sonar"}));

let sc1 = 100;
let sc2 = 200;
let sc3 = 300;

console.log(Array.of(sc1, sc2, sc3));