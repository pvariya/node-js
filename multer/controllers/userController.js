const multer = require("multer")

const Storage = multer.diskStorage({
    destination: "uploads",
    filename: (res, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})

const uploads = multer({
    storage: Storage
})

module.exports = uploads