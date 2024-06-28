import { Request, Response } from 'express';
import Document from '../models/documentModel';
import path from 'path';

export const uploadDocument = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    const document = new Document({
      name: req.file.originalname,
      path: req.file.path,
    });
    await document.save();
    res.status(201).json(document);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getDocuments = async (req: Request, res: Response) => {
  try {
    const documents = await Document.find();
    res.json(documents);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
