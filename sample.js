// 0から5まで出力
for (var i = 0; i < 6; i++) {
    console.log(i)
;}

const LASTNAME = 'Tech'
const FASTNAME = 'Ratamon'

console.log(`${FASTNAME} ${LASTNAME} is here.`);

const person = (firstName, lastName) => ({
    first:  firstName,
    last: lastName
});

console.log(person("Ratamon", "Tech"));

const tahoe = {
    mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
    print: function(delay = 1000) {
        setTimeout(() => {
            console.log(this.mountains.join(", "));
        }, delay);
    }
};

tahoe.print();