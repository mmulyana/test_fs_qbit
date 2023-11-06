'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = require('./data/properties.json')
    const properties = data.map((prev) => {
      return {
        ...prev,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    })

    await queryInterface.bulkInsert('Properties', properties, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Properties', null, {})
  },
}
