import { useState } from "react";
import { DemoTable } from "../../../components/table/DemoTable";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
  useUpdateUserMutation,
} from "../../../features/advance_redux_uses/demoAdvanceSlice";

type EditUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  street: string;
  city: string;
  company: string;
};

export function ExampleOne() {
  const { data: users, error, isLoading } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();
  const [updateUser, { isLoading: updating }] = useUpdateUserMutation();

  const [editUser, setEditUser] = useState<EditUser | null>(null);

  const tableData =
    users?.map((u) => ({
      id: u.id,
      name: u.name,
      username: u.username,
      email: u.email,
      street: u.address?.street ?? "",
      city: u.address?.city ?? "",
      company: u.company?.name ?? "",
    })) ?? [];

  const handleEdit = (row: EditUser) => {
    console.log(row);
    setEditUser(row);
  };

  const handleUpdate = async () => {
    if (!editUser || !users) return;

    const originalUser = users.find((u) => u.id === editUser.id);
    if (!originalUser) return;

    await updateUser({
      id: editUser.id,
      name: editUser.name,
      username: editUser.username,
      email: editUser.email,

      address: {
        ...originalUser.address, // 👈 keeps suite, zipcode, geo
        street: editUser.street,
        city: editUser.city,
      },

      company: {
        ...originalUser.company, // 👈 keeps catchPhrase, bs
        name: editUser.company,
      },
    });

    setEditUser(null);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching users</p>;
  return (
    <div>
      <h1>Users List</h1>
      {tableData && (
        <DemoTable
          data={tableData}
          hideColumns={["id", "street"]}
          onDelete={(id) => deleteUser(id)}
          onEdit={handleEdit}
        />
      )}
      {/* EDIT MODAL */}
      {editUser && (
        <div className="modal">
          <h3>Edit User</h3>

          <input
            value={editUser.name}
            onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
            placeholder="Name"
          />

          <input
            value={editUser.username}
            onChange={(e) =>
              setEditUser({
                ...editUser,
                username: e.target.value,
              })
            }
            placeholder="Username"
          />

          <input
            value={editUser.email}
            onChange={(e) =>
              setEditUser({
                ...editUser,
                email: e.target.value,
              })
            }
            placeholder="Email"
          />

          <input
            value={editUser.street}
            onChange={(e) =>
              setEditUser({
                ...editUser,
                street: e.target.value,
              })
            }
            placeholder="Street"
          />

          <input
            value={editUser.city}
            onChange={(e) =>
              setEditUser({
                ...editUser,
                city: e.target.value,
              })
            }
            placeholder="City"
          />

          <input
            value={editUser.company}
            onChange={(e) =>
              setEditUser({
                ...editUser,
                company: e.target.value,
              })
            }
            placeholder="Company"
          />

          <button disabled={updating} onClick={handleUpdate}>
            {updating ? "Updating..." : "Update"}
          </button>

          <button onClick={() => setEditUser(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
}
