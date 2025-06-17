import { Injectable } from '@nestjs/common';
import { CityEntity } from './entities/city.entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepository: Repository<CityEntity>,
  ) { }

  getCities(): string[] {
    return ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
  }

  getCityById(stateId: number): Promise<CityEntity[]> {
    return this.cityRepository.find({
      where: {
        stateId: stateId,
      },
    });
  }
}
