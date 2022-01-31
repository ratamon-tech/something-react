const LASTNAME = 'Tech'
const FASTNAME = 'Ratamon'

// console.log(`${FASTNAME} ${LASTNAME} is here.`);

const person = (firstname, lastName) => ({
    first:  firstname,
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

console.log(tahoe.mountains);
tahoe.print();

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