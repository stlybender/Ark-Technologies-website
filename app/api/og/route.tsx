import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
 
export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0F4C81',
            padding: '80px 100px',
          }}
        >
          {/* Logo Circle */}
          <div
            style={{
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              backgroundColor: '#0F4C81',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              marginBottom: '48px',
            }}
          >
            {/* White "A" shape (mountain/arrow) */}
            <svg width="320" height="320" viewBox="0 0 200 200">
              {/* Outer circle */}
              <circle cx="100" cy="100" r="100" fill="#0F4C81" />
              
              {/* White triangle (top part of A) */}
              <path
                d="M 100 40 L 160 140 L 130 140 L 100 85 L 70 140 L 40 140 Z"
                fill="#FFFFFF"
              />
              
              {/* Gray triangle (bottom accent) */}
              <path
                d="M 100 110 L 130 160 L 70 160 Z"
                fill="#6B7280"
              />
            </svg>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 40,
              fontWeight: 500,
              color: '#FFFFFF',
              textAlign: 'center',
              maxWidth: '900px',
              lineHeight: 1.4,
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
          >
            Enterprise AI that moves at the speed of your operations
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

