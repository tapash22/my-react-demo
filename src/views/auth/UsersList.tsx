import { useEffect } from "react";
import { fetchUsers } from "../../features/users/usersSlice";
import { useAppDispatch, useAppSelector } from "../../features/hook/hooks";
import type { User } from "../../features/type/User";

export function UsersList() {
  const dispatch = useAppDispatch(); // ✅ call the hook
  const { users, loading, error } = useAppSelector((state) => state.users); // ✅ typed

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.username}) <br />
            Email: {user.email} <br />
            City: {user.address.city} <br />
            Phone: {user.phone} <br />
            Company: {user.company.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
