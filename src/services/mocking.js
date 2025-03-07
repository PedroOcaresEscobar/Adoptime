import {faker} from "@faker-js/faker";
import {createHash} from "../utils/index.js"
import User from "../dao/models/User.js";
import Pet from "../dao/models/Pet.js";
class MockingService {
    static async generateMockingUsers(num) {
        const usuarios = [];
        for (let i = 0; i< num;i++){
            usuarios.push({
                first_name:faker.person.firstName(),
                last_name: faker.person.lastName(),
                email: faker.internet.email(),
                password: await createHash("coder123"),
                role: faker.helpers.arrayElement(["user", "admin"]),
                pets: []
            })
        }
        return usuarios;
    }

    static async generateMockingPets(num){
        const mascotas = [];
        for (let i = 0; i<num; i++){
            mascotas.push({
                name: faker.animal.petName(),
                specie: faker.animal.cat(),
                adopted: false,
                birthDate: faker.date.past(),
                image: "https://via.placeholder.com/150"
            })
        }
        return mascotas;
    }
    static async generateData(usersCount, petsCount) {
        const users = await this.generateMockingUsers(usersCount);
        const pets = await this.generateMockingPets(petsCount);

        const insertedUsers = await User.insertMany(users);
        const insertedPets = await Pet.insertMany(pets);

        return { users: insertedUsers, pets: insertedPets };
    }
}
export default MockingService;