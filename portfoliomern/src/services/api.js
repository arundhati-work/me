const API_URL = 'http://localhost:5000/api';

export const fetchProjects = async () => {
  const response = await fetch(`${API_URL}/projects`);
  return response.json();
};

export const fetchProjectById = async (id) => {
  const response = await fetch(`${API_URL}/projects/${id}`);
  return response.json();
};