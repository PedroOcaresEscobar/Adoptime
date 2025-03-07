import supertest from "supertest";
import { expect } from "chai";

const requester = supertest("http://localhost:8080");

describe("Testing de la App Adoptame", () => {
  describe("Testeamos el Router de Adopciones", () => {
    it("Endpoint GET /api/adoptions debe traer todas las adopciones", async () => {
      const { status, _body } = await requester.get("/api/adoptions");

      expect(status).to.equal(200);
      expect(_body.payload).to.be.an("array"); 
    });

    it("Traemos una adopcion por ID", async () => {
      let idAdopcion = "67caaad3f450922b5b7fbf0d";
    
      const { status, _body } = await requester.get(`/api/adoptions/${idAdopcion}`);
      expect(status).to.equal(200);
    
      expect(_body.payload).to.have.property("_id").that.equals(idAdopcion); 
    });
    it("Crearemos una adopcion", async () => {
      let uid = "67a2a909350de8325d4ec6dc";
      let pid = "67aa8db457a7a86100e40af0";
    
      const { status } = await requester.post(`/api/adoptions/${uid}/${pid}`);
      expect(status).to.equal(200);
    });

  });

});