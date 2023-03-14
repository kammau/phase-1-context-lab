/* Your Code Here */

// Your code here
function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(array) {
    return array.map(function(arr) {
        return createEmployeeRecord(arr)
    });
}

function createTimeInEvent(dateStamp) {
    let [date, hour] = dateStamp.split(" ");
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: `${date}`
    })
    return this
}

function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(" ");
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: `${date}`
    })
    return this
}

function hoursWorkedOnDate(formDate) {
    let dateSoughtIn = this.timeInEvents.find(function(element) {
        if (element.date === formDate) {
            return element.date
        }
    })

    let dateSoughtOut = this.timeOutEvents.find(function(element) {
        if (element.date === formDate) {
            return element.date
        }
    })

    let hours1 = dateSoughtOut.hour - dateSoughtIn.hour;
    return hours1 / 100
}

function wagesEarnedOnDate(formDate) {
    let payOwed = hoursWorkedOnDate.call(this, formDate) * this.payPerHour;
    return parseFloat(payOwed)
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(srcArray, firstNameString) {
    return srcArray.find(function(element) {
        if (element.firstName === firstNameString) {
            return firstNameString
        }
    })
}

function calculatePayroll(arrayEmployeeRec) {
    return arrayEmployeeRec.reduce(function(accumulator, currentValue) {
        return accumulator + allWagesFor.apply(currentValue)
    }, 0)
}

