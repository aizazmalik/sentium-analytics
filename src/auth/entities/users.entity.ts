export class Auth {}
import { EntitySchema } from 'typeorm';

//returning a schema of users table created in postgresql db
export const Users = new EntitySchema({
  name: 'users',
  tableName: 'users',
  columns: {
    id: {
      primary: true,
      generated: true,
      type: Number,
    },
    email: {
      type: 'varchar',
    },
    password: {
      type: 'varchar',
    },
    created_on: {
      type: 'timestamp',
    },
  },
});
