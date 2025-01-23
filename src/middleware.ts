import { NextRequest, NextResponse } from "next/server";

const BLOCKED_PATHS = [
    '/wp-admin',
    '/wordpress',
    '/wp-content',
    '/wp-includes'
];

export function middleware(request: NextRequest) {
    if (BLOCKED_PATHS.some(path => request.nextUrl.pathname.startsWith(path))) {
        return new NextResponse(null, { status: 404 });
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/wp-admin/:path*',
        '/wordpress/:path*',
        '/wp-content/:path*',
        '/wp-includes/:path*'
    ]
};