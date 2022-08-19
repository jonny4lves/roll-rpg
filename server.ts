import {PrismaClient} from '@prisma/client'
import express from 'express'
import { routes } from './src/routes/index.route';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3000, ()=>{
    console.log('Server is running in port 3000');
});


