class NodeQueue{
    constructor(value){
        this.next = null;
        this.value = value;
    }
}
class Queue{
    constructor (){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    enqueue(value){
        let nodeQueue = new NodeQueue(value);
        if(this.size == 0){
            this.head = nodeQueue;
        }else{
            this.tail.next = nodeQueue;
        }
        this.tail = nodeQueue;
        this.size++;
    }
    dequeue(){
        if(this.size== 0){
            return null;
        }
        let value = this.head.value;
        this.head = this.head.next;
        this.size--;
        if(this.size == 0){
            this.tail = null;
        }
        return value;
    }
    isEmpty(){
        return this.size == 0;
    }
}

function solution(numbers, target) {
    const queue = new Queue();
    const len = numbers.length;
    let answer = 0;
    
    queue.enqueue([-numbers[0], 1]);
    queue.enqueue([+numbers[0], 1]);

    while (!queue.isEmpty()) {
        let [num, level] = queue.dequeue();
        if (level === len) {
            if (num === target) {
                answer++;
            }
        } else {
            queue.enqueue([num - numbers[level], level + 1]);
            queue.enqueue([num + numbers[level], level + 1]);
        }
    }
    return answer;
}