var PythonShell = require('python-shell');

module.exports = function updateQuest() {
    PythonShell.run('getquests.py', (err, result) => {
        if (err) console.log(err);
        console.log(result);
    });
}
