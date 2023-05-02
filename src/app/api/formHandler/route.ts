import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const req = await request.json();

  console.log(req);

  //   if (req.name) {
  //     return NextResponse.json({
  //       To: req.name,
  //       Message: "This Is Second Message From POST Method",
  //       RequestType: "POST",
  //     });
  //   } else {
  //     return new NextResponse("Please include your name in the POST request");
  //   }
}
