const express = require("express");
const path = require("path");
const fs = require("fs");

const server = new express();

server.get("*", (req, res) => {
  const context = { url: req.url };
  createApp(context).then(app => {
    renderer.renderToString(app, (err, html) => {
      if (err) {
        if (err.code) {
          res.status(404).end("Internal Server Error");
        }
      } else {
        res.end(html);
      }
    });
  });
});
