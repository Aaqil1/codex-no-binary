const API_BASE_URL = __API_BASE_URL__ || '/api';

export interface MotivationResponse {
  message: string;
  timestamp: string;
}

export async function fetchMotivation(): Promise<MotivationResponse> {
  const response = await fetch(`${API_BASE_URL}/message`);

  if (!response.ok) {
    throw new Error('Unable to fetch the latest update.');
  }

  const data = (await response.json()) as MotivationResponse;
  return data;
}
