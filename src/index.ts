import { app } from "./app"; 

import { Request, Response } from "express";

const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
  });

  
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });