import express from 'express';
import connect from './schemas/index.js';
import userRouter from './routes/user.router.js';

const app = express();
const PORT = 3000;
connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('hello World')
})

app.use('/users', userRouter)

app.listen(PORT, () => {
    console.log(PORT, 'server is Running')
})