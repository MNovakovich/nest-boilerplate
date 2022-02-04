import { CaretakerController } from '../caretaker.controller';
import { CaretakerService } from '../caretaker.service';
import { Test } from '@nestjs/testing';
import { caretakerProviders } from '../caretaker.providers';
import * as request from 'supertest';
import { CaretakerModule } from '../caretaker.module';
import { INestApplication } from '@nestjs/common';

const dummyData = {
  count: 2,
  rows: [
    {
      id: 1,
      caretakerTypeId: 1,
      email: 'safet@mail.ba',
      password: '1111111',
      firstName: 'Safet',
      lastName: 'Isovic',
      address: 'Srpskih junaka 10, Novi Sad',
      phone: '063 521216',
    },
  ],
};

class ApiServiceMock {
  findAll() {
    return [];
  }
}

const app = 'http://localhost:5000/api/v1';
describe('Caretaker', () => {
  //let app: INestApplication;§

  let caretakerService = {
    findAll: () => {
      return dummyData;
    },
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [CaretakerModule],
    })
      .overrideProvider(CaretakerService)
      .useValue(caretakerService)
      .compile();

    // app = moduleRef.createNestApplication();
    // console.log(app.getHttpServer(), 'appppp');
    //  await app.init();
  });
  it(`/Test-app`, () => {
    return request(app)
      .get('/caretaker')
      .expect(200)
      .expect(caretakerService.findAll());
  });

  //   it(`/GET All Caretakers`, () => {
  //     return request('http://localhost:5000/api/v1')
  //       .get('/caretaker')
  //       .expect(200)
  //       .expect({
  //         data: caretakerService.findAll(),
  //       });
  //   });

  afterAll(async () => {
    //  await app.close();
  });
});
