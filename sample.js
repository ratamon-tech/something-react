const LASTNAME = 'Tech'
const FASTNAME = 'Ratamon'

// console.log(`${FASTNAME} ${LASTNAME} is here.`);

const person = (firstname, lastName) => ({
    first:  firstname,
    last: lastName
});

console.log(person("Ratamon", "Tech"));
/*
const tahoe = {
    mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
    print: function(delay = 1000) {
        setTimeout(() => {
            console.log(this.mountains.join(", "));
        }, delay);
    }
};

console.log(tahoe.mountains);
tahoe.print();
*/
// destructuring

const lordify = ({ firstname }) => {
    console.log(`${firstname} of Canterbury`)
};

const lordify2 = ({ spouse: { firstname } }) => {
    console.log(`${firstname} of Canterbury`)
};


const regularPerson = {
    firstname: "Bill",
    lastname: "Wilson",
    spouse: {
        firstname: "Phil",
        lastname: "Wilson"
    }
};

lordify(regularPerson);
lordify2(regularPerson);

// spread operator

function directions(...args) {
    let [start, ...remaining] = args;
    let [finish, ...stops] = remaining.reverse();

    console.log(`drive through ${args.length} towns`);
    console.log(`start in ${start}`);
    console.log(`the destination is ${finish}`);
    console.log(`stopping ${stops.length} times in between`);
    console.log(`stops are ${stops.join(' and ')}`);
}

directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahomo");
