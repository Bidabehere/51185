import { Router } from 'express';

const router = Router();

const pets = [];

router.get('/:pet', (req, res) => {
    const pet = req.pet;
    res.send({ pet })
})

router.get('/', (req, res) => {
    res.send({ pets })
})

router.post('/', (req, res) => {

    const { name, specie } = req.body;
    const petregex = /^[a-zA-Z\s]+$/
    const testValue = petregex.test(name)
    if (!testValue) {
        return res.status(404).send({ error: 'El nombre de la mascota debe ser solo texto.' })
    }
    const newPet = { name, specie };
    pets.push(newPet)
    res.send({ status: "success", pet: newPet });

})

router.put('/:pet', (req, res) => {
    const pet = req.pet;
    pet.adopted = true;
    res.send({ status: "success", pet: pet });

})

router.param('pet', async (req, res, next, petName) => {

    const petregex = /^[a-zA-Z\s]+$/

    const testValue = petregex.test(petName)

    if (!testValue) {
        return res.status(404).send({ error: 'El nombre de la mascota debe ser solo texto.' })
    }
    const pet = pets.find(p => p.name === petName)

    if (!pet) {
        return res.status(404).send({ error: 'La mascota no existe' })
    }
    req.pet = pet;

    next()
})


export default router;