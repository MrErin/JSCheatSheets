// This example returns a random number between the specified values. The returned value is no lower than (and may possibly equal) min, and is less than (and not equal) max.

function getRandomArbitrary(min, max) {
	return parseInt(Math.random() * (max - min) + min)
}