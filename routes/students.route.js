const {StudentsController} = require("../controllers/students.controller")
const {Router} = require('express')

const router = Router()

router.get('/students', StudentsController.getStudents);
router.post('/students', StudentsController.postStudents);
router.delete('/students/:id', StudentsController.deleteStudentsId);
router.patch('/students/:id', StudentsController.pathStudentsId);


module.exports = router;