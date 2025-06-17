import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('state')
export class StateEntity {
  @PrimaryGeneratedColumn('rowid')
  id: string;
  @Column({ type: 'varchar', nullable: false, length: 100, unique: true })
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
