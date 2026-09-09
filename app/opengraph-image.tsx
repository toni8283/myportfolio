import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'Toni Blair: Design Engineer & Product Systems'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#111111',
          padding: '72px 80px',
          border: '8px solid #222222',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '54px',
              height: '54px',
              borderRadius: '12px',
              backgroundColor: '#ff8566',
              color: '#111111',
              fontSize: '26px',
              fontWeight: 800,
            }}
          >
            TB
          </div>
          <div style={{ fontSize: '20px', color: '#ff8566', letterSpacing: '0.12em', fontWeight: 600 }}>
            IIT KHARAGPUR · CLASS OF 2028
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ fontSize: '64px', fontWeight: 800, color: '#f5ddd5', lineHeight: 1.1 }}>
            Toni Blair
          </div>
          <div style={{ fontSize: '32px', color: '#ad9e99', lineHeight: 1.35 }}>
            Design Engineer &amp; Full-Stack Systems
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #2a2a2a',
            paddingTop: '24px',
          }}
        >
          <div style={{ fontSize: '20px', color: '#c4b9b2' }}>
            Featured Work: Chalo, AI Systems, Generative Interfaces
          </div>
          <div style={{ fontSize: '20px', color: '#ff8566' }}>github.com/toni8283</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
