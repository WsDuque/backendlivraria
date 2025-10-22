import express from "express"
import { listarUsuarios } from "../controllers/usuario.controller.js"
import { criarUsurario } from "../controllers/usuario.controller.js"
import { obterUsuario } from "../controllers/usuario.controller.js"
import { atualizarUsuario } from "../controllers/usuario.controller.js"
import { deletarUsuario } from "../controllers/usuario.controller.js"
const router = express.Router()

router.get("/", listarUsuarios);
router.post("/", criarUsurario);
router.get("/:id", obterUsuario);
router.put("/:id", atualizarUsuario);
router.delete("/:id", deletarUsuario);

export default router;