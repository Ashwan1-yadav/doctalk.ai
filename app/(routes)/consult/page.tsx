import React, { useState } from 'react';

const mockHistory = [
  {
    id: 1,
    date: '2024-06-01',
    question: 'I have a headache and fever. What should I do?',
    response: 'It could be a viral infection. Stay hydrated and rest. If symptoms persist, consult a doctor.'
  },
  {
    id: 2,
    date: '2024-05-28',
    question: 'My child has a rash on the arm.',
    response: 'It may be an allergic reaction. Keep the area clean and monitor for changes.'
  }
];

const mockDoctors = [
  {
    name: 'Dr. Ava Patel',
    specialty: 'General Physician',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Dr. Ethan Kim',
    specialty: 'Surgeon',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Dr. Sophia Lee',
    specialty: 'ENT Specialist',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Dr. Liam Smith',
    specialty: 'Pediatrician',
    img: 'https://randomuser.me/api/portraits/men/41.jpg',
  },
];

export default function ConsultPage() {
  const [question, setQuestion] = useState('');
  const [history, setHistory] = useState(mockHistory);

  const handleConsult = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    setHistory([
      {
        id: Date.now(),
        date: new Date().toISOString().slice(0, 10),
        question,
        response: 'Your consultation has been submitted. A doctor will respond soon.'
      },
      ...history
    ]);
    setQuestion('');
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 space-y-12">
      {/* Consult to Doctor */}
      <section className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-[#2E2C63] mb-4">Consult to Doctor</h2>
        <form onSubmit={handleConsult} className="flex flex-col gap-4">
          <textarea
            className="border border-gray-300 dark:border-gray-700 rounded-lg p-3 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe your symptoms or ask a question..."
            value={question}
            onChange={e => setQuestion(e.target.value)}
            required
          />
          <button
            type="submit"
            className="self-end bg-[#2E2C63] text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Consult Now
          </button>
        </form>
      </section>

      {/* Consultation History */}
      <section className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-[#2E2C63] mb-4">Consultation History</h2>
        {history.length === 0 ? (
          <p className="text-gray-500">No consultations yet.</p>
        ) : (
          <ul className="space-y-4">
            {history.map(item => (
              <li key={item.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">{item.date}</span>
                </div>
                <div className="mb-1">
                  <span className="font-semibold text-[#2E2C63]">You:</span> {item.question}
                </div>
                <div>
                  <span className="font-semibold text-blue-600">Doctor:</span> {item.response}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Doctor Listing */}
      <section className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-[#2E2C63] mb-6">Available Doctors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {mockDoctors.map(doc => (
            <div key={doc.name} className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center text-center border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2">
              <img
                src={doc.img}
                alt={doc.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#2E2C63] shadow"
              />
              <h3 className="text-lg font-semibold mb-1 text-[#2E2C63] dark:text-blue-200">{doc.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{doc.specialty}</p>
              <button className="bg-[#2E2C63] text-white px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer shadow hover:bg-black hover:shadow-lg dark:bg-white dark:text-black dark:hover:bg-gray-200">
                Consult
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 