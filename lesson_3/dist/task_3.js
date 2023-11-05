class Task_3 {
    constructor(...props) {
        this.data = [];
        props.forEach(prop => {
            this.data.push(prop);
        });
    }
    *generator() {
        for (const i of this.data) {
            if (typeof i === 'string') {
                yield i;
                console.log(i);
            }
            else {
                throw new Error('Значення (' + i + ') не є строкою і не додано до генератора');
            }
        }
    }
}
console.log("\n" +
    "====================== Task #3 ======================" +
    "\n\n");
const userDataOne = new Task_3('test1', '1', 'test2', 8, false, 'string');
const userDataGenerator = userDataOne.generator();
console.log(userDataGenerator.next(), userDataGenerator.next(), userDataGenerator.next(), userDataGenerator.next(), userDataGenerator.next(), userDataGenerator.next());
