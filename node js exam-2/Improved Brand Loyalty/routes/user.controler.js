const express = require('express');
const User = require('../models/user.schema');
const userRoute = express.Router();



userRoute.post('/signup', async (req, res) => {
    const { name, email } = req.body;
    const isExist = await User.findOne({ email: email})
    if (isExist) {
        return res.status(409).send({ message: 'Email already registered' });
    }
    const user = await User.create({ name, email, loyaltyPoints: 0, preferences: { categories: [] } }, { new: true });
    res.send({ message: 'Customer registered successfully', user });
})


userRoute.get('/recommendations/:email', async (req, res) => {
    const customer = await User.findOne({ email });
    if (!customer) {
        return res.status(404).send({ message: 'Customer not found' });
    }
    const recommendations = customer.preferences.categories.map(category => `Recommendation for ${category}`);
    res.send({ recommendations });
});

userRoute.get('/loyaltyPoints/:email', async (req, res) => {
    const customer = await Customer.findOne({ email });
  
    if (!customer) {
      return res.status(404).send({ message: 'Customer not found' });
    }
  
    res.send({
      message: `Customer has ${customer.loyaltyPoints} loyalty points`,
      loyaltyPoints: customer.loyaltyPoints
    });
  });
  

userRoute.post('/addPoints', async (req, res) => {
    const { email, points } = req.body;

    const customer = await User.findOne({ email });
    if (!customer) {
        return res.status(404).send({ message: 'Customer not found' });
    }

    customer.loyaltyPoints += points;
    await customer.save();

    res.send({ message: 'Points added successfully', loyaltyPoints: customer.loyaltyPoints })
});
module.exports = userRoute