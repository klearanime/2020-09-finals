// Your code goes below:


const makeParagraph = (para) => {
  const sentence = para.toString()
  let paragraph = ''
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i - 1] === '.') {
      paragraph += ' '
    } else {
      paragraph += sentence[i]
    }
  }
  return paragraph
}


const totalScore = (num, num2) => {
  let total = 0;
  for (const level of num) {
    if (level.multiplier === undefined) {
      level.multiplier = 1
    }
    total += level.score * level.multiplier
    // }
    //   total += level.score * level.multiplier + num2
  }
  return total
}



const cipher = (str) => {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  let result = ''
  for (let i = 0; i < alpha.length; i++) {
    if (alpha[i] === letter && alpha[i] !== 'z') {
      return alpha[i + 1]
    } else if (alpha[i] === 'z') {
      'a'
      result.push(alpha)
    }
    return result
  }
}


const addToMultiDigitNumbers = (num, arr) => {
  let result = []
  const numbers = '1234567890'
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toString().length === 1) {
      result = arr[1]
    } else {
      result = arr[i] + num
    }
  }
  return result
}


const Faqtory = () => {
  let obj = {
    length: 0,
    'questions': [],

    addQuestion: function (text) {
      obj.questions.push(text)
    },

    answerQuestion: function () {
    }
  }
  return obj
}


// Our code goes below... DO NOT TOUCH.


if (typeof makeParagraph === 'undefined') {
  makeParagraph = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof cipher === 'undefined') {
  cipher = undefined;
}

if (typeof womensAverageSalary === 'undefined') {
  womensAverageSalary = undefined;
}

if (typeof notMarried === 'undefined') {
  notMarried = undefined;
}

if (typeof addToMultiDigitNumbers === 'undefined') {
  addToMultiDigitNumbers = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}


module.exports = {
  makeParagraph,
  totalScore,
  cipher,
  womensAverageSalary,
  notMarried,
  addToMultiDigitNumbers,
  Faqtory,
}
