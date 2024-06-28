import mongoose, { Document, Schema } from 'mongoose';

export interface IVideo extends Document {
  user: string;
  stream: string; // URL dello stream video
  startedAt: Date;
}

const VideoSchema: Schema = new Schema({
  user: { type: String, required: true },
  stream: { type: String, required: true },
  startedAt: { type: Date, default: Date.now }
});

export default mongoose.model<IVideo>('Video', VideoSchema);
