import { http, HttpResponse } from 'msw';

const apiBaseUrl = __API_BASE_URL__ || '/api';

export const handlers = [
  http.get(`${apiBaseUrl}/message`, () =>
    HttpResponse.json({
      message: 'Stay curious and keep shipping! 🚀',
      timestamp: new Date().toISOString(),
    })
  ),
];
