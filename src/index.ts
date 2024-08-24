import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';


mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    const port: number = 3001;

    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`Server running on port http://localhost:${port}`);
    });
  })
  .catch(() => { console.log('erro'); });


