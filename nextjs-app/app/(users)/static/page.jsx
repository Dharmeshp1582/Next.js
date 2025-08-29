// app/static-page/page.jsx
import { db } from '@/config/db';

const StaticPage = async () => {
  try {
    const [doctors] = await db.execute("SELECT * FROM doctors"); // execute or query both are same work
    console.log(doctors)

    return (
      <div>
        <h1>Hii Full Stack</h1>
        <h2>Doctors List:</h2>
        <ul>
          {doctors.map((doc) => (
            <li key={doc.id}>
              {doc.name} - {doc.specialization} - {doc.phone}
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (err) {
    return <div>Error fetching doctors: {err.message}</div>;
  }
};

export default StaticPage;


