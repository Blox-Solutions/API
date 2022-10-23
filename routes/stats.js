import express from 'express';
import stats from '../stats.json' assert {type: 'json'};

const router = express.Router();

router.get('/:cpudata', (req,res) => {
    res.send(stats.cpudata);
});

router.get('/:memdata', (req,res) => {
    res.send(stats);
});

router.get('/:iodata', (req,res) => {
    res.send(stats.iodata);
});

router.get('/:fsdata', (req,res) => {
    res.send(stats.fsdata);
});

export default router; 