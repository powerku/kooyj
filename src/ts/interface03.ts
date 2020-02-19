interface ITodo {
    id: number;
    content: string;
    completed: boolean;
}

class Todo implements ITodo {
    constructor(
        public id : number,
        public content: string,
        public completed: boolean
    ){

    }
}

let todo2 = new Todo(1, 'Typescript', false);

console.log(todo2);