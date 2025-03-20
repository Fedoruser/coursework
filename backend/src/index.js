import express from 'express'

import path from 'path'

import { fileURLToPath } from 'url'

// import cors from 'cors'
// import { log } from 'util'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const app = express()
 
 const port = 3000 

//  app.use(cors())

 app.use(express.json())

 app.listen(port,()=>{

    console.log(`Сервер запущен на https://localhost:${port} `);
    

 })