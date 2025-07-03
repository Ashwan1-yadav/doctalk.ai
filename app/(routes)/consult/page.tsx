import Navbar from '@/app/_components/Navbar';
import React, { useState } from 'react';

type HistoryItem = {
  id: number;
  date: string;
  question: string;
  response: string;
};

type Doctor = {
  name: string;
  specialty: string;
  img: string;
};

const mockHistory: HistoryItem[] = [
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

const mockDoctors: Doctor[] = [
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
  const [question, setQuestion] = useState<string>('');
  const [history, setHistory] = useState<HistoryItem[]>(mockHistory);
  const [showSymptomPopup, setShowSymptomPopup] = useState<boolean>(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [symptoms, setSymptoms] = useState<string>('');
  const [showAiDoctor, setShowAiDoctor] = useState<boolean>(false);
  const [aiResponse, setAiResponse] = useState<string>('');
  const [isAiSpeaking, setIsAiSpeaking] = useState<boolean>(false);

  const handleConsult = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!question.trim()) return;
    setHistory(prevHistory => [
      {
        id: Date.now(),
        date: new Date().toISOString().slice(0, 10),
        question,
        response: 'Your consultation has been submitted. A doctor will respond soon.'
      },
      ...prevHistory
    ]);
    setQuestion('');
  };

  const handleDoctorClick = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setShowSymptomPopup(true);
  };

  const handleSymptomSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!symptoms.trim()) return;

    // Generate AI response based on symptoms
    const aiDoctorResponse = generateAiResponse(symptoms);
    setAiResponse(aiDoctorResponse);
    setShowAiDoctor(true);
    setShowSymptomPopup(false);
    setSymptoms('');
  };

  const generateAiResponse = (symptoms: string) => {
    // Simple AI response generator (in real app, this would be an API call)
    const responses: { [key: string]: string } = {
      'headache': 'Based on your symptoms, it appears you may have a tension headache. I recommend rest, hydration, and over-the-counter pain relievers. If symptoms persist for more than 48 hours, please consult a healthcare professional.',
      'fever': 'A fever indicates your body is fighting an infection. Stay hydrated, rest, and monitor your temperature. If fever exceeds 101°F (38.3°C) or persists beyond 3 days, seek medical attention.',
      'cough': 'Your cough could be due to various causes including allergies, viral infection, or respiratory irritation. Stay hydrated, use a humidifier, and avoid irritants. If accompanied by difficulty breathing or blood, seek immediate medical care.',
      'stomach': 'Stomach issues can range from dietary indiscretion to infections. Try clear fluids, bland foods, and rest. If symptoms include severe pain, vomiting, or blood, consult a doctor immediately.',
      'default': 'Thank you for sharing your symptoms. While I can provide general guidance, it\'s important to consult with a healthcare professional for proper diagnosis and treatment. Based on what you\'ve described, I recommend monitoring your symptoms and seeking medical attention if they worsen or persist.'
    };

    const lowerSymptoms = symptoms.toLowerCase();
    for (const [key, response] of Object.entries(responses)) {
      if (key !== 'default' && lowerSymptoms.includes(key)) {
        return response;
      }
    }
    return responses.default;
  };

  const handleSpeakResponse = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsAiSpeaking(true);
      const utterance = new window.SpeechSynthesisUtterance(aiResponse);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 1;

      utterance.onend = () => {
        setIsAiSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
    }
  };

  const handleStopSpeaking = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsAiSpeaking(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 space-y-12">
      <Navbar />

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

      {/* Main Content with Doctors and AI Doctor */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Doctor Listing */}
        <section className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-[#2E2C63] mb-6">Available Doctors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mockDoctors.map(doc => (
              <div key={doc.name} className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center text-center border border-transparent hover:border-[#2E2C63] dark:hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#2E2C63] shadow"
                />
                <h3 className="text-lg font-semibold mb-1 text-[#2E2C63] dark:text-blue-200">{doc.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{doc.specialty}</p>
                <button
                  onClick={() => handleDoctorClick(doc)}
                  className="bg-[#2E2C63] text-white px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer shadow hover:bg-black hover:shadow-lg dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                  Consult
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* AI Voice Doctor Section */}
        {showAiDoctor && (
          <section className="lg:col-span-1 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-md p-6">
            <div className="text-center mb-4">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#2E2C63] mb-2">AI Voice Doctor</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Instant medical guidance</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4 shadow-inner">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-[#2E2C63]">AI Doctor Response</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {aiResponse}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleSpeakResponse}
                disabled={isAiSpeaking}
                className="flex-1 bg-[#2E2C63] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
                {isAiSpeaking ? 'Speaking...' : 'Listen'}
              </button>
              {isAiSpeaking && (
                <button
                  onClick={handleStopSpeaking}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition"
                >
                  Stop
                </button>
              )}
            </div>
          </section>
        )}
      </div>

      {/* Symptom Popup */}
      {showSymptomPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-[#2E2C63]">Describe Your Symptoms</h3>
              <button
                onClick={() => setShowSymptomPopup(false)}
                className="text-gray-500 hover:text-gray-700 transition"
                type="button"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {selectedDoctor && (
              <div className="flex items-center mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <img
                  src={selectedDoctor.img}
                  alt={selectedDoctor.name}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold text-[#2E2C63]">{selectedDoctor.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{selectedDoctor.specialty}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSymptomSubmit}>
              <textarea
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                placeholder="Please describe your symptoms in detail..."
                value={symptoms}
                onChange={e => setSymptoms(e.target.value)}
                required
              />
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowSymptomPopup(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#2E2C63] text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition"
                >
                  Get AI Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}