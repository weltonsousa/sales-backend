import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('addresse')
export class AddressEntity {
  @PrimaryGeneratedColumn('rowid')
  id: string;
  @Column({ type: 'number', nullable: false, length: 100, unique: true })
  userId: number;
  @Column({ type: 'varchar', nullable: false, length: 100, unique: true })
  complement: string;
  @Column({ type: 'varchar', nullable: false, length: 100 })
  numberAdress: string;
  @Column({ type: 'varchar', nullable: false, length: 20 })
  cep: string;
  @Column({ type: 'varchar', nullable: true, length: 20 })
  cityId: string;
  createdAt: Date;
  updatedAt: Date;
}
