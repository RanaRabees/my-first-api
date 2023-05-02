import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({
    From: "Get Request",
    Message: "This Is First Message From GET Method",
    RequestType: "GET",
  });
}

export async function POST(request: NextRequest) {
  const req = await request.json();
  if (req.name) {
    return NextResponse.json({
      To: req.name,
      Message: "This Is Second Message From POST Method",
      RequestType: "POST",
    });
  } else {
    return new NextResponse("Please include your name in the POST request");
  }
}

export async function PUT(request: NextRequest) {
  const req = await request.json();
  if (req.name) {
    return NextResponse.json({
      To: req.name,
      Message: "This Is Third Message From PUT Method",
      RequestType: "PUT",
    });
  } else {
    return new NextResponse("Please include your name in the PUT request");
  }
}

export async function DELETE(request: NextRequest) {
  //   const req = await request.json();
  //   if (req.name) {
  return NextResponse.json({
    To: "Delete Request",
    Message: "This Is Fourth Message From DELETE Method",
    RequestType: "DELETE",
  });
  //   }
  //    else {
  //     return new NextResponse("Please include your name in the DELETE request");
  //   }
}
