const data =[
    {
        "name" : "Gipsz Jakab",
        "age" : 26,
        "lang" : "hun"
    },

    {
        "name" : "Példa Péter",
        "age" : 15,
        "lang" : "eng"
    },

    {
        "name" : "John Doe",
        "age" : 100,
        "lang" : "usa"
    }
]

const array = students.map((student)=>{
return `His name is ${student.name}, he is ${student.age}years old. hi is speakeing ${student.lang}.`
});
console.log(data);