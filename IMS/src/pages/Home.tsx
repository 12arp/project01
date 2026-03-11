export default function Home() {
return (
<div className="min-vh-100 bg-light d-flex flex-column">

{/* Header */}
<header className="d-flex justify-content-between align-items-center p-4 bg-white shadow-sm">
<h1 className="h3 fw-bold text-primary m-0">
Shopkeeper CRM
</h1>
<div>
<a href="/admin/login" className="me-3 text-dark text-decoration-none">
Admin Login
</a>
<a
href="/shop/login"
className="btn btn-primary"
>
Shop Login
</a>
</div>
</header>

{/* Hero Section */}
<section className="flex-grow-1 d-flex align-items-center justify-content-center text-center">
<div>
<h2 className="display-5 fw-bold mb-3">
Automate Customer Retention
</h2>
<p className="text-muted mb-4">
Send Thank You & Reminder messages automatically.
</p>
<a
href="/admin/login"
className="btn btn-primary btn-lg"
>
Get Started
</a>
</div>
</section>

</div>
);
}