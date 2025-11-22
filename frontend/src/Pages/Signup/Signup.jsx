import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupUser, clearError } from "../../features/userSlice";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    gender: "",
    dob: "",
    address: "",
    role: "student",
    departmentId: "", // store department ID
  });

  const [departments, setDepartments] = useState([]); // fetched from backend

  useEffect(() => {
    dispatch(clearError());

    // fetch departments from backend
    const fetchDepartments = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/departments", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        setDepartments(data); // set array of departments
      } catch (err) {
        console.error("Failed to fetch departments:", err);
      }
    };

    fetchDepartments();
  }, [dispatch]);

  // Redirect after signup
  useEffect(() => {
    if (!user || !user.role) return;

    const redirectMap = {
      student: "/student-dashboard",
      department: "/department-dashboard",
      admin: "/admin-dashboard",
    };

    const path = redirectMap[user.role] || "/";
    navigate(path, { replace: true });
  }, [user, navigate]);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullname ||
      !formData.email ||
      !formData.password ||
      !formData.role
    ) {
      alert("Please fill all required fields!");
      return;
    }

    if (formData.role === "department" && !formData.departmentId) {
      alert("Department is required for role 'department'!");
      return;
    }

    dispatch(signupUser(formData));
  };

  return (
    <div
      className="container mt-5 p-4 shadow rounded"
      style={{ maxWidth: "500px" }}
    >
      <h2 className="mb-4 text-center">Create Your Account</h2>

      {error && <p className="text-danger text-center">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            placeholder="Full Name"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email Address"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <select
            name="gender"
            value={formData.gender}
            className="form-select"
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="mb-3">
          <input
            type="date"
            name="dob"
            value={formData.dob}
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="address"
            value={formData.address}
            placeholder="Address"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <select
            name="role"
            value={formData.role}
            className="form-select"
            onChange={handleChange}
          >
            <option value="student">Student</option>
            <option value="department">Department</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {formData.role === "department" && (
          <div className="mb-3">
            <select
              name="departmentId"
              value={formData.departmentId}
              className="form-select"
              onChange={handleChange}
            >
              <option value="">Select Department</option>
              {Array.isArray(departments) &&
                departments.map((dept) => (
                  <option key={dept._id} value={dept._id}>
                    {dept.name}
                  </option>
                ))}
            </select>
          </div>
        )}

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

export default Signup;
