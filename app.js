const express = require('express');
const cors=require('cors');
const AWS = require('aws-sdk');
const app = express();


  const corsOptions = {
  origin: '*', //to allow forntend and backend on same computer
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors())

AWS.config.update({
  region: 'us-east-1',
  accessKeyId: process.env['accessKeyId'],
  secretAccessKey: process.env['secretAccessKey'],
});
const s3 = new AWS.S3();
const params = { Bucket: process.env['bucket'], Key: process.env['object'] };

const s3ObjectUrl = s3.getSignedUrl('getObject', params);
console.log(s3ObjectUrl);

// Route to get all books
app.get('/api/s3image', (req, res) => {
  res.json(s3ObjectUrl);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
