import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMyTickets,
  fetchAdminTickets,
  assignTicket,
} from "../../features/ticketSlice";

export default function Ticket({ isAdmin = false }) {
  const dispatch = useDispatch();
  const {
    tickets = [],
    loading,
    error,
  } = useSelector((state) => state.tickets);
  const { departments = [] } = useSelector((state) => state.departments);

  const [expandedTicket, setExpandedTicket] = useState(null);
  const [assignedDept, setAssignedDept] = useState({});

  useEffect(() => {
    if (isAdmin) dispatch(fetchAdminTickets());
    else dispatch(fetchMyTickets());
  }, [dispatch, isAdmin]);

  const toggleExpand = (ticketNo) => {
    setExpandedTicket((prev) => (prev === ticketNo ? null : ticketNo));
  };

  const handleAssign = (ticketId, deptId) => {
    setAssignedDept((prev) => ({ ...prev, [ticketId]: deptId }));
    dispatch(assignTicket({ ticketId, departmentId: deptId }));
  };

  const truncateDescription = (desc) =>
    desc ? (desc.length > 50 ? desc.slice(0, 50) + "..." : desc) : "";

  if (loading) return <p>Loading tickets...</p>;
  if (error) return <p className="text-danger">Error: {error}</p>;
  if (!tickets || tickets.length === 0) return <p>No tickets submitted yet.</p>;

  const statusBadgeClass = (status) => {
    switch (status) {
      case "Open":
        return "badge bg-success";
      case "In Progress":
        return "badge bg-warning text-dark";
      case "Closed":
        return "badge bg-secondary";
      default:
        return "badge bg-light text-dark";
    }
  };

  return (
    <div className="container my-4">
      {tickets.map((ticket) => (
        <div key={ticket._id} className="card mb-3 shadow-sm">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">{ticket.title || "N/A"}</h5>
              <span className={statusBadgeClass(ticket.status)}>
                {ticket.status || "N/A"}
              </span>
            </div>

            <p className="text-muted mt-2">
              {expandedTicket === ticket.ticketNo
                ? ticket.description || "N/A"
                : truncateDescription(ticket.description)}
            </p>

            <p className="mb-1">
              <strong>Ticket No:</strong> {ticket.ticketNo || "N/A"} |{" "}
              <strong>Submitted:</strong>{" "}
              {ticket.createdAt
                ? new Date(ticket.createdAt).toLocaleString()
                : "N/A"}
            </p>

            {isAdmin && (
              <div className="mb-2">
                <label className="form-label fw-semibold">
                  Assign Department:
                </label>
                <select
                  className="form-select"
                  value={
                    assignedDept[ticket._id] ||
                    ticket.assignedDepartment?._id ||
                    ""
                  }
                  onChange={(e) => handleAssign(ticket._id, e.target.value)}
                >
                  <option value="">Select Department</option>
                  {departments.map((dept) => (
                    <option key={dept._id} value={dept._id}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {expandedTicket === ticket.ticketNo && (
              <div className="mt-2 border-top pt-2">
                <p className="mb-1">
                  <strong>Updated:</strong>{" "}
                  {ticket.updatedAt
                    ? new Date(ticket.updatedAt).toLocaleString()
                    : "N/A"}
                </p>
                {ticket.studentEmail && (
                  <p className="mb-1">
                    <strong>Email:</strong> {ticket.studentEmail}
                  </p>
                )}
                {ticket.studentPhone && (
                  <p className="mb-0">
                    <strong>Phone:</strong> {ticket.studentPhone}
                  </p>
                )}
                {ticket.assignedDepartment && (
                  <p className="mb-0">
                    <strong>Assigned Department:</strong>{" "}
                    {ticket.assignedDepartment.name}
                  </p>
                )}
              </div>
            )}

            <div className="mt-3 text-end">
              <button
                className="btn btn-sm btn-outline-primary"
                onClick={() => toggleExpand(ticket.ticketNo)}
              >
                {expandedTicket === ticket.ticketNo ? "Hide" : "View"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
