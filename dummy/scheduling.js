const { stringifyConfiguration } = require("tslint/lib/configuration");

let workers = // to DB
    [ 
        {name: "Rajan", role: "Student", pref: [1, 3]},
        {name: "Tane", role: "Teacher", pref: [2, 3]},
        {name: "Young", role: "TA", pref: [1, 2]}   
    ]

// Now, create a timetable

let timetable = {1: [], 2: [], 3: []} // to DB

for (var i = 0; i < workers.length; i++) {

    var prefs = workers[i]['pref']

    for (var r = 0; r < prefs.length; r++) {
        timetable[prefs[r]].push(workers[i]['name'])
    }

}

console.log(timetable)