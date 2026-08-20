const fallbackGoogleSheetsEndpoint =
  "https://script.google.com/macros/s/AKfycbzxlncpCkQhIwLSlZkIgS1ZI-siqMtWeSjtDvQ9xgqa-I8JTZp-oomh6atD-rgJcO08/exec";

export async function POST(request: Request) {
  const body = await request.text();
  const endpoint = process.env.GOOGLE_SHEETS_ENDPOINT ?? fallbackGoogleSheetsEndpoint;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
      redirect: "follow",
    });

    if (!response.ok) {
      return Response.json({ ok: false }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 502 });
  }
}
