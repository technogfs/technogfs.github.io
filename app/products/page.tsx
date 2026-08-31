import Link from "next/link";

const productCategories = [
    {
        name: "Beverage Colors",
        description:
            "Color solutions developed for clear, flavored and functional beverage applications, with attention to shade, intensity and processing conditions.",
        applications: ["Soft drinks", "Juices", "Functional beverages", "Flavored drinks"],
        accent: "bg-brand-red",
    },
    {
        name: "Ice Cream Colors",
        description:
            "Color formulations designed for frozen dairy and dessert products, helping achieve attractive and consistent results.",
        applications: ["Ice cream", "Frozen desserts", "Dairy desserts", "Water-based frozen products"],
        accent: "bg-brand-orange",
    },
    {
        name: "Confectionery Colors",
        description:
            "Vibrant and consistent color solutions for candies, coatings, fillings and other confectionery applications.",
        applications: ["Candies", "Coatings", "Fillings", "Gummies"],
        accent: "bg-brand-yellow",
    },
    {
        name: "Fat-Based Colors",
        description:
            "Application-focused solutions for products where color performance in fat-based systems is particularly important.",
        applications: ["Chocolate", "Fat-based fillings", "Bakery products", "Compound coatings"],
        accent: "bg-brand-brown",
    },
];

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-neutral-white text-neutral-gray-900">
            <header className="border-b border-neutral-gray-200 bg-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
                    <Link href="/" className="text-2xl font-bold tracking-tight">
                        <span className="text-brand-red">Techno</span>
                        <span className="text-brand-brown">GFS</span>
                    </Link>

                    <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
                        <Link href="/products" className="text-brand-red">
                            Products
                        </Link>
                        <Link href="/applications" className="hover:text-brand-red">
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
                    <div className="max-w-3xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
                            Our Products
                        </p>

                        <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-6xl">
                            Food color solutions for different applications.
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-neutral-gray-800">
                            TechnoGFS develops food color solutions with the application,
                            processing conditions and desired visual result in mind.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white py-20 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-6 md:grid-cols-2">
                        {productCategories.map((product) => (
                            <article
                                key={product.name}
                                className="rounded-3xl border border-neutral-gray-200 bg-neutral-white p-8 shadow-sm"
                            >
                                <div className={`mb-6 h-3 w-20 rounded-full ${product.accent}`} />

                                <h2 className="text-2xl font-bold">{product.name}</h2>

                                <p className="mt-4 leading-7 text-neutral-gray-800">
                                    {product.description}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {product.applications.map((application) => (
                                        <span
                                            key={application}
                                            className="rounded-full bg-neutral-gray-100 px-3 py-1.5 text-sm text-neutral-gray-800"
                                        >
                                            {application}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-brand-brown py-20 text-white">
                <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Looking for a specific color solution?
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-white/80">
                        Tell us about your product and application. We can discuss the
                        appropriate color solution and customization requirements.
                    </p>

                    <Link
                        href="/contact"
                        className="mt-8 inline-flex rounded-full bg-brand-yellow px-7 py-3.5 font-semibold text-brand-brown hover:bg-white"
                    >
                        Discuss Your Requirement
                    </Link>
                </div>
            </section>
        </main>
    );
}
