const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')
describe('ONG', () => {
    //Anets de executar os testes, criar o banco de teste, executando as migrations
    beforeEach(async ()=>{
        await connection.migrate.rollback();//Zera o banco antes de criar o teste
        await connection.migrate.latest();
    });

    afterAll(async() => {
        await connection.destroy();
    });

     it('Should be able to create a new ONG',async () => {
        const response = await request(app).post('/ongs')
        .send({
            name: "APAD 2",
            email: "contato@apa.com",
            whatsapp: "1000000047",	
            city: "Rio do Sul",
            uf: "SC"
        });
       expect(response.body).toHaveProperty('id');
       expect(response.body.id).toHaveLength(8);
     });
});