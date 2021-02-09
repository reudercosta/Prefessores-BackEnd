import express from 'express';
import routes from './routes';
import cors from 'cors';


const app = express();

app.use(express.json());
app.use(routes);
app.use(cors());

//localhost:3333/users

app.listen(3333); //ouvir uma requisição

//SELECT * FROM users
//knex('users').select('*')

