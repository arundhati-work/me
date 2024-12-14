// controllers/projectController.js
const Project = require('../models/Project');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

exports.getAllProjects = catchAsync(async (req, res) => {
  const projects = await Project.find().select('title shortDescription coverImage');
  res.status(200).json({
    status: 'success',
    results: projects.length,
    data: projects
  });
});

exports.getProject = catchAsync(async (req, res, next) => {
  const project = await Project.findById(req.params.id);
  
  if (!project) {
    return next(new AppError('Project not found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: project
  });
});

exports.createProject = catchAsync(async (req, res) => {
  const project = await Project.create(req.body);
  
  res.status(201).json({
    status: 'success',
    data: project
  });
});

exports.updateProject = catchAsync(async (req, res, next) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!project) {
    return next(new AppError('Project not found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: project
  });
});

exports.deleteProject = catchAsync(async (req, res, next) => {
  const project = await Project.findByIdAndDelete(req.params.id);

  if (!project) {
    return next(new AppError('Project not found', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});