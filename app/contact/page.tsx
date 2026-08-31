import Link from "next/link";

export default function ContactPage() {
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
                        <Link href="/about" className="hover:text-brand-red">
                            About Us
                        </Link>
                    </nav>

                    <Link
                        href="/contact"
                        className="rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white"
                    >
                        Contact Us
                    </Link>
                </div>
            </header>

            <section className="bg-neutral-gray-50">
                <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
                    <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
                        Contact
                    </p>

                    <h1 className="mt-3 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
                        Let's discuss your color requirements.
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-gray-800">
                        Tell us about your product, application and target color. Our team
                        can help you identify the right direction.
                    </p>
                </div>
            </section>

            <section className="bg-white py-20 lg:py-24">
                <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
                    <div>
                        <h2 className="text-3xl font-bold">Start a conversation</h2>

                        <p className="mt-5 text-lg leading-8 text-neutral-gray-800">
                            The more information you can provide about your product and
                            application, the better we can understand your requirements.
                        </p>

                        <div className="mt-10 space-y-6">
                            <div>
                                <h3 className="font-bold text-brand-brown">Product</h3>
                                <p className="mt-1 text-neutral-gray-800">
                                    What food or beverage product are you developing?
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-brand-brown">Application</h3>
                                <p className="mt-1 text-neutral-gray-800">
                                    What application and processing conditions are involved?
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-brand-brown">Color</h3>
                                <p className="mt-1 text-neutral-gray-800">
                                    What shade, intensity or visual result are you looking for?
                                </p>
                            </div>
                        </div>
                    </div>

                    <form className="rounded-3xl border border-neutral-gray-200 bg-neutral-gray-50 p-8 shadow-sm">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="text-sm font-semibold"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    className="mt-2 w-full rounded-xl border border-neutral-gray-300 bg-white px-4 py-3 outline-none focus:border-brand-red"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="company"
                                    className="text-sm font-semibold"
                                >
                                    Company
                                </label>
                                <input
                                    id="company"
                                    name="company"
                                    type="text"
                                    className="mt-2 w-full rounded-xl border border-neutral-gray-300 bg-white px-4 py-3 outline-none focus:border-brand-red"
                                    placeholder="Company name"
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label
                                htmlFor="email"
                                className="text-sm font-semibold"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="mt-2 w-full rounded-xl border border-neutral-gray-300 bg-white px-4 py-3 outline-none focus:border-brand-red"
                                placeholder="you@company.com"
                            />
                        </div>

                        <div className="mt-6">
                            <label
                                htmlFor="application"
                                className="text-sm font-semibold"
                            >
                                Application
                            </label>

                            <select
                                id="application"
                                name="application"
                                className="mt-2 w-full rounded-xl border border-neutral-gray-300 bg-white px-4 py-3 outline-none focus:border-brand-red"
                            >
                                <option value="">Select an application</option>
                                <option value="beverages">Beverages</option>
                                <option value="ice-cream">Ice Cream</option>
                                <option value="confectionery">Confectionery</option>
                                <option value="fat-based">Fat-Based Foods</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="mt-6">
                            <label
                                htmlFor="message"
                                className="text-sm font-semibold"
                            >
                                Tell us about your requirement
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                className="mt-2 w-full rounded-xl border border-neutral-gray-300 bg-white px-4 py-3 outline-none focus:border-brand-red"
                                placeholder="Describe your product, target color and requirements..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-6 w-full rounded-full bg-brand-red px-6 py-3.5 font-semibold text-white transition hover:bg-brand-brown"
                        >
                            Send Inquiry
                        </button>

                        <p className="mt-4 text-center text-xs text-neutral-gray-600">
                            This form is currently a static interface. Connect it to your
                            preferred form or backend service before production.
                        </p>
                    </form>
                </div>
            </section>
        </main>
    );
}
