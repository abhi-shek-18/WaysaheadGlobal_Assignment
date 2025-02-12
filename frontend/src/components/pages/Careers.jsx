import React, { useState } from 'react';
import { Briefcase, GraduationCap, Users, Send } from 'lucide-react';

const jobCategories = [
  {
    icon: Briefcase,
    title: 'Experienced Professionals',
    positions: [
      {
        title: 'Senior AI Engineer',
        location: 'Singapore',
        type: 'Full-time',
        description: 'Lead the development of AI solutions for retail analytics.',
        requirements: [
          '5+ years experience in AI/ML',
          'Strong Python and TensorFlow skills',
          'Experience with computer vision',
          'Track record of deploying ML models to production'
        ]
      },
      {
        title: 'Technical Project Manager',
        location: 'New York',
        type: 'Full-time',
        description: 'Manage and deliver complex AI implementation projects.',
        requirements: [
          '7+ years in technical project management',
          'Experience with AI/ML projects',
          'Strong client communication skills',
          'Agile certification preferred'
        ]
      }
    ]
  },
  {
    icon: GraduationCap,
    title: 'Graduate Roles',
    positions: [
      {
        title: 'Graduate AI Developer',
        location: 'London',
        type: 'Full-time',
        description: 'Join our AI team and work on cutting-edge solutions.',
        requirements: [
          'Masters in Computer Science or related field',
          'Strong programming skills',
          'Knowledge of ML frameworks',
          'Excellent problem-solving abilities'
        ]
      }
    ]
  },
  {
    icon: Users,
    title: 'Internships',
    positions: [
      {
        title: 'AI Research Intern',
        location: 'Remote',
        type: 'Internship',
        description: 'Research and implement new AI algorithms.',
        requirements: [
          'Currently pursuing Masters/PhD',
          'Strong mathematical background',
          'Programming experience in Python',
          'Research experience is a plus'
        ]
      }
    ]
  }
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null,
    coverLetter: ''
  });

  const handleApply = (job) => {
    setSelectedJob(job);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setSelectedJob(null);
    setFormData({
      name: '',
      email: '',
      resume: null,
      coverLetter: ''
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-blue-900 py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] opacity-20 bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Join Our Team
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
              Build the future of AI with us
            </p>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {jobCategories.map((category, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <div className="flex items-center mb-8">
                <category.icon className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.positions.map((job, jobIndex) => (
                  <div
                    key={jobIndex}
                    className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <span className="mr-4">{job.location}</span>
                      <span>{job.type}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <button
                      onClick={() => handleApply(job)}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Apply Now
                      <Send className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Apply for {selectedJob.title}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.name}

                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Resume</label>
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  className="mt-1 block w-full"
                  onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Cover Letter</label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Submit Application
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;