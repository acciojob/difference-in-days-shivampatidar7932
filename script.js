var dateDiffInDays = function (date1, date2) {
    // Convert input dates to UTC milliseconds
    const utcDate1 = Date.UTC(
        parseInt(date1.substring(0, 4)),
        parseInt(date1.substring(5, 7)) - 1, // Months are zero-based
        parseInt(date1.substring(8, 10))
    );

    const utcDate2 = Date.UTC(
        parseInt(date2.substring(0, 4)),
        parseInt(date2.substring(5, 7)) - 1,
        parseInt(date2.substring(8, 10))
    );

    // Calculate the difference in days
    const millisecondsInDay = 24 * 60 * 60 * 1000;
    const diffInDays = Math.floor((utcDate2 - utcDate1) / millisecondsInDay);

    return diffInDays;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
