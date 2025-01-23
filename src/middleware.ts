// middleware.ts
import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/wp-admin')) {
        return new NextResponse(null, { status: 404 })
    }
}

export const config = {
    matcher: '/wp-admin/:path*'
}