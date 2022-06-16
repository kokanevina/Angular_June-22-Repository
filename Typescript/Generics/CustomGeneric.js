class Train {
    constructor(trainId) {
        this.trainId = trainId;
    }
    get tid() {
        return this.trainId;
    }
}
let train1 = new Train(666);
//console.log(train1.trainId);
console.log(train1.tid);
let train2 = new Train('T4455');
console.log(train2.tid);
class Dictionary {
    constructor() {
        this.dictionary = new Map();
    }
    add(key, value) {
        this.dictionary.set(key, value);
    }
    show() {
        console.log(this.dictionary);
    }
}
let d1 = new Dictionary();
d1.add('sun', 'planet');
d1.add('moon', 'planet');
d1.show();
