import Link from "next/link";

const customizationAreas = [
    {
        title: "Color Shade",
        description:
            "Develop or adjust a shade to align with your product, brand identity or target visual appearance.",
    },
    {
        title: "Color Intensity",
        description:
            "Adjust color strength to achieve the required visual effect within your application.",
    },
    {
        title: "Application Requirements",
        description:
            "Consider the product matrix, processing conditions and other factors that influence color performance.",
    },
    {
        title: "Special Color Ranges",
        description:
            "Explore application-specific color ranges when standard solutions do not fully meet your requirements.",
    },
];

export default function CustomizationPage() {
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
                        <Link href="/applications" className="hover:text-brand-red">
                            Applications
                        </Link>
                        <Link href="/customization" className="text-brand-red">
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

            <section className="bg-brand-brown text-white">
                <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
                    <p className="text-sm font-bold uppercase tracking-widest text-brand-yellow">
                        Customization
                    </p>

                    <h1 className="mt-3 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
                        Your product is unique. Your color solution can be too.
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
                        We work with food manufacturers to understand their application
                        requirements and identify color solutions suited to their product.
                    </p>
                </div>
            </section>

            <section className="bg-white py-20 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-6 sm:grid-cols-2">
                        {customizationAreas.map((area, index) => (
                            <article
                                key={area.title}
                                className="rounded-3xl border border-neutral-gray-200 p-8 shadow-sm"
                            >
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-yellow text-xl font-bold text-brand-brown">
                                    {index + 1}
                                </div>

                                <h2 className="text-2xl font-bold">{area.title}</h2>

                                <p className="mt-4 leading-7 text-neutral-gray-800">
                                    {area.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-neutral-gray-50 py-20">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Let's define your color requirement
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-neutral-gray-800">
                        Tell us about your product, target shade, application and
                        processing conditions.
                    </p>

                    <Link
                        href="/contact"
                        className="mt-8 inline-flex rounded-full bg-brand-red px-7 py-3.5 font-semibold text-white hover:bg-brand-brown"
                    >
                        Start a Discussion
                    </Link>
                </div>
            </section>
        </main>
    );
}