import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API_URL from "../api";

const DEPTS_BASE = `${API_URL}/departments`; // ✅ Fixed endpoint
const getToken = () => localStorage.getItem("token");

// =============================
// 🧩 Async Thunks
// =============================

export const fetchDepartments = createAsyncThunk(
  "departments/fetchAll",
  async (_, thunkAPI) => {
    try {
      const token = getToken();
      if (!token) throw new Error("No authentication token found");

      const res = await fetch(DEPTS_BASE, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch departments");
      }

      return data || []; // ✅ return array directly
    } catch (err) {
      console.error("Fetch Departments Error:", err);
      return thunkAPI.rejectWithValue(
        err.message || "Failed to fetch departments"
      );
    }
  }
);

// =============================
// 🧠 Slice
// =============================
const departmentSlice = createSlice({
  name: "departments",
  initialState: {
    departments: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearDepartments: (state) => {
      state.departments = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDepartments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDepartments.fulfilled, (state, action) => {
        state.loading = false;
        state.departments = action.payload; // ✅ payload handled correctly
      })
      .addCase(fetchDepartments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearDepartments } = departmentSlice.actions;
export default departmentSlice.reducer;
