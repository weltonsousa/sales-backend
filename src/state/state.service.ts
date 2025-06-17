import { InjectRepository } from '@nestjs/typeorm';
import { StateEntity } from './entities/state.entities';
import { Repository } from 'typeorm/repository/Repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(StateEntity)
    private readonly stateRepository: Repository<StateEntity>,
  ) { }

  async findAll(): Promise<StateEntity[]> {
    return this.stateRepository.find();
  }
}
