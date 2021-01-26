"use strict"
import { Application } from 'express';
// import socketio from "socket.io";
import http from 'http';
import express = require('express');
import cors from 'cors';
import router from './src/router';
import bodyParser from 'body-parser'


const app: Application = express();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app)
// const io = socketio(server);



app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);


server.listen(PORT,
  // tslint:disable-next-line:no-console
  () => console.log(`Server has started on port ${PORT}`))