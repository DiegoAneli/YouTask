import { Request, Response } from 'express';
import Project from '../models/projectModel';

export const getProjects = async (req: Request, res: Response): Promise<void> => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Unknown error' });
    }
  }
};

export const createProject = async (req: Request, res: Response): Promise<void> => {
  const { name, description } = req.body;

  const project = new Project({
    name,
    description,
  });

  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'Unknown error' });
    }
  }
};

export const getProjectById = async (req: Request, res: Response): Promise<void> => {
  try {
    const project = await Project.findById(req.params.id);
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Unknown error' });
    }
  }
};

export const updateProject = async (req: Request, res: Response): Promise<void> => {
  const { name, description } = req.body;

  try {
    const project = await Project.findById(req.params.id);

    if (project) {
      project.name = name || project.name;
      project.description = description || project.description;
      const updatedProject = await project.save();
      res.json(updatedProject);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Unknown error' });
    }
  }
};

export const deleteProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const project = await Project.findById(req.params.id);

    if (project) {
      await project.deleteOne();
      res.json({ message: 'Project removed' });
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Unknown error' });
    }
  }
};
