// for of loop is iterable for objects so use for in loop

const myObj = {
    js: "Javascript",
    c: "c language",
    cpp: "C++",
};

for (const key in myObj) {
    // console.log(`${key} short is for ${myObj[key]}`);
}

const programming = ["js", "cpp", "java", "python"];

for (const key in programming) {
    // key prints the index number of the elements to print the value present at the index use programming[key]
    console.log(`${key} = ${programming[key]}`);
}

// objects are not iterable for "for in" loop