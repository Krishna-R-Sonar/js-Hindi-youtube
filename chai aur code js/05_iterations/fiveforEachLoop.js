const codingLang = ["js", "python", "cpp"];

// codingLang.forEach((key) => (console.log(key)));

codingLang.forEach((item, index, arr) => {
    console.log(item , index, arr);
})

const arrOfObj = [
    {
        languageName: "Java",
        languageExtension: ".java",
    },{
        languageName: "Javascript",
        languageExtension: ".js",
    },{
        languageName: "Python",
        languageExtension: ".py",
    }
]

arrOfObj.forEach((obj) =>{
    console.log(obj.languageExtension);
})