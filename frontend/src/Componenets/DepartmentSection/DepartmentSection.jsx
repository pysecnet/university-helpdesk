import { useState, useEffect } from "react";
import API_URL from "../../api"; // Ensure your API_URL is correct

export default function DepartmentSection() {
  const [departments, setDepartments] = useState([]);
  const [newDept, setNewDept] = useState("");
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token"); // ✅ get JWT token

  // Fetch departments from backend
  const fetchDepartments = async () => {
    try {
      const res = await fetch(`${API_URL}/departments`, {
        headers: {
          Authorization: `Bearer ${token}`, // ✅ pass token
        },
      });
      if (!res.ok) throw new Error("Failed to fetch departments");
      const data = await res.json();
      setDepartments(data || []);
    } catch (error) {
      console.error("Error fetching departments:", error);
      setMessage("⚠️ Failed to fetch departments.");
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  // Add new department
  const handleAddDepartment = async (e) => {
    e.preventDefault();
    if (!newDept.trim()) {
      setMessage("❌ Department name is required.");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/departments/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ✅ pass token
        },
        body: JSON.stringify({ name: newDept }),
      });
      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Department added successfully!");
        setNewDept("");
        fetchDepartments(); // refresh list
      } else {
        setMessage(`❌ Error: ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error adding department:", error);
      setMessage("⚠️ Server error. Please try again later.");
    }
  };

  // Delete department
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this department?"))
      return;

    try {
      const res = await fetch(`${API_URL}/departments/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`, // ✅ pass token
        },
      });
      if (!res.ok) throw new Error("Failed to delete department");

      setMessage("🗑️ Department deleted successfully.");
      fetchDepartments(); // refresh list
    } catch (error) {
      console.error("Error deleting department:", error);
      setMessage("⚠️ Failed to delete department.");
    }
  };

  return (
    <div className="container my-5 text-start">
      <h3 className="mb-4 fw-bold text-center">🏢 Manage Departments</h3>

      <form
        onSubmit={handleAddDepartment}
        className="border p-4 rounded shadow-sm bg-light mb-4"
      >
        <label className="form-label fw-semibold">Add New Department:</label>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter department name"
            value={newDept}
            onChange={(e) => setNewDept(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </div>
        {message && <p className="mt-3 text-center">{message}</p>}
      </form>

      <h5 className="fw-bold mb-3">Existing Departments:</h5>
      <ul className="list-group">
        {departments.length > 0 ? (
          departments.map((dept) => (
            <li
              key={dept._id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {dept.name}
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => handleDelete(dept._id)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p className="text-muted">No departments found.</p>
        )}
      </ul>
    </div>
  );
}
