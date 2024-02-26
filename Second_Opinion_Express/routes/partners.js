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

router.post('/add', async (request, response) => {
    try {
        const { address, contact_email, logo, name } = request.body;
        const logoBuffer = Buffer.from(logo, 'base64');
        const statement = `INSERT INTO partners (address, contact_email, logo, name) VALUES (?, ?, ?, ?)`;
        await db.execute(statement, [address, contact_email, logoBuffer, name]);
        response.send(utils.createSuccess('Partner added successfully'));
    } catch (ex) {
        // Send error response
        response.send(utils.createError(ex.message));
    }
})

router.delete('/delete/:id', async (request, response) => {
    try {
        const { id } = request.params
        const statement = `DELETE FROM partners WHERE id = ?`
        const cnt = await db.execute(statement, [id])
        if(cnt==0)
        response.send(utils.createError('No partner found'))
        else
        response.send(utils.createSuccess('Partner deleted successfully'))
    } catch (ex) {
        response.send(utils.createError(ex))
    }
})


module.exports = router