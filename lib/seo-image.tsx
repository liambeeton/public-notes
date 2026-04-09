type SeoImageProps = {
  eyebrow: string;
  title: string;
  description: string;
};

const background =
  'linear-gradient(135deg, rgb(246, 240, 229) 0%, rgb(230, 242, 238) 50%, rgb(213, 229, 244) 100%)';

export function SeoImage({ eyebrow, title, description }: SeoImageProps) {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        background,
        color: '#102a43',
        fontFamily: 'Georgia, serif',
        padding: '64px',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '100%',
          border: '4px solid rgba(16, 42, 67, 0.08)',
          borderRadius: '36px',
          background: 'rgba(255, 255, 255, 0.78)',
          boxShadow: '0 24px 60px rgba(16, 42, 67, 0.12)',
          padding: '56px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            gap: '32px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '18px',
              fontSize: 28,
              textTransform: 'uppercase',
              letterSpacing: 6,
              color: '#486581',
            }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: 999,
                background: '#0f766e',
              }}
            />
            <span>{eyebrow}</span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div
                style={{
                  fontSize: 64,
                  lineHeight: 1.08,
                  fontWeight: 700,
                  maxWidth: '88%',
                }}
              >
                {title}
              </div>
              <div
                style={{
                  fontSize: 30,
                  lineHeight: 1.35,
                  maxWidth: '84%',
                  color: '#334e68',
                }}
              >
                {description}
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                fontSize: 22,
                color: '#486581',
              }}
            >
              <span>Software Development</span>
              <span>AI</span>
              <span>Cybersecurity</span>
              <span>Trail Running</span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: 28,
              color: '#243b53',
            }}
          >
            <span>Liam Beeton</span>
            <span>www.liambeeton.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
