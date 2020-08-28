function bmiCalculator(weight, height) {
  var bmi = weight / Math.pow(height, 2); //This is the formula for bmi which is still same as weight/(height*height)
  return Math.round(bmi); //This rounds the bmi to the nearest integer
}
