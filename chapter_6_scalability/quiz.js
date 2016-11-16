class Quiz {
    constructor(q, a){
        this._question = q;
        this._answer = a;
    }

    get question(){
        return this._question;
    }

    get answer(){
        return this._answer;
    }

    toString(){
        return `Question: ${this._question}, Aswer: ${this._answer}`;
    }
}

class Quizes {

    constructor(){
        this._quizes = [];
    }

    add(q,a){
        this_._quizes.push(new Quiz(q,a));
    }

    show(){
        this._quizes.forEach(q => console.log(q.toString()));
    }

}

class Action {
    constructor(){
        this._quizes = new Quizes();
    }

    buid(){
        this._quizes
            .add("A field that has the boolean of value of either true or false would make for a good shard key:",
                    "false");
    }
}