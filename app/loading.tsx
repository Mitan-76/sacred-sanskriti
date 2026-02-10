export default function Loading() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '60vh',
            width: '100%',
            flexDirection: 'column',
            gap: '1rem'
        }}>
            <div className="spinner"></div>
            <p style={{ color: 'var(--text-color)', fontSize: '0.9rem', opacity: 0.7 }}>Loading Sacred Wisdom...</p>
        </div>
    );
}
