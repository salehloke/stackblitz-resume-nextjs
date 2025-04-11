import mongoose from 'mongoose';

const ResumeSchema = new mongoose.Schema({
  basics: {
    name: String,
    label: String,
    email: String,
    phone: String,
    url: String,
    summary: String,
    location: {
      address: String,
      postalCode: String,
      city: String,
      countryCode: String,
      region: String,
    },
    profiles: [{
      network: String,
      username: String,
      url: String
    }]
  },
  work: [{
    name: String,
    position: String,
    url: String,
    startDate: String,
    endDate: String,
    summary: String,
    highlights: [String]
  }],
  education: [{
    institution: String,
    url: String,
    area: String,
    studyType: String,
    startDate: String,
    endDate: String,
    score: String,
    courses: [String]
  }],
  skills: [{
    name: String,
    level: String,
    keywords: [String]
  }],
  languages: [{
    language: String,
    fluency: String
  }],
  projects: [{
    name: String,
    description: String,
    highlights: [String],
    keywords: [String],
    url: String
  }]
}, {
  timestamps: true
});

export default mongoose.models.Resume || mongoose.model('Resume', ResumeSchema);
