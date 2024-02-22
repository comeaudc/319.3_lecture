import express from 'express'
import dotenv from 'dotenv'
import gradeRouter from './routes/grades.mjs'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

//Middleware
app.use(express.json())

//Routes
app.get('/', (req, res)=>{
    res.send(`We are RTT-125, and we the best`)
})
app.use('/grades', gradeRouter)

// Global error handling
app.use((err, _req, res, next) => {
    res.status(500).send("Seems like we messed up somewhere...");
  });
  
app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
})