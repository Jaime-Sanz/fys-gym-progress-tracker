//Project Pieces

import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { sessionMiddleware } from './config/session.js';
import passport from './config/passport.js';
import routes from './routes/routes.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(sessionMiddleware);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded( { extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', routes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.stack });
});

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
})