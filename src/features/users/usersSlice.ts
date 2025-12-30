import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { User, UsersState } from "../type/User";

// fecth api with response
export const fetchUsers = createAsyncThunk<User[]>(
  "users/fetchUsers",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return (await response.json()) as User[];
  }
);

//fetch with id
export const fetchUserById = createAsyncThunk<User, number>(
  "users/fetchUserById",
  async (id: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/?id=${id}`
    );
    const data = await response.json();
    return data[0];
  }
);

//default declear initial state
const initialState: UsersState = {
  users: [],
  loadingUsers: false,
  loadingUserDetails: false,
  error: null,
  selectedUser: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all users
      .addCase(fetchUsers.pending, (state) => {
        state.loadingUsers = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loadingUsers = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loadingUsers = false;
        state.error = action.error.message ?? "Failed to fetch users";
      })
      // Fetch single user by ID
      .addCase(fetchUserById.pending, (state) => {
        state.loadingUserDetails = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loadingUserDetails = false;
        state.selectedUser = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loadingUserDetails = false;
        state.error = action.error.message ?? "Faild to fetch user";
      });
  },
});

export default usersSlice.reducer;
