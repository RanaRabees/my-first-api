import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  if (url.searchParams.has("sir")) {
    const sir = url.searchParams.get("sir");
    // This Is For Text Response
    return new NextResponse("Welcome : " + sir + " In My Website");
    // This Is For Json Response
    // return NextResponse.json("Welcome : " + sir + " In My Website");
  } else {
    return new NextResponse('Please send your name in Url parameter First "/api/hello?sir=yourname"');
  }
}
