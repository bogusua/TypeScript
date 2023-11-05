class Dictionary <TKey, TValue, TDescription> {
    private data: Map<TKey, [TValue, TDescription]> = new Map<TKey, [TValue, TDescription]>();

    public *generator(): Generator {
        for (const [key, [value, description]] of this.data) {
            yield { key, value, description };
        }
    }

    public setItem(key: TKey, value: TValue, description: TDescription): string {
        if (!this.data.get(key)) {
            this.data.set(key, [value, description]);
            return `Key ${key} add to dictionary`;
        } else {
            return `Key ${key} not unique`;
        }
    }

    public getItem(key:TKey): [TValue, TDescription] | undefined | string {
        return (!this.data.get(key))
            ? `${key} not found in dictionary`
            : this.data.get(key);
    }

    public delItem(key: TKey): string {
        this.data.delete(key);
        return key + ' deleted';
    }
}

const techDict = new Dictionary<string, number, string>();
techDict.setItem('JavaScript', 10, 'A programming language');
techDict.setItem('Python', 5, 'A high-level programming language');
techDict.setItem('HTML', 3, 'A markup language');
techDict.setItem('CSS', 3, 'A style sheet language');
techDict.setItem('SQL', 4, 'A query language');

const animalDict = new Dictionary<string, string, string>();
animalDict.setItem('Cat', 'Mammal', 'A domesticated feline');
animalDict.setItem('Dog', 'Mammal', 'A domesticated canine');
animalDict.setItem('Fish', 'Aquatic', 'A type of aquatic animal');
animalDict.setItem('Bird', 'Avian', 'A flying animal');

const fruitDict = new Dictionary<string, string, number>();
fruitDict.setItem('Apple', 'Red', 2);
fruitDict.setItem('Banana', 'Yellow', 1);
fruitDict.setItem('Orange', 'Orange', 2);
fruitDict.setItem('Grapes', 'Purple', 3);

console.dir(techDict);
console.dir(animalDict);
console.dir(fruitDict);

const techGenerator = techDict.generator();
console.log(
    techGenerator.next().value,
    techGenerator.next().value,
    techGenerator.next().value,
    techGenerator.next().value,
    techGenerator.next().value,
    techGenerator.next().value,
);

console.log('Get Apple', fruitDict.getItem('Apple'));

console.log('Get Fish', animalDict.getItem('Fish'))
console.log(animalDict.delItem('Fish'));
console.log('Get Fish', animalDict.getItem('Fish'));

console.log('Add not unique key to techDict');
console.log(techDict.setItem('SQL', 10, 'test'))
