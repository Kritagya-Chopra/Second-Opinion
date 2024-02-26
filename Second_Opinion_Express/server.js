const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

// create new react app
const app = express()
app.use(cors())
app.use(morgan('combined'))
app.use(express.json())

// configure protected routes // future scope
app.use((request, response, next) => {
 next();
})

// routing
const partnerRouter = require('./routes/partners')

app.use('/partners', partnerRouter)


app.listen(4000, () => {
  console.log('server started on port 4000')
})
