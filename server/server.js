const express = require('express')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: './config/config.env' })

const app = express()

const PORT = process.env.PORT || 3030

app.use('/build', express.static(path.resolve(__dirname, '/build/bundle.js')));

app.get('/', (req, res) => {  
  res.sendFile(path.resolve(__dirname, '/index.html'));
});

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))