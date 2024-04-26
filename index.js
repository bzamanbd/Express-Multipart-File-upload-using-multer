const express = require('express')
const multer = require('multer')
const app = express()
const port = 4000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})


const storage = multer.diskStorage({
  destination: function (req, file, callBack) {
    callBack(null, './uploads')
  },
  filename: function (req, file, callBack) {
    callBack(null, file.originalname)
  }
})

// const upload = multer({ storage: storage }).single('myFile')
const upload = multer({ storage: storage }).array('myFile')

/// post request///

app.post('/fileUpload', (req,res) => { 
    upload(req, res, (error) => { 
        if (error) {
            res.end('some error, file upload failed')
        } else {
            res.end('file upload')
        }
    } )
})