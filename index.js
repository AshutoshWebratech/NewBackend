require('dotenv').config()

const express = require('express')
const app = express()
const port = 5000

const user={
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("Hello Twitter")
})

app.get('/login',(req,res)=>{
    res.send('<h1> please login at chai aur code</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2> Hello code<h2/>')
})

app.get('/user',(req,res)=>{
    res.json(user)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
