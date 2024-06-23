const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descripter);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    Writable: false,
    enumerable: false,
})