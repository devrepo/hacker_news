import express from 'express';
import fs from 'fs';
import path from 'path';

import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from 'react-router-dom';
import sslRedirect from "heroku-ssl-redirect";
import App from "../src/app/app";

let PORT = process.env.PORT;
if (PORT == null || PORT == "") {
  PORT = 8000;
}


const app = express();

app.use("^/$", (req, res, next) => {
  
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }
    const context = {};
    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </StaticRouter>)
    if (context.url) {
      return res.status(301, contect.url);
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      )
    );
  });
});

app.use(express.static(path.resolve(__dirname, '..', 'build')))
app.use(sslRedirect());
app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});