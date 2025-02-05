
import MockingService from "../services/mocking.js";
const getMockingPets = async (req, res) =>  {
    const mascotas = await MockingService.generateMockingPets(50);
    res.send({status: "success", payload: mascotas});
};

const getMockingUsers = async (req, res) => {
    const usuarios = await MockingService.generateMockingUsers(50);
    res.send({status:"success", payload: usuarios});
};
const generateData = async (req, res) => {
    const { users, pets } = req.body;
    const data = await MockingService.generateData(users, pets);
    res.send({ status: "success", payload: data });
}

export default {
    getMockingPets,
    getMockingUsers,
    generateData
}