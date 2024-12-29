import React, { useState } from 'react';
import { 
  Star, 
  TrendingUp, 
  Users, 
  Palette, 
  DollarSign, 
  Trophy,
  Upload,
  CheckCircle
} from 'lucide-react';

const BeOnePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    portfolio: '',
    experience: '',
    sampleWork: null,
    description: '',
    agreed: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      sampleWork: e.target.files[0]
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Become a <span className="text-yellow-400">Creator</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
            Join OneKomiks and share your stories with readers worldwide. Turn your passion into opportunity.
          </p>
          <button 
            onClick={() => document.getElementById('submission-form').scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200"
          >
            Start Creating Today
          </button>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Benefits of Being a Creator</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Monetization */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Monetization</h3>
            <p className="text-gray-600">
              Earn revenue through our fair compensation system, including reader subscriptions and tips.
            </p>
          </div>

          {/* Exposure */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Wide Exposure</h3>
            <p className="text-gray-600">
              Reach millions of readers worldwide through our growing platform and promotional support.
            </p>
          </div>

          {/* Creative Freedom */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-yellow-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Palette className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Creative Freedom</h3>
            <p className="text-gray-600">
              Tell your stories your way while getting professional support and resources.
            </p>
          </div>
        </div>
      </div>

      {/* Creator Features */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Creator Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Analytics */}
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
                <p className="text-gray-600">
                  Track your readership, engagement, and earnings with detailed analytics and insights.
                </p>
              </div>
            </div>

            {/* Community */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Creator Community</h3>
                <p className="text-gray-600">
                  Connect with fellow creators, share experiences, and grow together.
                </p>
              </div>
            </div>

            {/* Marketing */}
            <div className="flex items-start space-x-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Marketing Support</h3>
                <p className="text-gray-600">
                  Get featured in our promotions and benefit from our marketing initiatives.
                </p>
              </div>
            </div>

            {/* Rewards */}
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Trophy className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Creator Rewards</h3>
                <p className="text-gray-600">
                  Earn exclusive rewards and recognition based on your performance and milestones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submission Form */}
      <div id="submission-form" className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Submit Your Application</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            {/* Portfolio Link */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Portfolio Link (Optional)
              </label>
              <input
                type="url"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                value={formData.portfolio}
                onChange={(e) => setFormData({...formData, portfolio: e.target.value})}
              />
            </div>

            {/* Experience */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Previous Experience
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                value={formData.experience}
                onChange={(e) => setFormData({...formData, experience: e.target.value})}
                required
              >
                <option value="">Select your experience level</option>
                <option value="beginner">Beginner (0-2 years)</option>
                <option value="intermediate">Intermediate (2-5 years)</option>
                <option value="experienced">Experienced (5+ years)</option>
              </select>
            </div>

            {/* Sample Work Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Sample Work (PDF, JPG, PNG)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Upload className="h-8 w-8 text-gray-400" />
                </div>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  required
                  className="hidden"
                  id="file-upload"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer text-purple-600 hover:text-purple-500"
                >
                  Click to upload
                </label>
                {formData.sampleWork && (
                  <p className="mt-2 text-sm text-gray-600">
                    Selected: {formData.sampleWork.name}
                  </p>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tell us about your work and vision
              </label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                required
                id="terms"
                className="mt-1"
                checked={formData.agreed}
                onChange={(e) => setFormData({...formData, agreed: e.target.checked})}
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the creator terms and conditions and confirm that all submitted work is my own original content.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BeOnePage;