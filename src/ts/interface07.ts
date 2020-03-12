interface Person{
    name : string;
    age?: number;
}

interface Student extends Person {
    grade: number;
}

interface Developer {
    skills: string[]
}

interface WebDeveloper extends Person, Developer {
}

const student : Student = {
    name : "Koo",
    age : 20,
    grade: 3
};

const webDeveloper: WebDeveloper = {
    name: 'Koo',
    age : 20,
    skills: ['HTML', 'CSS', 'JavaScript']
};

console.log(student);
console.log(webDeveloper);

