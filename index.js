'use strict';

const AWS = require('aws-sdk');
const S3 = new AWS.S3({endpoint: 'http://localhost:4572', s3ForcePathStyle: true});


exports.handler = (event, context, callback) => {
    console.log(`EVENT is ${event}`);
    uploads3().then(() => {
        callback()
    });
};

const uploads3 = () => {
    return new Promise((resolve, reject) => {
        let param = {
            Bucket: "test-bucket",
            Key: "test2.txt",
            Body: "fugafuga"
        };
        console.log(param);

        S3.putObject(param, (err, data) => {
            if (err) {
                console.log(err, err.stack);
            } else {
                console.log(data);
            }
            resolve();
        });
    });
};