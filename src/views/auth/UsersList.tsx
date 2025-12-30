import { useEffect, useState } from "react";
import { fetchUserById, fetchUsers } from "../../features/users/usersSlice";
import { useAppDispatch, useAppSelector } from "../../features/hook/hooks";
import type { User } from "../../features/type/User";
import Loader from "../../components/loader/Loader";

export function UsersList() {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const dispatch = useAppDispatch(); // ✅ call the hook
  const { users, loadingUsers, error, selectedUser, loadingUserDetails } =
    useAppSelector((state) => state.users); // ✅ typed

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    if (selectedUserId != null) {
      dispatch(fetchUserById(selectedUserId));
    }
  }, [selectedUserId, dispatch]);

  //   Auto-hide user details after 10s
  useEffect(() => {
    if (selectedUserId !== null) {
      const hideTimer = setTimeout(() => setSelectedUserId(null), 30000);
      return () => clearTimeout(hideTimer);
    }
  }, [selectedUserId]);

  // Auto-refresh user details every 30s
  useEffect(() => {
    if (selectedUserId !== null) {
      const refreshInterval = setInterval(() => {
        dispatch(fetchUserById(selectedUserId));
      }, 300000);
      return () => clearInterval(refreshInterval);
    }
  }, [selectedUserId, dispatch]);

  return (
    <div className="flex w-full">
      <div className="block w-1/2">
        <h2>User List</h2>
        {loadingUsers ? (
          <p>Loading users...</p>
        ) : (
          <ul>
            {users.map((user: User) => (
              <li key={user.id}>
                <strong>{user.name}</strong> ({user.username}) <br />
                Email: {user.email} <br />
                City: {user.address.city} <br />
                Phone: {user.phone} <br />
                Company: {user.company.name}
                <button
                  className="px-5 py-2 rounded-2xl bg-accent"
                  onClick={() =>
                    setSelectedUserId(
                      selectedUserId === user.id ? null : user.id
                    )
                  }
                >
                  Details
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="w-1/2 h-full p-5">
        {loadingUserDetails && <Loader />}

        {selectedUser && !loadingUserDetails && (
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3>{selectedUser.name} Details</h3>
            <p>
              <strong>Username:</strong> {selectedUser.username}
            </p>
            <p>
              <strong>Email:</strong> {selectedUser.email}
            </p>
            <p>
              <strong>Phone:</strong> {selectedUser.phone}
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href={`https://${selectedUser.website}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectedUser.website}
              </a>
            </p>
            <p>
              <strong>Address:</strong> {selectedUser.address.suite},{" "}
              {selectedUser.address.street}, {selectedUser.address.city} -{" "}
              {selectedUser.address.zipcode}
            </p>
            <p>
              <strong>Company:</strong> {selectedUser.company.name} (
              {selectedUser.company.catchPhrase})
            </p>
          </div>
        )}
      </div>
      {error}
    </div>
  );
}
