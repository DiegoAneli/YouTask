import mongoose, { Document, Schema } from 'mongoose';

export interface IDocument extends Document {
  name: string;
  path: string;
  uploadedAt: Date;
}

const DocumentSchema: Schema = new Schema({
  name: { type: String, required: true },
  path: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now }
});

export default mongoose.model<IDocument>('Document', DocumentSchema);
