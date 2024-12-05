import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = (global as any).mongoosecache;

if (!cached) {
  cached = { conn: null, promise: null };
  (global as any).mongoosecache = cached;
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((connection) => connection);
  }
  cached.conn = await cached.promise;

  return cached.conn;
}

export default dbConnect;