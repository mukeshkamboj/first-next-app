export async function POST(req: Request) {
    const data = await req.json();
    console.log("Received Data:", data);
    return Response.json(data);
  }
  