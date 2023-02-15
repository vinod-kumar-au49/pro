const OrderModel = require('../models/orderModel');

const getoders = async (request, response) => {
  try {
    const orders = await OrderModel.find()
    response.send({ status: 'success', orders });
  } catch (err) {
    response.status(500).send({ status: 'error', msg: 'error fetching orders' });
  }
}

const postorder = async (request, response) => {
  const orderData = request.body

  try {

    const resultOrder = await OrderModel.create(orderData);
    console.log(resultOrder)
    response.status(201).send({ status: 'success', order: resultOrder });
  } catch (err) {
    console.log(err)
    response.status(500).send({ status: 'error', msg: err.errors });
  }
}

module.exports = { getoders, postorder }