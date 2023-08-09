const messages = []

function writeCards(names, eventName) {
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages
}

// while (condition) {
//     loop body
// }

function countDown(number) {
    while (number >= 0) {
        console.log(number)
        number--
    }
}

