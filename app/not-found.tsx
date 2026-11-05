import Link from "next/link";

export default function NotFound() {
    return (
        <div className="container" style={{ marginTop: "4rem", textAlign: "center" }}>
            <h1 style={{ color: "var(--primary-color)", marginBottom: "1rem" }}>Page Not Found</h1>
            <p style={{ marginBottom: "1.5rem", color: "#4a5568" }}>
                The page you're looking for doesn't exist or may have been moved.
            </p>
            <Link href="/" style={{ color: "var(--link-color)", textDecoration: "underline" }}>
                Return to the homepage
            </Link>
        </div>
    );
}
