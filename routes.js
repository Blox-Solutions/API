import express from 'express';
import fs from 'fs';

const router = express.Router();
var jsondata = fs.readFileSync('stats.json');
var data = JSON.parse(jsondata);

router.get('/', (req,res) => {
    res.send(data);
    console.log(data);
});

export default router; 