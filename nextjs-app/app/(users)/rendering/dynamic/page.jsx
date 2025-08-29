// app/static-page/page.jsx
import { db } from "@/config/db";
import { cache } from "react";

export const dynamic = "force-dynamic";

const getAllPatients = cache(async () => {
  const [patients] = await db.execute("SELECT * FROM patients");
  console.log("fetching patients");
  return patients;
});

const DynamicPage = async () => {
  try {
    const patients = await getAllPatients();

    const containerStyle = {
      maxWidth: "800px",
      margin: "40px auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
    };

    const headerStyle = {
      color: "#2c3e50",
      textAlign: "center",
      marginBottom: "20px"
    };

    const subHeaderStyle = {
      color: "#34495e",
      marginBottom: "15px"
    };

    const listStyle = {
      listStyleType: "none",
      padding: 0
    };

    const listItemStyle = {
      padding: "10px",
      marginBottom: "10px",
      backgroundColor: "#111",
      borderRadius: "5px",
      display: "flex",
      justifyContent: "space-between",
      color: "#fff"
    };

    return (
      <div style={containerStyle}>
        <h1 style={headerStyle}>Hii Full Stack</h1>
        <h2 style={subHeaderStyle}>Patients List:</h2>
        <ul style={listStyle}>
          {patients.map((patient) => (
            <li key={patient.id} style={listItemStyle}>
              <span>{patient.name}</span>
              <span>Age: {patient.age}</span>
              <span>Phone: {patient.phone}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (err) {
    return (
      <div style={{ color: "red", textAlign: "center", marginTop: "50px" }}>
        Error fetching patients: {err.message}
      </div>
    );
  }
};

export default DynamicPage;
