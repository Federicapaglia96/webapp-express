import express from "express";
import moviesController from "../controllers/moviesControllers.js"
const router=express.Router()
//imposto la prima rotta
router.get ("/",moviesController.index);
router.get ("/:id", moviesController.show)

export default router;