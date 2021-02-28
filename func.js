calculate = () => {

    let name = document.getElementById("name").value;

    let price = Number(document.getElementById("cost").value);

    if (name.length < 1 && parseString(price) < 1) {
        alert("Name and price should not be empty!");
    }
    else {
        return name;
        return price;
    }

    const education = Number(document.getElementById("education").value);
    price *= education;

    const networth = (document.getElementById("networth").value);
    price *= networth;

    const skills = Number(document.getElementsByClassName("skills").value);

    price = getCheckboxValuesReduce(skills, price)

    const getCheckboxValuesReduce = (skills, price) => {
        let list = Array.from(skills)
        let result = list.reduce((price, item) => {
            if (item.checked) {
                return price + Number(item.value)
            }
        }, price)
        return result;
    }

    const age = Number(document.getElementById("age").value);

    price = getRadioValue(age, price);

    const getRadioValue = (age, price) => {
        age.forEach(item => {
            if (item.checked) {
                price = price * Number(item.value)
            }
        })
        return price;
    }

    const reputation = Number(document.getElementsByClassName("reputation"));

    price = getCheckboxValuesForLoop(reputation, price);

    const getCheckboxValuesForLoop = (html_collection, price) => {
        for (let i = 0; i < html_collection.length; i++) {
            if (html_collection[i].checked) {
                price = price + Number(html_collection[i].value)
            }
        }
        return price;
    }

    const text = document.getElementById("text");

    document.getElementById("result").innerHTML = `The price for your bride/groom ${name} is ${price}. Your love letter is "${text}"`;
}