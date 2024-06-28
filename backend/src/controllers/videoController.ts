import { Request, Response } from 'express';
import Video from '../models/videoModel';

export const startVideoConference = async (req: Request, res: Response) => {
  try {
    const { user, stream } = req.body;
    const video = new Video({ user, stream });
    await video.save();
    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getVideoConferences = async (req: Request, res: Response) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
