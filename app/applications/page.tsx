import Link from "next/link";

const applications = [
    {
        name: "Beverages",
        description:
            "Color solutions designed for clear, flavored and functional beverage applications.",
        considerations: [
            "Shade and visual appearance",
            "Processing conditions",
            "Product transparency",
            "Color stability",
        ],
        accent: "bg-brand-red",
    },
    {
        name: "Ice Cream",
        description:
            "Color formulations designed to perform reliably across frozen dairy and dessert applications.",
        considerations: [
            "Frozen product conditions",
            "Desired shade and intensity",
            "Dairy compatibility",
            "Storage stability",
        ],
        accent: "bg-brand-orange",
    },
    {
        name: "Confectionery",
        description:
            "Vibrant and consistent colors for candies, coatings, fillings and other confectionery products.",
        considerations: [
            "Color intensity",
            "Heat processing",
            "Coatings and fillings",
            "Finished-product appearance",
        ],
        accent: "bg-brand-yellow",
    },
    {
        name: "Fat-Based Foods",
        description:
            "Application-focused solutions for products where color performance in fat-based systems matters.",
        considerations: [
            "Fat compatibility",
            "Color dispersion",
            "Processing temperature",
            "Finished-product consistency",
        ],
        accent: "bg-brand-brown",
    },
];

export default function ApplicationsPage() {
    return (
        <main className="min-h-screen bg-neutral-white text-neutral-gray-900">
            <header className="border-b border-neutral-gray-200 bg-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
                    <Link href="/" className="text-2xl font-bold">
                        <span className="text-brand-red">Techno</span>
                        <span className="text-brand-brown">GFS</span>
                    </Link>

                    <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
                        <Link href="/products" className="hover:text-brand-red">
                            Products
                        </Link>
                        <Link href="/applications" className="text-brand-red">
                            Applications
                        </Link>
                        <Link href="/customization" className="hover:text-brand-red">
                            Customization
                        </Link>
                        <Link href="/support" className="hover:text-brand-red">
                            Support
                        </Link>
                        <Link href="/about" className="hover:text-brand-red">
                            About Us
                        </Link>
                    </nav>

                    <Link
                        href="/contact"
                        className="rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-brown"
                    >
                        Contact Us
                    </Link>
                </div>
            </header>

            <section className="bg-neutral-gray-50">
                <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
                    <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
                        Applications
                    </p>

                    <h1 className="mt-3 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
                        Color performance starts with understanding the application.
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-gray-800">
                        Different food products create different technical requirements.
                        Our approach begins with understanding where and how the color
                        will be used.
                    </p>
                </div>
            </section>

            <section className="bg-white py-20 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2">
                        {applications.map((application) => (
                            <article
                                key={application.name}
                                className="rounded-3xl border border-neutral-gray-200 p-8"
                            >
                                <div
                                    className={`mb-7 h-3 w-20 rounded-full ${application.accent}`}
                                />

                                <h2 className="text-3xl font-bold">{application.name}</h2>

                                <p className="mt-4 leading-7 text-neutral-gray-800">
                                    {application.description}
                                </p>

                                <h3 className="mt-8 text-sm font-bold uppercase tracking-wider text-brand-brown">
                                    Application considerations
                                </h3>

                                <ul className="mt-4 space-y-3">
                                    {application.considerations.map((item) => (
                                        <li key={item} className="flex gap-3 text-neutral-gray-800">
                                            <span className="font-bold text-brand-red">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-brand-orange py-20">
                <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
                    <h2 className="text-3xl font-bold text-brand-brown sm:text-4xl">
                        Have a specific application?
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-brand-brown/80">
                        Share your product and processing requirements with our team.
                    </p>

                    <Link
                        href="/contact"
                        className="mt-8 inline-flex rounded-full bg-brand-brown px-7 py-3.5 font-semibold text-white hover:bg-brand-red"
                    >
                        Talk to Our Team
                    </Link>
                </div>
            </section>
        </main>
    );
}