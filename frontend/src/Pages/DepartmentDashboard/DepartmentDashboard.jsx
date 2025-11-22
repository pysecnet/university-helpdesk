// src/pages/DepartmentDashboard.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDepartmentTickets,
  updateTicketStatus,
  clearDepartmentTicketState,
} from "../../features/departmentTicketSlice";

export default function DepartmentDashboard() {
  const dispatch = useDispatch();
  const { tickets, loading, error, successMessage } = useSelector(
    (state) => state.departmentTickets
  );

  // Ensure tickets is always an array
  const ticketList = Array.isArray(tickets) ? tickets : tickets?.tickets || [];

  useEffect(() => {
    dispatch(fetchDepartmentTickets());
    return () => {
      dispatch(clearDepartmentTicketState());
    };
  }, [dispatch]);

  const handleStatusChange = (ticketId, newStatus) => {
    dispatch(updateTicketStatus({ ticketId, status: newStatus }));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center fw-bold">🎫 Department Dashboard</h2>

      {loading && <p className="text-center">Loading tickets...</p>}
      {error && <p className="text-danger text-center">{error}</p>}
      {successMessage && (
        <p className="text-success text-center">{successMessage}</p>
      )}

      {ticketList.length === 0 && !loading ? (
        <p className="text-center text-muted">No tickets assigned yet.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped align-middle">
            <thead className="table-dark text-center">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Category</th>
                <th>Description</th>
                <th>Student Email</th>
                <th>Status</th>
                <th>Change Status</th>
              </tr>
            </thead>
            <tbody>
              {ticketList.map((ticket, index) => (
                <tr key={ticket._id}>
                  <td className="text-center">{index + 1}</td>
                  <td>{ticket.title}</td>
                  <td>{ticket.category}</td>
                  <td>{ticket.description}</td>
                  <td>{ticket.studentEmail}</td>
                  <td className="text-center fw-semibold">{ticket.status}</td>
                  <td className="text-center">
                    <select
                      className="form-select"
                      value={ticket.status}
                      onChange={(e) =>
                        handleStatusChange(ticket._id, e.target.value)
                      }
                    >
                      <option value="Open">Open</option>
                      <option value="Assigned">Assigned</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
