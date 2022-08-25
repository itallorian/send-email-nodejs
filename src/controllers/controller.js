import express from "express";
import CommunicationController from "../controllers/communication.controller.js";

const endpoints = (startup) => {
    startup.route("/").get((req, res) => { res.status(403).send() });
    startup.use(
        express.json(),
        CommunicationController
    );
}

export default endpoints;