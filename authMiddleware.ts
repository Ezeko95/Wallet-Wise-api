import jwt from 'jsonwebtoken';
import config from './lib/config'; // Import your configuration file
import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // Get the token from the request headers or cookies
    const token = req.headers.authorization?.split(' ')[1] || req.cookies.token;
  
    if (!token) {
      return res.status(401).json({ message: 'Access token not found' });
    }
    try {
      // Verify and decode the token
      const decoded = jwt.verify(token, config.secret) as { user: any, email: string };
  
      // Add the user data to the request object
      req.user.id = decoded.user;
  
      // Call the next middleware
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid access token' });
    }
  };
  