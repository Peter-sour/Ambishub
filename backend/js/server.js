const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Security & Middleware
app.use(helmet()); 
app.use(cors());
app.use(express.json());

// Hubungkan ke Database
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Database AmbisHub Terhubung!'))
  .catch(err => console.error('❌ Gagal:', err));

// Hubungkan ke Routes (Kita akan buat file routes/courseRoutes.js)
app.use('/api/courses', require('./routes/courseRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 AmbisHub API jalan di port ${PORT}`));