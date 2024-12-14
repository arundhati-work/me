// models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  shortDescription: {
    type: String,
    required: true,
    trim: true
  },
  createdDate: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  coverImage: {
    type: String,
    required: true
  },
  technicalChallenges: [{
    challenge: {
      type: String,
      required: true
    },
    solution: {
      type: String,
      required: true
    }
  }],
  techStack: {
    frontend: [String],
    backend: [String],
    tools: [String]
  },
  futureEnhancements: [String],
  gallery: [String],
  links: {
    github: {
      type: String,
      required: true
    },
    demo: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);