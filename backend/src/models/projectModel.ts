import { Schema, model, Document } from 'mongoose';

interface IProject extends Document {
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const projectSchema = new Schema<IProject>({
  name: { type: String, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

projectSchema.pre<IProject>('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default model<IProject>('Project', projectSchema);
