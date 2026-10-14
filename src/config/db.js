import mongoose from 'mongoose';

const MONGO_URI = 'mongodb://127.0.0.1:27017/PascalArraffiBeningPutra_Jadwal_Dokter';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB terhubung');
  } catch (err) {
    console.error('Gagal koneksi MongoDB:', err.message);
    process.exit(1);
  }
};

export default connectDB;