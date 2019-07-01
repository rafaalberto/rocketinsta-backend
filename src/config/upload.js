const multer = require('multer')
const path = require('path')
const multerS3 = require('multer-s3')
const aws = require('aws-sdk')

const storagesTypes = {
    local: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: function(req, file, callback) {
            callback(null, file.originalname)
        }
    }),
    s3: multerS3({
        s3: new aws.S3(),
        bucket: 'rocketinsta-upload',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read'
    })
}

module.exports = {
    storage: storagesTypes['s3'] 
}