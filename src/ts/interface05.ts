interface IDuck {
    quack() : void;
}

class MallardDuck implements IDuck {
    quack(): void {
        console.log('Quack!');
    }
}

class RedheadDuck{
    quack() {
        console.log('q~uack!');
    }
}

function makeNoise(duck: IDuck): void {
    duck.quack();
}

makeNoise(new MallardDuck());
makeNoise(new RedheadDuck());