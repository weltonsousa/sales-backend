import { Controller, Get } from '@nestjs/common';
import { CityEntity } from './entities/city.entities';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) { }

  @Get('/stateId')
  getAllCitiesById(): Promise<CityEntity[]> {
    return this.cityService.getCityById(1); // Example stateId, replace with actual logic
  }
}
