const { Router } = require('express');
const {getCakes,  getCakeByID, postcake} = require('../controllers/cakesControler');
const { authMiddleware } = require('../middlewares/authMiddleware');
const cakeRouter = Router();

//Cakes routes
cakeRouter.get('/',  getCakes);
cakeRouter.get('/:cakeID', getCakeByID);

//Route level Middleware
cakeRouter.use(authMiddleware);

cakeRouter.post('/', postcake);


module.exports = cakeRouter