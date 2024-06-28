// src/models/taskModel.ts
import { Schema, model, Document } from 'mongoose';

interface ITask extends Document {
  name: string;
  projectId: string;
  assignedTo: string;
  status: string;
  priority: string;
  dependencies: string[];
  startDate: Date;
  dueDate: Date;
}

const taskSchema = new Schema<ITask>({
  name: { type: String, required: true },
  projectId: { type: String, required: true },
  assignedTo: { type: String, required: true },
  status: { type: String, required: true },
  priority: { type: String, required: true },
  dependencies: { type: [String], required: false },
  startDate: { type: Date, required: true },
  dueDate: { type: Date, required: true },
});

export default model<ITask>('Task', taskSchema);
