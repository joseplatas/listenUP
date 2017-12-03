var fs = require("fs");
var path = require("path");
var bcrypt = require('bcrypt');
var User = require('./models/users');
var _ = require('lodash')

const possibleLanguages = ['en','fr','es']
const possibleTypes = ['quiz','transcription']

//little helper functions.
const isLang = lang => 
  e => e.language === lang
const isType = type =>
  e => e.exerciseType === type
const findMax = (largest, current) => 
  current > largest ? current : largest
const perfectScore = e => 
  typeof e === 'number'
    ? e === 10
    : e.points === 10;

//keeps track of all streaks accumulated throughout the user's exercise history.
//it will then find the largest of them, and return that one.
function findLongestStreak(arr, isSuccessful) {
  const streaks = []
  let currentStreak = 0;

  //empties the currentStreak count and stores it into the streaks array.
  function flush() {
    if(currentStreak > 0)//don't bother saving streaks of 0 points. (Consecutive failures.)
      streaks.push(currentStreak)
    currentStreak = 0;
  }

  for(let item of arr) {
    if(isSuccessful(item))
      currentStreak++;
    else
      flush()
  }

  flush();//flush one more time, in case we ended the exercises on a streak.

  return streaks.reduce(findMax, 0);
}

function hasStreakOf(type, minimumRequired, myExercises) {
    const quizPoints = myExercises
                        .filter(isType(type))
                        .map(e => e.points)

    return findLongestStreak(quizPoints, perfectScore) >= minimumRequired;
}

function getPerfectLanguages(allExercises, myExercises) {
  //group both datasets by their language.
  const allExercisesByLang = _.groupBy(allExercises, e => e.language)
  const myPerfectsByLang = _.groupBy(myExercises.filter(perfectScore), e => e.language)

  //return the languages that this user has gotten all perfect scores for.
  return possibleLanguages
          .filter(lang => {
            //the user may have multiple perfect scores for the same question.
            const uniquePerfects = _.uniqBy(myPerfectsByLang[lang], e => e.id)

            //if the number of unique perfects is the same as all of the exercises for this language in the db,
            //then this user has all perfect scores for all exercises of this language.
            return uniquePerfects.length === allExercisesByLang[lang].length;
          })
}
function exercisesCompleted(myExercises) {
  return myExercises
          .filter(e => e.points > 0)
          .length
}
function lifetimePoints(myExercises) {
  return myExercises
          .map(e => e.points)
          .reduce((sum, current) => sum + current, 0)
}

function longestStreak(myExercises) {
  const excByLang = _.groupBy(myExercises, e => e.language)
  const myLanguages = Object.keys(excByLang)

  //this constant will hold all the streaks for each language/excerciseType combo.
  const allStreaks = possibleTypes
          .map(function(type) {
            return myLanguages.map(function(lang) {
              const relevantExcercises = excByLang[lang].filter(isType(type))
              return findLongestStreak(relevantExcercises, perfectScore)
            })
          })

  return _.flattenDeep(allStreaks)
          .reduce(findMax)
}

module.exports = {
  //compare password that are encripted
  comparePasswords: function(pass, passBcrypt, callback) {

    bcrypt.compare(pass, passBcrypt, function(error, result){
      callback(result);
    });

  },
  analyzeDashboard: function(allExercises, myExercises) {
    const perfectLanguages = getPerfectLanguages(allExercises, myExercises)
    const allPointsEver = lifetimePoints(myExercises)

    return {
      achievements: {
        quiz_finishedOne: hasStreakOf('quiz', 1, myExercises),
        quiz_fiveCorrect: hasStreakOf('quiz', 5, myExercises),
        trans_singleTen: hasStreakOf('transcription', 1, myExercises),
        trans_tripleTens: hasStreakOf('transcription', 3, myExercises),
        en_perfect: perfectLanguages.indexOf('en') > -1,
        fr_perfect: perfectLanguages.indexOf('fr') > -1,
        es_perfect: perfectLanguages.indexOf('es') > -1,
        perfect: perfectLanguages.length === possibleLanguages.length
      },
      statistics: {
        lifetimePoints: allPointsEver,
        averageScore: myExercises.length ? allPointsEver / myExercises.length : 0,
        completedExercises: exercisesCompleted(myExercises),
        longestStreak: longestStreak(myExercises)
      }
    }
  }
}
