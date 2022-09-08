import express, { Request, Response, Application } from 'express';

function createApp(): Application {
  const app: Application = express();
  const PORT = process.env.PORT || 8000;
  app.get("/", (req: Request, res: Response): void => {
    res.send("Hello Typescript with Node.js!")
  });
  app.use(express.json());
  app.listen(PORT);
  return app
}

export { createApp }
