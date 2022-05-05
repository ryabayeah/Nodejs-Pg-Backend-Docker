const express = require('express');
const app = express();
const config = require('./config');
const PORT = process.env.PORT || config.serverPort;
const defaultRouter = require('./routes/defaultRouter');
const userRouter = require('./routes/userRouter');
const authRouter  = require('./routes/authRouter');
const storageRouter = require('./routes/storageRouter')
const corsMiddleware = require('./middleware/corsMiddleware');
const fileUpload = require("express-fileupload");
const db = require('./models/database')

app.use(fileUpload({}));
app.use(corsMiddleware);
app.use(express.json());

app.use(express.static('files'));

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/storage", storageRouter);

app.use('*', defaultRouter)


const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log('Server started on port', PORT);
        })
    } catch (e) {
        console.log(e);
    }
}


db.sequelize.sync();

start()
