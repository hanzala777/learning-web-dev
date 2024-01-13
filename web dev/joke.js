var oneLinerJoke = require('one-liner-joke');

var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke)

var getRandomJokeWithTag = oneLinerJoke.getRandomJokeWithTag('stupid');
console.log(getRandomJokeWithTag)

var getRandomJoke = oneLinerJoke.getRandomJoke({
    'exclude_tags': ['dirty', 'racist', 'marriage']
  });
console.log(getRandomJoke)

var getRandomJoke = oneLinerJoke.getRandomJokeWithTag('intelligence', {
    'exclude_tags': ['dirty', 'racist', 'marriage']
});
console.log(getRandomJokeWithTag)
