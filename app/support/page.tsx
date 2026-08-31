import Link from "next/link";

const capabilities = [
  {
    title: "Application Matching",
    description:
      "We help identify suitable color solutions based on your food application and processing conditions.",
  },
  {
    title: "Color Customization",
    description:
      "Color shade, intensity and formulation can be adapted to meet specific product requirements.",
  },
  {
    title: "Stability Review",
    description:
      "Technical review helps assess color performance and stability throughout the product process.",
  },
  {
    title: "Dosage Guidance",
    description:
      "Practical guidance helps you work toward the desired shade while optimizing color usage.",
  },
  {
    title: "Application Samples",
    description:
      "Evaluate color solutions in relevant application contexts before moving toward production.",
  },
  {
    title: "Scale-Up Support",
    description:
      "Technical feedback supports the transition from development and testing to commercial production.",
  },
];

export default function SupportPage() {
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
            <Link href="/support" className="text-brand-red">
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
            Technical Support
          </p>

          <h1 className="mt-3 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
            Practical support from development to production.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-gray-800">
            Selecting a food color is only one part of the process. We support
            customers with application-focused technical guidance throughout
            product development.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="rounded-2xl border border-neutral-gray-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-5 h-10 w-10 rounded-xl bg-brand-orange/20" />

                <h2 className="text-xl font-bold">{capability.title}</h2>

                <p className="mt-3 leading-6 text-neutral-gray-800">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-brown py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Need technical guidance?
          </h2>

          <p className="mt-5 text-lg text-white/80">
            Tell us about your product and we'll help you identify the next
            steps.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-brand-yellow px-7 py-3.5 font-semibold text-brand-brown hover:bg-white"
          >
            Contact Technical Team
          </Link>
        </div>
      </section>
    </main>
  );
}