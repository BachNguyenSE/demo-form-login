import { http, HttpResponse } from "msw";

export const authHandlers = [
  http.post("http://localhost:3000/api/login", async ({ request}) => {
    const data = (await request.json()) as {
      username: string;
      password: string;
    };

    if(data.username === "bach" && data.password ==="12345") {
        return new HttpResponse("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MTQyOTQ5NDcsImV4cCI6MTc0NTgzMDk0NywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.qTHAjMMkz5lmYkBgHZhjT94-obUrTVzNSqyUGgSR-f8", {status: 200});
    }
    return new HttpResponse("Login failed", {status: 401});
  }),
];
