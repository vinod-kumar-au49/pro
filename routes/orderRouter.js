const { Router } = require('express');
const { getoders, postorder} = require('../controllers/orderController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const orderRouter = Router();

//Orders routes
orderRouter.get('/', getoders);
orderRouter.post('/', postorder);

module.exports = orderRouter