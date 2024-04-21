'use server';

import { revalidatePath } from 'next/cache';

import { User } from '@/app/models/User';
import { getMysqlConnection } from '@/app/utils/mysql';

export async function getUsersByName(name: string): Promise<User[]> {
  revalidatePath('/');

  const mysqlConnection = await getMysqlConnection();

  const [users] = await mysqlConnection.query<any>(`SELECT * FROM users WHERE name='${name}'`);

  return users as User[];
}
