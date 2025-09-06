'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

const ColorPicker = ({ colors, onChange, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const predefinedColors = [
    '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF',
    '#000000', '#FFFFFF', '#800000', '#008000', '#000080', '#808000',
    '#800080', '#008080', '#C0C0C0', '#808080', '#FFA500', '#A52A2A',
    '#DDA0DD', '#98FB98', '#F0E68C', '#DEB887', '#5F9EA0', '#FF1493'
  ];

  const addColor = (color) => {
    if (!colors.includes(color)) {
      onChange([...colors, color]);
    }
    setIsOpen(false);
  };

  const removeColor = (index) => {
    const newColors = colors.filter((_, i) => i !== index);
    onChange(newColors);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-black mb-2">{label}</label>
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {colors.map((color, index) => (
            <div key={index} className="relative group">
              <div
                className="w-10 h-10 rounded border-2 border-gray-300 cursor-pointer"
                style={{ backgroundColor: color }}
              />
              <button
                onClick={() => removeColor(index)}
                className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity"
              >
                ×
              </button>
            </div>
          ))}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 border-2 border-dashed border-gray-400 rounded flex items-center justify-center text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-colors"
          >
            +
          </button>
        </div>

        {isOpen && (
          <div className="p-4 border border-gray-200 rounded-lg bg-white">
            <h4 className="text-sm font-medium text-black mb-3">Select Color</h4>
            <div className="grid grid-cols-8 gap-2">
              {predefinedColors.map((color) => (
                <button
                  key={color}
                  onClick={() => addColor(color)}
                  className="w-8 h-8 rounded border border-gray-300 hover:scale-110 transition-transform"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function EditCountryPage() {
  const router = useRouter();
  const params = useParams();
  const countryId = params.id;

  const [formData, setFormData] = useState({
    name: '',
    code: '',
    currency: '',
    flagSvg: '',
    latitude: '',
    longitude: '',
    flagColors: []
  });

  const [institutions, setInstitutions] = useState([]);
  const [newInstitution, setNewInstitution] = useState('');

  useEffect(() => {
    // Mock data loading based on country ID
    const mockData = {
      malawi: {
        name: 'Malawi',
        code: 'MW',
        currency: 'MWK',
        flagSvg: '<svg>...</svg>',
        latitude: '-13.2543',
        longitude: '34.3015',
        flagColors: ['#000000', '#FF0000', '#00FF00']
      },
      kenya: {
        name: 'Kenya',
        code: 'KE',
        currency: 'KES',
        flagSvg: '<svg>...</svg>',
        latitude: '-0.0236',
        longitude: '37.9062',
        flagColors: ['#000000', '#FF0000', '#FFFFFF', '#00FF00']
      }
    };

    const data = mockData[countryId] || {
      name: '',
      code: '',
      currency: '',
      flagSvg: '',
      latitude: '',
      longitude: '',
      flagColors: []
    };

    setFormData(data);
    setInstitutions(['University of Malawi', 'Mzuzu University']); // Mock institutions
  }, [countryId]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFlagColorsChange = (colors) => {
    setFormData({
      ...formData,
      flagColors: colors
    });
  };

  const addInstitution = () => {
    if (newInstitution.trim()) {
      setInstitutions([...institutions, newInstitution.trim()]);
      setNewInstitution('');
    }
  };

  const removeInstitution = (index) => {
    setInstitutions(institutions.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically save the data
    console.log('Saving country data:', { ...formData, institutions });
    router.push('/reference/countries');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              href="/reference/countries"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Countries</span>
            </Link>
            <div className="text-gray-400">|</div>
            <h1 className="text-2xl font-bold text-black">Edit Country</h1>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-black mb-6">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                    Country Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter country name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="code" className="block text-sm font-medium text-black mb-2">
                    Country Code
                  </label>
                  <input
                    type="text"
                    id="code"
                    name="code"
                    value={formData.code}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., MW"
                    maxLength="3"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="currency" className="block text-sm font-medium text-black mb-2">
                    Currency
                  </label>
                  <input
                    type="text"
                    id="currency"
                    name="currency"
                    value={formData.currency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., MWK"
                  />
                </div>

                <div>
                  <label htmlFor="flagSvg" className="block text-sm font-medium text-black mb-2">
                    Flag SVG
                  </label>
                  <input
                    type="text"
                    id="flagSvg"
                    name="flagSvg"
                    value={formData.flagSvg}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="SVG code or URL"
                  />
                </div>
              </div>
            </div>

            {/* Coordinates */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-black mb-6">Coordinates</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="latitude" className="block text-sm font-medium text-black mb-2">
                    Latitude
                  </label>
                  <input
                    type="number"
                    step="any"
                    id="latitude"
                    name="latitude"
                    value={formData.latitude}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., -13.2543"
                  />
                </div>

                <div>
                  <label htmlFor="longitude" className="block text-sm font-medium text-black mb-2">
                    Longitude
                  </label>
                  <input
                    type="number"
                    step="any"
                    id="longitude"
                    name="longitude"
                    value={formData.longitude}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 34.3015"
                  />
                </div>
              </div>
            </div>

            {/* Flag Colors */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-black mb-6">Flag Colors</h2>
              <ColorPicker
                colors={formData.flagColors}
                onChange={handleFlagColorsChange}
                label="Select flag colors"
              />
            </div>

            {/* Institutions */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-black mb-6">Institutions</h2>
              
              <div className="mb-4">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newInstitution}
                    onChange={(e) => setNewInstitution(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Add new institution"
                  />
                  <button
                    type="button"
                    onClick={addInstitution}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Add
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                {institutions.map((institution, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded border-l-4 border-blue-600">
                    <span className="text-black">{institution}</span>
                    <button
                      type="button"
                      onClick={() => removeInstitution(index)}
                      className="text-red-600 hover:text-red-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
              <Link
                href="/reference/countries"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
