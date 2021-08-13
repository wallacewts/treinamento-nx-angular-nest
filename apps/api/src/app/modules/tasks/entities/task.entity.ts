import { ITask, Status } from "@nt-al/api-interfaces";
import { Model } from "sequelize";
import { Column, DataType, Table } from "sequelize-typescript";

@Table({
  modelName: 'tasks',
  timestamps: true,
  paranoid: true,
  underscored: true
})
  @Column
  export class Task extends Model  implements ITask {
  @Column({
    primaryKey: true,
    autoIncrement: true
  })
  id?: number;

  @Column(DataType.STRING)
  status?: Status;

  @Column
  description: string;
}