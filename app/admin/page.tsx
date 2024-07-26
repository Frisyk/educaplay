import ButtonDelete from '@/components/ButtonDelete';
import prisma from '@/lib/prisma';
import { getPost, getUsers } from '@/lib/action';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: 'Admin Dashboard web ShalatYUK.',
};

export default async function AdminPage() {
    const users = await getUsers()
    return (
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-blue-800 text-blue-50">
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="bg-blue-100">
              {users.map((user, index) => (
                <tr key={user.id} className={index % 2 === 0 ? 'bg-blue-50' : 'bg-blue-200'}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2"><ButtonDelete id={user.id}/></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
          </div>
        </div>
      );
}


