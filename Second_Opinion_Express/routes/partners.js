const express = require('express')
const router = express.Router()
const db = require('../db')
const utils = require('../utils')

router.get('/',async (request, response) => {
    try {

        const statement = `select * from partners`

        const [partners] = await db.execute(statement)
        if (partners.length == 0) {
          response.send(utils.createError('No partner Found'))
        } else {
          response.send(
            utils.createSuccess(partners)
          )
        }
      } catch (ex) {
        response.send(utils.createError(ex))
      }
})


module.exports = router