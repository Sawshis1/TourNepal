const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');

const app = express('');

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5000"],
    methods: ["GET", "POST"],
    credentials: true,
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
    key: "userID",
    secret: "confidential",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 *24,
    },
}))

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'tournepal',
});

app.post('/review', (req, res)=> {

    const Name = req.body.Name
    const Email = req.body.Email
    const Phone = req.body.Phone
    const Message = req.body.Message 


    db.query("INSERT INTO reviews (Name, Email, Phone, Message) VALUES (?,?,?,?)", [Name, Email, Phone, Message], 
    (err, result) => {
        console.log(err);
    })
})

app.post('/register',(req, res) => {

    const CustomerName = req.body.CustomerName
    const CustomerEmail = req.body.CustomerEmail
    const CustomerCountry = req.body.CustomerCountry
    const CustomerPhone = req.body.CustomerPhone
    const CustomerPassword = req.body.CustomerPassword
    const CustomerID = req.body.CustomerID

      bcrypt.hash(CustomerPassword,saltRounds, (err, hash) => {

             if (err){
                console.log(err);
             }

            db.query('INSERT INTO Customer( CustomerName, CustomerEmail, CustomerCountry, CustomerPhone, CustomerPassword) VALUES (?,?,?,?,?)', 
            [ CustomerName, CustomerEmail, CustomerCountry, CustomerPhone, hash],
                (err, result) => {
                    console.log(err)
                } 
            ) ;
        })
});

const verifyJWT = (req, res, next) => {
    const token = req.headers['x-access-token']

    if (!token) {
        res.send("Token Required!")
    } else {
        jwt.verify(token, "jwtSecret", (err, decoded) => {
            if(err){
                res.json({auth: false, message: "Authentication failed!"})
            } else {
                req.userId = decoded.CustomerID;
            }
        })
    }
}

app.get('/isUserAuth', verifyJWT, (req, res)=> {
    res.send('Authenticated!')

})

    app.get('/login', (req, res) => {
        if (req.session.user){
            res.send({loggedIn: true, user: req.session.user})
        } else {
           res.send({loggedIn: false})
        }
    })

    app.post('/login', (req, res) => {
        const CustomerName = req.body.CustomerName;
        const CustomerPassword = req.body.CustomerPassword;


        db.query(
            "SELECT * FROM Customer WHERE CustomerName = ?",
            CustomerName,
            (err, result) => {
                if (err){
                    res.send({err: err});
                }

                if (result.length > 0) {
                    bcrypt.compare(CustomerPassword, result[0].CustomerPassword, (error, response) => {
                        if(response){
                            const id = result[0].CustomerID
                            const token = jwt.sign({id}, 'jwtSecret', {
                                expiresIn: 300,
                            })
                            req.session.user = result;


                            res.json({auth: true, token: token, result: result})
                        } else {
                            res.json({auth: false,
                                     message: 'Wrong username/password combination'})
                        }
                    })
                } else{
                    res.json({auth: false, message: 'User does not exist'})
                }
            }
        )
    })



app.listen(5000, ()=> {
    console.log('running server');
});