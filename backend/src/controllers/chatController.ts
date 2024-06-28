import { Request, Response } from 'express';
import Message from '../models/messageModel';

export const getMessages = async (req: Request, res: Response) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const sendMessage = async (req: Request, res: Response) => {
  try {
    const { user, text } = req.body;
    const message = new Message({ user, text });
    await message.save();
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
