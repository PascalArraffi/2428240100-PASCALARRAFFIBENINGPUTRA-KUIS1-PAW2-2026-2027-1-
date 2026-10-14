import mongoose from 'mongoose';
import JadwalDokter from '../models/JadwalDokter.js';

const pickFields = (body) => ({
  nama_dokter: body.nama_dokter,
  spesialisasi: body.spesialisasi,
  jam_praktik: body.jam_praktik,
});

export const create = async (req, res) => {
  try {
    const data = await JadwalDokter.create(pickFields(req.body));
    res.status(201).json({ success: true, message: 'Data berhasil ditambahkan', data });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getAll = async (req, res) => {
  try {
    const data = await JadwalDokter.find();
    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getById = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id))
      return res.status(400).json({ success: false, message: 'Format ID tidak valid' });

    const data = await JadwalDokter.findById(req.params.id);
    if (!data) return res.status(404).json({ success: false, message: 'Data tidak ditemukan' });

    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const update = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id))
      return res.status(400).json({ success: false, message: 'Format ID tidak valid' });

    const data = await JadwalDokter.findByIdAndUpdate(req.params.id, pickFields(req.body), {
      new: true,
      runValidators: true,
    });
    if (!data) return res.status(404).json({ success: false, message: 'Data tidak ditemukan' });

    res.status(200).json({ success: true, message: 'Data berhasil diperbarui', data });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const remove = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id))
      return res.status(400).json({ success: false, message: 'Format ID tidak valid' });

    const data = await JadwalDokter.findByIdAndDelete(req.params.id);
    if (!data) return res.status(404).json({ success: false, message: 'Data tidak ditemukan' });

    res.status(200).json({ success: true, message: 'Data berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};