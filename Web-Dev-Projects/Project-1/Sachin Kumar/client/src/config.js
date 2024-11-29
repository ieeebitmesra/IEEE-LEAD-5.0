const API_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:5000/api/portfolio' 
  : 'https://sachin-portfolio-backend.onrender.com/api/portfolio';

export default API_URL;

