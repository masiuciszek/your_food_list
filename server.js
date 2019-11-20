// @ts-nocheck
const express = require('express');

const app = express();
const connectDb = require('./db/connectDb');

const port = process.env.PORT || 5000;
app.use(express.json());

connectDb();

app.use('/users', require('./routes/users'));
app.use('/dishes', require('./routes/dishes'));
app.use('/auth', require('./routes/auth'));

const multer = require('multer');

const upload = multer({
  dest: 'images',
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error('please upload a word document'));
    }
    cb(undefined, true);
  },
});

app.post('/upload', upload.single('upload'), (req, res) => {
  res.send();
});

app.listen(port, () => console.log(`server is running on port ${port}`));
