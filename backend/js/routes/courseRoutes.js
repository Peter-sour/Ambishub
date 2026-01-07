const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// 1. Endpoint untuk Menambah Matkul Baru
// Ini akan menyimpan data awal seperti SKS dan Confidence Tugas
router.post('/', async (req, res) => {
    try {
        const newCourse = new Course(req.body);
        const savedCourse = await newCourse.save();
        res.status(201).json(savedCourse);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 2. Endpoint untuk Melihat Semua Matkul
// Saat dipanggil, ini otomatis mengeluarkan 'predicted_score' dan 'status' (A, A-, atau Belum A)
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 3. Endpoint untuk Update Nilai (Misal setelah UTS/UAS keluar)
router.patch('/:id', async (req, res) => {
    try {
        const updatedCourse = await Course.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedCourse);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;