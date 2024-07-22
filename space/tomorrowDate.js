// => function to find the date of tomorrow

function tomorrowDate() {
    let today = new Date()

    let tomorrow = new Date()
    tomorrow.setDate(today.getDate() + 1)

    let day = tomorrow.getDate()
    let month = tomorrow.getMonth() + 1;
    let year = tomorrow.getFullYear()

    console.log(`Tomorrow Date : ${day}/${month}/${year}`);
}

tomorrowDate()