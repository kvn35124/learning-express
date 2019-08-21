const express = require('express');
let app = express();
const path = require('path');
const fs = require('fs');

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// app.get('/css/styles.css', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/css/styles.css'))
// });

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
});

app.use(express.static(path.join(__dirname, '../public')));

app.post('/formsubmissions', (req, res) => {
    fs.readFile(path.join(__dirname, '/formssub.json'), (err, data) => {
        let submissions = JSON.parse(data);
        submissions.push({
            chirp: req.body.chirp
        });
        fs.writeFile(path.join(__dirname, '/formssub.json'), JSON.stringify(submissions), (err) => {
            if (err) console.log(err);
        })
    })
    
    res.send('SENT!');
});


app.listen(3000);