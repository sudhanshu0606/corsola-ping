import { NextResponse } from 'next/server';

export async function middleware(request: Request) {

    const origin = request.headers.get('origin') || '*';

    if (request.method === 'OPTIONS') {

        const preflightHeaders = new Headers();

        preflightHeaders.set('Access-Control-Allow-Origin', origin);
        preflightHeaders.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        preflightHeaders.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, uuid');

        return new NextResponse(null, { status: 204, headers: preflightHeaders });

    }

    const response = NextResponse.next();

    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, uuid');

    return response;

}

export const config = {
    matcher: '/api/:path*',
};
