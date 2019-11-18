const multer = require('multer');
const path = require('path');

const diskStorageToUploads = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const saveToUploads = multer({ storage: diskStorageToUploads });

module.exports = {
  saveToUploads: saveToUploads.single('file'),
};
