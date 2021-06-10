let age = Math.floor(Math.random() * 30 + 1)
let guess = 0

do {
  guess = parseInt(prompt('guess my age!'))
  if (guess > age) {
    alert('Oops, too high')
  } else if (guess < age) {
    alert('Oops, too low')
  } else {
    alert('You got it!')
    let ans = prompt('Wish to play agin? (y/n)')
    if (ans === 'y') {
      age = Math.floor(Math.random() * 30 + 1)
      guess = 0
    }
  }
} while (age != guess)
