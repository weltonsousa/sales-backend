import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('rowid')
  id: string;
  @Column({ type: 'varchar', nullable: false, length: 100, unique: true })
  name: string;
  @Column({ type: 'varchar', nullable: false, length: 100, unique: true })
  email: string;
  @Column({ type: 'varchar', nullable: false, length: 100 })
  password: string;
  @Column({ type: 'varchar', nullable: false, length: 20, unique: true })
  cpf: string;
  @Column({ type: 'varchar', nullable: true, length: 20 })
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}
