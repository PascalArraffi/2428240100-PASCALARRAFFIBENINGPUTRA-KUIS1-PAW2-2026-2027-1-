import mongoose from 'mongoose';

const jadwalDokterSchema = new mongoose.Schema(
  {
    nama_dokter: { type: String, required: [true, 'nama_dokter wajib diisi'], trim: true },
    spesialisasi: { type: String, required: [true, 'spesialisasi wajib diisi'], trim: true },
    jam_praktik: { type: String, required: [true, 'jam_praktik wajib diisi'], trim: true },
  },
  { timestamps: true }
);

export default mongoose.model('JadwalDokter', jadwalDokterSchema, 'jadwal_dokter');