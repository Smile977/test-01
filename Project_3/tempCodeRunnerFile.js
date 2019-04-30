function learnJS(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}

function done() {
    console.log("Я прощел 3-ий урок!");
}

learnJS("JavaScript", done);