const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sks: { type: Number, required: true },
  assessment: {
    assignment_confidence: { type: Number, default: 0 }, // Skala 0-100
    uts: { type: Number, default: 0 },
    uas: { type: Number, default: 0 }
  }
}, { timestamps: true, toJSON: { virtuals: true } });

// LOGIKA AMBIS: Menghitung prediksi nilai akhir
CourseSchema.virtual('predicted_score').get(function() {
  // Bobot: Tugas 30%, UTS 30%, UAS 40%
  return (this.assessment.assignment_confidence * 0.3) + 
         (this.assessment.uts * 0.3) + 
         (this.assessment.uas * 0.4);
});

// Menentukan status berdasarkan tabel PENS (A >= 86)
CourseSchema.virtual('status').get(function() {
  const score = (this.assessment.assignment_confidence * 0.3) + (this.assessment.uts * 0.3) + (this.assessment.uas * 0.4);
  if (score >= 86) return 'ON-TRACK (A)'; //
  if (score >= 81) return 'WARNING (A-)'; //
  return 'DANGER (BELUM A)';
});

module.exports = mongoose.model('Course', CourseSchema);