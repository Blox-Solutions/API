import express from 'express';
import bodyParser from 'body-parser';
import statsRoutes from './routes/stats.js';

const app = express();
const PORT = 5005;

app.use(bodyParser.json());
app.listen(PORT,() => console.log(`Server is running on: http://localhost:${PORT}`));

app.get('/',(req,res) => {res.send("Hello!")});
app.use('/stats', statsRoutes);