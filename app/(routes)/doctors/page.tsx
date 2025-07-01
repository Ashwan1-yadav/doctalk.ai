"use client";
import React, { useState, useMemo } from 'react';
import { Search, Filter, Star, Clock, MapPin, Users, X } from 'lucide-react';

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  experience: string;
  location: string;
  availability: string;
  consultationFee: number;
  image: string;
  languages: string[];
  education: string;
};

const DoctorListingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('');
  const [selectedAvailability, setSelectedAvailability] = useState<string>('');
  const [minRating, setMinRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>('rating');
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Mock doctor data
  const doctors: Doctor[] = [
    {
      id: 1,
      name: "Dr. Ava Patel",
      specialty: "General Physician",
      rating: 4.9,
      reviews: 245,
      experience: "8 years",
      location: "New York, NY",
      availability: "Available Now",
      consultationFee: 50,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      languages: ["English", "Hindi", "Gujarati"],
      education: "MD - Internal Medicine, Harvard Medical School"
    },
    {
      id: 2,
      name: "Dr. Ethan Kim",
      specialty: "Surgeon",
      rating: 4.8,
      reviews: 189,
      experience: "12 years",
      location: "Los Angeles, CA",
      availability: "Available in 30 mins",
      consultationFee: 120,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      languages: ["English", "Korean"],
      education: "MD - Surgery, Johns Hopkins School of Medicine"
    },
    {
      id: 3,
      name: "Dr. Sophia Lee",
      specialty: "ENT Specialist",
      rating: 4.7,
      reviews: 156,
      experience: "6 years",
      location: "Chicago, IL",
      availability: "Available Now",
      consultationFee: 75,
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      languages: ["English", "Mandarin"],
      education: "MD - Otolaryngology, Mayo Clinic"
    },
    {
      id: 4,
      name: "Dr. Liam Smith",
      specialty: "Pediatrician",
      rating: 4.9,
      reviews: 298,
      experience: "9 years",
      location: "Houston, TX",
      availability: "Available in 1 hour",
      consultationFee: 60,
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      languages: ["English", "Spanish"],
      education: "MD - Pediatrics, Stanford University School of Medicine"
    },
    {
      id: 5,
      name: "Dr. Carlos Rivera",
      specialty: "Cardiologist",
      rating: 4.8,
      reviews: 234,
      experience: "15 years",
      location: "Miami, FL",
      availability: "Available Tomorrow",
      consultationFee: 100,
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      languages: ["English", "Spanish", "Portuguese"],
      education: "MD - Cardiology, University of Miami Miller School"
    },
    {
      id: 6,
      name: "Dr. Emily Zhang",
      specialty: "Dermatologist",
      rating: 4.6,
      reviews: 178,
      experience: "7 years",
      location: "San Francisco, CA",
      availability: "Available Now",
      consultationFee: 85,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      languages: ["English", "Mandarin", "Cantonese"],
      education: "MD - Dermatology, UCSF School of Medicine"
    },
    {
      id: 7,
      name: "Dr. Ahmed Hassan",
      specialty: "Neurologist",
      rating: 4.9,
      reviews: 267,
      experience: "11 years",
      location: "Boston, MA",
      availability: "Available in 2 hours",
      consultationFee: 110,
      image: "https://randomuser.me/api/portraits/men/77.jpg",
      languages: ["English", "Arabic", "French"],
      education: "MD - Neurology, Harvard Medical School"
    },
    {
      id: 8,
      name: "Dr. Maria Rossi",
      specialty: "Gynecologist",
      rating: 4.7,
      reviews: 203,
      experience: "10 years",
      location: "Denver, CO",
      availability: "Available Now",
      consultationFee: 90,
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      languages: ["English", "Italian", "Spanish"],
      education: "MD - Obstetrics & Gynecology, University of Colorado"
    },
    {
      id: 9,
      name: "Dr. David Johnson",
      specialty: "Orthopedic Surgeon",
      rating: 4.8,
      reviews: 145,
      experience: "14 years",
      location: "Seattle, WA",
      availability: "Available Tomorrow",
      consultationFee: 130,
      image: "https://randomuser.me/api/portraits/men/25.jpg",
      languages: ["English"],
      education: "MD - Orthopedic Surgery, University of Washington"
    },
    {
      id: 10,
      name: "Dr. Priya Sharma",
      specialty: "Psychiatrist",
      rating: 4.9,
      reviews: 321,
      experience: "13 years",
      location: "Austin, TX",
      availability: "Available in 45 mins",
      consultationFee: 80,
      image: "https://randomuser.me/api/portraits/women/35.jpg",
      languages: ["English", "Hindi", "Punjabi"],
      education: "MD - Psychiatry, UT Southwestern Medical Center"
    }
  ];

  const specialties: string[] = [
    "All Specialties",
    "General Physician",
    "Surgeon",
    "ENT Specialist",
    "Pediatrician",
    "Cardiologist",
    "Dermatologist",
    "Neurologist",
    "Gynecologist",
    "Orthopedic Surgeon",
    "Psychiatrist"
  ];

  const availabilityOptions: string[] = [
    "All Availability",
    "Available Now",
    "Available in 30 mins",
    "Available in 1 hour",
    "Available in 2 hours",
    "Available Tomorrow"
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : i < rating 
            ? 'text-yellow-400 fill-current opacity-50' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const getAvailabilityColor = (availability: string) => {
    if (availability === "Available Now") return "bg-green-100 text-green-800";
    if (availability.includes("mins") || availability.includes("hour")) return "bg-yellow-100 text-yellow-800";
    return "bg-blue-100 text-blue-800";
  };

  const filteredAndSortedDoctors = useMemo(() => {
    let filtered = doctors.filter(doctor => {
      const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSpecialty = selectedSpecialty === '' || selectedSpecialty === 'All Specialties' || 
                              doctor.specialty === selectedSpecialty;
      const matchesAvailability = selectedAvailability === '' || selectedAvailability === 'All Availability' || 
                                 doctor.availability === selectedAvailability;
      const matchesRating = doctor.rating >= minRating;

      return matchesSearch && matchesSpecialty && matchesAvailability && matchesRating;
    });

    // Sort doctors
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'experience': {
          // Extract years as numbers
          const yearsA = parseInt(a.experience);
          const yearsB = parseInt(b.experience);
          return yearsB - yearsA;
        }
        case 'fee':
          return a.consultationFee - b.consultationFee;
        case 'reviews':
          return b.reviews - a.reviews;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedSpecialty, selectedAvailability, minRating, sortBy, doctors]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedSpecialty('');
    setSelectedAvailability('');
    setMinRating(0);
    setSortBy('rating');
  };

  return (
    <div className="min-h-screen mt-17 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-[#2E2C63] text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search doctors by name or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#2E2C63] focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
        {/* Filters Sidebar */}
        <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-80 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 h-fit`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Filters</h2>
            <button
              type="button"
              onClick={clearFilters}
              className="text-sm text-[#2E2C63] dark:text-blue-200 hover:underline flex items-center gap-1"
            >
              <X className="w-4 h-4" />
              Clear All
            </button>
          </div>

          {/* Specialty Filter */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Specialty
            </label>
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#2E2C63] focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              {specialties.map(specialty => (
                <option key={specialty} value={specialty === 'All Specialties' ? '' : specialty}>
                  {specialty}
                </option>
              ))}
            </select>
          </div>

          {/* Availability Filter */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Availability
            </label>
            <select
              value={selectedAvailability}
              onChange={(e) => setSelectedAvailability(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#2E2C63] focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              {availabilityOptions.map(availability => (
                <option key={availability} value={availability === 'All Availability' ? '' : availability}>
                  {availability}
                </option>
              ))}
            </select>
          </div>

          {/* Rating Filter */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Minimum Rating
            </label>
            <div className="space-y-2">
              {[4.5, 4.0, 3.5, 0].map(rating => (
                <label key={rating} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    value={rating}
                    checked={minRating === rating}
                    onChange={(e) => setMinRating(parseFloat(e.target.value))}
                    className="text-[#2E2C63] focus:ring-[#2E2C63]"
                  />
                  <div className="flex items-center gap-1">
                    {rating === 0 ? (
                      <span className="text-sm text-gray-600 dark:text-gray-300">All Ratings</span>
                    ) : (
                      <>
                        <div className="flex">
                          {renderStars(rating)}
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">&nbsp; & up</span>
                      </>
                    )}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Sort By */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#2E2C63] focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="rating">Highest Rating</option>
              <option value="reviews">Most Reviews</option>
              <option value="experience">Most Experience</option>
              <option value="fee">Lowest Fee</option>
            </select>
          </div>
        </div>

        {/* Doctors List */}
        <div className="flex-1">
          <div className="grid gap-6">
            {filteredAndSortedDoctors.map(doctor => (
              <div key={doctor.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Doctor Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-[#2E2C63] shadow-lg"
                    />
                  </div>

                  {/* Doctor Info */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                          {doctor.name}
                        </h3>
                        <p className="text-[#2E2C63] dark:text-blue-200 font-medium mb-2">
                          {doctor.specialty}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          {doctor.education}
                        </p>

                        {/* Rating and Reviews */}
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center gap-1">
                            {renderStars(doctor.rating)}
                          </div>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                            {doctor.rating}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            ({doctor.reviews} reviews)
                          </span>
                        </div>

                        {/* Experience and Location */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {doctor.experience} experience
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {doctor.location}
                          </div>
                        </div>

                        {/* Languages */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {doctor.languages.map(lang => (
                            <span key={lang} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-600 dark:text-gray-300">
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Availability and Actions */}
                      <div className="flex flex-col items-end gap-3">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(doctor.availability)}`}>
                            {doctor.availability}
                          </span>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">
                            ${doctor.consultationFee}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            consultation fee
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <button type="button" className="px-4 py-2 border border-[#2E2C63] text-[#2E2C63] dark:border-blue-200 dark:text-blue-200 rounded-lg hover:bg-[#2E2C63] hover:text-white dark:hover:bg-blue-200 dark:hover:text-gray-900 transition-colors">
                            View Profile
                          </button>
                          <button type="button" className="px-4 py-2 bg-[#2E2C63] text-white rounded-lg hover:bg-gray-800 dark:bg-blue-200 dark:text-gray-900 dark:hover:bg-blue-300 transition-colors">
                            Book Consultation
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredAndSortedDoctors.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 dark:text-gray-400 text-lg mb-4">
                No doctors found matching your criteria
              </div>
              <button
                type="button"
                onClick={clearFilters}
                className="px-6 py-2 bg-[#2E2C63] text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorListingPage;