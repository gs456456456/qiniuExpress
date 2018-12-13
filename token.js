const qiniu = require('qiniu') 
const accessKey = '1111';
const secretKey = '1111';
const bucket = 'images'
const generateToken = () =>{
    var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    var options = {
        scope: bucket,
    };
    var putPolicy = new qiniu.rs.PutPolicy(options);
    var uploadToken = putPolicy.uploadToken(mac);
    return uploadToken
}

module.exports={
    generateToken:generateToken
}    