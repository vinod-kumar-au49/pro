const CakeModel = require('../models/cakeModel');

const getCakes = async (request, response) => {
  try {
    const cakes = await CakeModel.find()
    response.send({ status: 'success', cakes });
  } catch (err) {
    response.status(500).send({ status: 'error', msg: 'error fetching cakes' });
  }
}

const getCakeByID = async (request, response) => {
  const { cakeID } = request.params

  try {
    const cake = await CakeModel.findById(cakeID)
    if (!cake) {
      response.status(404).send({ status: 'error', msg: 'cake not found' });
    } else {
      response.send({ status: 'success', cake: cake });
    }
  } catch (err) {
    console.log("Error fetching cakes from DB")
    response.status(500).send({ status: 'error', msg: 'Error fetching cakes from DB' });
  }
}

const postcake = async (request, response) => {
  const cakeData = request.body

  try {

    const resultcake = await CakeModel.create(cakeData);
    console.log(resultcake)
    response.status(201).send({ status: 'success', cake: resultcake });
  } catch (err) {
    console.log(err)
    response.status(500).send({ status: 'error', msg: err.errors });
  }
}

module.exports = { getCakes, getCakeByID, postcake }