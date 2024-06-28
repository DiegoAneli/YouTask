// src/controllers/taskController.ts
import { Request, Response } from 'express';
import Task from '../models/taskModel';

export const getTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req: Request, res: Response): Promise<void> => {
  const task = new Task({
    name: req.body.name,
    projectId: req.body.projectId,
    assignedTo: req.body.assignedTo,
    status: req.body.status,
    startDate: req.body.startDate,
    dueDate: req.body.dueDate,
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
