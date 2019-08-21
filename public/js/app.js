console.log('JS file works!')

fetch('/formsubmissions')
.then(res => res.json())
.then(submissions => console.log(submissions));
