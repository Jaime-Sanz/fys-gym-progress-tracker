import express from 'express';
import { getHomePage } from '../controllers/routeControllers.js';

const router = express.Router();


router.get('/', getHomePage);
/*router.get('/login', getLoginPage);

router.post('/register', postRegister);
router.post('/login', postLogin);
router.post('/logout', postLogout);*/

export default router;