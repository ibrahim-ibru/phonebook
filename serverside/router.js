import { Router } from "express";

import * as ctrl from "../serverside/controller/phone.controller.js"


const router=Router()

router.route("/add").post(ctrl.addPhone)
router.route("/getdata").get(ctrl.getData)
router.route("/delete/:_id").delete(ctrl.deleteData)
router.route("/update/:_id").put(ctrl.updateData)

export default router