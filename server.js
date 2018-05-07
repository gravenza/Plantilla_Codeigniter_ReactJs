const express = require("express");
const app = express();
const path = require('path');

//settings
app.set('port', process.env.PORT || 8080);
app.set('public', path.join(__dirname, 'public'));
//app.set('view engine','ejs');

//midldlewares
app.use((req, res, next) => {
    console.log(`${req.url}-${req.method}`);
    next();
});

app.use(express.static(__dirname + "/public"));
app.listen(app.get('port'), () => {
    console.log("servidor por http://localhost:8080 ");
});

/*
const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
app.listen(8080,function(){
    console.log("servidor por http://localhost:8080 ");
});
*/