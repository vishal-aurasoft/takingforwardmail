import express  from "express";
import { sendMail } from "../controller/mailer.js";
const router=express.Router();
router.post("/sendmail",sendMail);
export default router