require('dotenv').config()
const mongoose = require('./connection')
const Fruit = require('./fruit')


mongoose.connection.on('open', () => {

    // define data we want to put in the database
    const startingFruits =  [
        { name: "Orange", color: "orange", readyToEat: false },
        { name: "Grape", color: "purple", readyToEat: false },
        { name: "Banana", color: "orange", readyToEat: false },
        { name: "Strawberry", color: "red", readyToEat: false },
        { name: "Coconut", color: "brown", readyToEat: true },
        { name: "Cherry", color: "red", readyToEat: true },
      ]
      
      // Delete all fruits
      Fruit.deleteMany({}, (err, data) => {
        // Create new fruits once old fruits are deleted
        Fruit.create(startingFruits, (err, data) =>{

            console.log(data)
            
        })

      })
      
})
