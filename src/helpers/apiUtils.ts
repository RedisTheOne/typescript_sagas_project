import { LogInRequestType } from "../contants/Types";

export async function postRequest(url: string, body: LogInRequestType) {
  const res = await fetch(`http://localhost:5000/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  return res.json();
}