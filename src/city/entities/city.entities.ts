import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('city')
export class CityEntity {
  @PrimaryGeneratedColumn('rowid')
  id: string;
  @Column({ type: 'number', nullable: false, length: 100, unique: true })
  stateId: number;
  @Column({ type: 'varchar', nullable: false, length: 100, unique: true })
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
