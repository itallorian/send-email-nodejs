import express from "express";
import CommunicationService from "../services/communication.service.js";

const endpoints = express.Router();

endpoints
    .post("/communication/email", CommunicationService.SendEmail);

export default endpoints; 