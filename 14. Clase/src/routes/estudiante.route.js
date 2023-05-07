import { Router } from 'express'
import estudianteModel from '../models/estudiante.model.js';


const router = Router();

const estudiantes = [{
    "nombre": "Steffen",
    "apellido": "Terzo",
    "edad": 36,
    "dni":"0115691240",
    "curso":"Programación Backend",
    "nota":9
  }, {
    "nombre": "Jorgan",
    "apellido": "Matthis",
    "edad": 27,
    "dni":"029358120",
    "curso":"Programación Frontend",
    "nota":6
  }, {
    "nombre": "Haley",
    "apellido": "Proback",
    "edad": 34,
    "dni":"51241268",
    "curso":"Diseño UX/UI",
    "nota":7
  }, {
    "nombre": "Michelina",
    "apellido": "Beaglehole",
    "edad": 34,
    "dni":"24614567",
    "curso":"Diseño UX/UI",
    "nota":6
  }, {
    "nombre": "Jeralee",
    "apellido": "Postans",
    "edad": 26,
    "dni":"97212450",
    "curso":"Programación Frontend",
    "nota":6
  }, {
    "nombre": "Jordain",
    "apellido": "Kerner",
    "edad": 35,
    "dni":"41262234",
    "curso":"Programación Backend",
    "nota":5
  }, {
    "nombre": "Harriett",
    "apellido": "Skeene",
    "edad": 33,
    "dni":"21245129",
    "curso":"Programación Backend",
    "nota":10
  }, {
    "nombre": "Andie",
    "apellido": "McIlrath",
    "edad": 20,
    "dni":"59127389",
    "curso":"Programación Frontend",
    "nota":9
  }, {
    "nombre": "Sapphira",
    "apellido": "Arnholtz",
    "edad": 17,
    "dni":"03128893",
    "curso":"Programación Backend",
    "nota":5
  }, {
    "nombre": "Terra",
    "apellido": "Wadsworth",
    "edad": 31,
    "dni":"002213850",
    "curso":"Diseño UX/UI",
    "nota":10
  }]

router.get('/insertion', async (req,res)=>{

    const result = await estudianteModel.insertMany(estudiantes)

    res.send({result})
})

router.get('/', async (req,res)=>{

    const result = await estudianteModel.find(); 
    res.send({Estudiantes:result});

})

router.post('/', async (req,res)=>{

    const {nombre, apellido, edad,dni,curso, nota} = req.body;

    if(!nombre || !apellido || !edad || !dni || !curso || !nota){
        return res.status(400).send({error: 'Los valores estan imcompletos.'})
    }

    const estudiante = {
        nombre,
        apellido,
        edad,
        dni,
        curso,
        nota
    }
    try {
      
      const result = await estudianteModel.create(estudiante)
      res.send({result})

    } catch (error) {

      res.send({error})
      
    }

})

router.put('/:sid', async (req,res)=>{
    const id = req.params.sid;
    
    const UpdateEstudiante = req.body;

    const carrito = await estudianteModel.find({_id:id}); 

   
    const result = await estudianteModel.updateOne({_id:id},{$set:UpdateEstudiante});
   
    res.send(result)

})

router.delete('/:sid', async (req,res)=>{
    const id = req.params.sid;

    const result = await estudianteModel.deleteOne({_id:id})

    res.send({result})
})

export default router;