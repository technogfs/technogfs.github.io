import Link from "next/link";

export default function AboutPage() {
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
                        <Link href="/customization" className="hover:text-brand-red">
                            Customization
                        </Link>
                        <Link href="/support" className="hover:text-brand-red">
                            Support
                        </Link>
                        <Link href="/about" className="text-brand-red">
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
                        About TechnoGFS
                    </p>

                    <h1 className="mt-3 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
                        Food color solutions built around real applications.
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
                        TechnoGFS develops food color solutions for manufacturers looking
                        for consistent, application-focused and customizable color
                        solutions.
                    </p>
                </div>
            </section>

            <section className="bg-white py-20 lg:py-24">
                <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
                            Our Approach
                        </p>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Start with the product, not just the color.
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg leading-8 text-neutral-gray-800">
                        <p>
                            Food color performance depends on the product in which it is
                            used. Processing conditions, ingredients, dosage and the desired
                            visual result can all influence the final outcome.
                        </p>

                        <p>
                            Our approach is therefore application-focused. We work to
                            understand the customer's product requirements and identify a
                            practical color solution for that application.
                        </p>

                        <p>
                            This approach allows TechnoGFS to support customers beyond simply
                            supplying a color ingredient.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-neutral-gray-50 py-20 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-3xl bg-white p-8 shadow-sm">
                            <h3 className="text-xl font-bold">Application Focus</h3>
                            <p className="mt-4 leading-7 text-neutral-gray-800">
                                Solutions are considered in the context of the food product
                                where they will actually be used.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-white p-8 shadow-sm">
                            <h3 className="text-xl font-bold">Customization</h3>
                            <p className="mt-4 leading-7 text-neutral-gray-800">
                                We work with customers to address specific shade, intensity
                                and application requirements.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-white p-8 shadow-sm">
                            <h3 className="text-xl font-bold">Technical Support</h3>
                            <p className="mt-4 leading-7 text-neutral-gray-800">
                                Our support extends from initial evaluation through application
                                testing and scale-up.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-brand-red py-20 text-white">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Let's work together.
                    </h2>

                    <p className="mt-5 text-lg text-white/85">
                        Tell us about your product and color requirements.
                    </p>

                    <Link
                        href="/contact"
                        className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 font-semibold text-brand-red hover:bg-brand-yellow hover:text-brand-brown"
                    >
                        Contact TechnoGFS
                    </Link>
                </div>
            </section>
        </main>
    );
}