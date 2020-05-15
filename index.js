#!/bin/bash

const fs = require('fs');
const http = require('http');
const express = require('express');

const app = express();
app.use(express.static(__dirname));

https.createServer(app)
  .listen(3000);

console.log(`http://127.0.0.1:3000`);
