import { DemoTable } from "../../../components/table/DemoTable";
import { useGetUsersQuery } from "../../../features/advance_redux_uses/demoAdvanceSlice";

export function ExampleOne() {
  const { data: users, error, isLoading } = useGetUsersQuery();

  const tableData = users?.map((u) => ({
    id: u.id,
    name: u.name,
    username: u.username,
    email: u.email,
    street: u.address.street,
    city: u.address.city,
    company: u.company.name,
  }));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching users</p>;
  return (
    <div>
      <h1>Users List</h1>
      {tableData && <DemoTable data={tableData} />}
    </div>
  );
}
