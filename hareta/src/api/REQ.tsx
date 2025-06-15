// src/api/getFeedback.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Adjust if deploying
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getFeedback(
  guess: string,
  target: string,
): Promise<'🔥 Hot!' | '🌤️ Warm' | '❄️ Cold!' | 'error'> {
  try {
    const response = await axiosInstance.post('/guess', {
      guess,
      target,
    });

    const feedback: string = response.data.feedback;

    // Ensure valid response (optional sanity check)
    const validFeedback = ['🔥 Hot!', '🌤️ Warm', '❄️ Cold!'];
    if (validFeedback.includes(feedback)) {
      return feedback as '🔥 Hot!' | '🌤️ Warm' | '❄️ Cold!';
    }

    console.warn('Unexpected feedback:', feedback);
    return 'error';
  } catch (error) {
    console.error('Failed to fetch feedback:', error);
    return 'error';
  }
}
