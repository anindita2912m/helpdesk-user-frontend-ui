import UserLayout from "../layout/UserLayout";
import "./MyTickets.css";
import { useState } from "react";

function MyTickets() {
  const [search, setSearch] = useState("");
  const [selectedTicket, setSelectedTicket] = useState(null);

  const tickets = [
    {
      id: "#101",
      subject: "Printer Issue",
      status: "Open",
      priority: "High",
      date: "18 Jul 2026",
    },
    {
      id: "#102",
      subject: "Email Login",
      status: "Pending",
      priority: "Medium",
      date: "17 Jul 2026",
    },
    {
      id: "#103",
      subject: "Network Error",
      status: "Closed",
      priority: "Low",
      date: "15 Jul 2026",
    },
  ];

  const filteredTickets = tickets.filter((ticket) =>
    ticket.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <UserLayout>
      <div className="tickets-page">

        <div className="tickets-header">
          <h1>My Tickets</h1>

          <input
            type="text"
            placeholder="Search ticket..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="tickets-card">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Subject</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredTickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td>{ticket.id}</td>

                  <td>{ticket.subject}</td>

                  <td>
                    <span className={`status ${ticket.status.toLowerCase()}`}>
                      {ticket.status}
                    </span>
                  </td>

                  <td>
                    <span className={`priority ${ticket.priority.toLowerCase()}`}>
                      {ticket.priority}
                    </span>
                  </td>

                  <td>{ticket.date}</td>

                  <td>
                    <button
                      className="view-btn"
                      onClick={() => setSelectedTicket(ticket)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Ticket Details Modal */}
        {selectedTicket && (
          <div className="modal-overlay">
            <div className="ticket-modal">

              <h2>Ticket Details</h2>

              <div className="ticket-info">
                <p><strong>Ticket ID:</strong> {selectedTicket.id}</p>
                <p><strong>Subject:</strong> {selectedTicket.subject}</p>
                <p><strong>Status:</strong> {selectedTicket.status}</p>
                <p><strong>Priority:</strong> {selectedTicket.priority}</p>
                <p><strong>Date:</strong> {selectedTicket.date}</p>
              </div>

              <button
                className="close-btn"
                onClick={() => setSelectedTicket(null)}
              >
                Close
              </button>

            </div>
          </div>
        )}

      </div>
    </UserLayout>
  );
}

export default MyTickets;