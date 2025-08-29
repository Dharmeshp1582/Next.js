import { db } from "@/config/db";
import { Mail, Phone, Award, User } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const [doctors] = await db.execute(`SELECT id FROM doctors`);
  return doctors.map((doc) => ({
    id: doc.id.toString(),
  }));
}

const SingleDoctor = async ({ params }) => {
  // ✅ Await params properly
  const { id } = await params;

  // Convert to int only if doctor.id is INT
  const doctorId = parseInt(id, 10);

  const [rows] = await db.execute(
    `SELECT * FROM doctors WHERE id = ?`,
    [doctorId]
  );

  const doctor = rows[0];

  if (!doctor) return notFound();

  const getInitials = (fullName) =>
    fullName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-xl font-bold">
              {getInitials(doctor.name)}
            </div>
            <div>
              <h2 className="text-2xl font-bold">{doctor.name}</h2>
              <p className="text-blue-100 text-sm">{doctor.specialization}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-gray-600">
              <Mail className="w-4 h-4 text-blue-500" />
              <span className="text-sm">{doctor.email}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <Phone className="w-4 h-4 text-green-500" />
              <span className="text-sm">{doctor.phone}</span>
            </div>
          </div>

          <div className="border-t border-gray-100"></div>

          {/* Extra Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-yellow-500" />
              <div>
                <div className="text-xs text-gray-500">Experience</div>
                <div className="text-sm font-medium">N/A</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-purple-500" />
              <div>
                <div className="text-xs text-gray-500">License</div>
                <div className="text-sm font-medium">N/A</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-3">
          <div className="text-xs text-gray-500">
            ID: {doctor.id} | Specialization: {doctor.specialization}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDoctor;
