class Train<T>{
    private trainId:T;
    constructor(trainId:T){
        this.trainId=trainId;
    }

    get tid():T{
        return this.trainId
    }
}

let train1=new Train<number>(666);
//console.log(train1.trainId);
console.log(train1.tid);

let train2=new Train<string>('T4455');
console.log(train2.tid);




class Dictionary<T,E>{
    key :T;
    value:E;
    dictionary=new Map<T,E>();
    add(key:T,value:E){
        this.dictionary.set(key,value);
    }
    show(){
        console.log(this.dictionary);
    }
}

let d1=new Dictionary<string,string>();
d1.add('sun','planet');
d1.add('moon','planet');
d1.show();