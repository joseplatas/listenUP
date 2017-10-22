//functions necessary for Transcription to operate

// function takes in raw percentage of correctness and returns a score between 0-10
export function getScore(percentCorrect) {
    var score = 0;
    if (percentCorrect < .1) {
        return score
    }
    else {
        score = Math.ceil(percentCorrect * 10)
        return score
    }
}

export function changeInputTest(input) {
    var changedInput = input + ' test test test'
    console.log(changedInput)
}