import Image from "next/image";
import Link from "next/link";

const applications = [
  {
    name: "Beverages",
    description:
      "Color solutions designed for clear, flavored and functional beverage applications.",
    accent: "bg-brand-red",
  },
  {
    name: "Ice Cream",
    description:
      "Color formulations designed to perform reliably across frozen dairy and dessert applications.",
    accent: "bg-brand-orange",
  },
  {
    name: "Confectionery",
    description:
      "Vibrant and consistent colors for candies, coatings, fillings and other confectionery products.",
    accent: "bg-brand-yellow",
  },
  {
    name: "Fat-Based Foods",
    description:
      "Application-focused solutions for products where color performance in fat-based systems matters.",
    accent: "bg-brand-brown",
  },
];

const capabilities = [
  {
    title: "Application Matching",
    description:
      "We help identify the right color solution for your specific food application and processing conditions.",
  },
  {
    title: "Color Customization",
    description:
      "Color range, intensity and formulation can be adapted to meet your product requirements.",
  },
  {
    title: "Stability Review",
    description:
      "Technical review helps assess color performance and stability throughout your product process.",
  },
  {
    title: "Dosage Guidance",
    description:
      "Practical guidance helps you achieve the desired shade while optimizing color usage.",
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

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-white text-neutral-gray-900">
      {/* Header */}
      <header className="border-b border-neutral-gray-200 bg-neutral-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            <span className="text-brand-red">Techno</span>
            <span className="text-brand-brown">GFS</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link
              href="/products"
              className="transition-colors hover:text-brand-red"
            >
              Products
            </Link>

            <Link
              href="/applications"
              className="transition-colors hover:text-brand-red"
            >
              Applications
            </Link>

            <Link
              href="/customization"
              className="transition-colors hover:text-brand-red"
            >
              Customization
            </Link>

            <Link
              href="/support"
              className="transition-colors hover:text-brand-red"
            >
              Support
            </Link>

            <Link
              href="/about"
              className="transition-colors hover:text-brand-red"
            >
              About Us
            </Link>
          </nav>

          <Link
            href="/contact"
            className="rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-brown"
          >
            Contact Us
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-gray-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div
              className="mb-6 inline-flex items-center rounded-full bg-brand-yellow/30 px-4 py-2 text-sm font-semibold text-brand-brown">
              Food Color Solutions
            </div>

            <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-neutral-gray-900 sm:text-6xl lg:text-7xl">
              Color solutions,
              <span className="block text-brand-red">
                formulated for your application.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-gray-800">
              TechnoGFS develops food color solutions for beverages, ice cream,
              confectionery and fat-based products — with customization and
              technical support to help bring your product to life.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="rounded-full bg-brand-red px-7 py-3.5 text-center font-semibold text-white shadow-sm transition hover:bg-brand-brown"
              >
                Explore Products
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-brand-brown px-7 py-3.5 text-center font-semibold text-brand-brown transition hover:bg-brand-brown hover:text-white"
              >
                Talk to Our Experts
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-neutral-gray-800">
              <span>✓ Application-focused</span>
              <span>✓ Custom formulations</span>
              <span>✓ Technical support</span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] shadow-2xl">
              <Image
                src="/images/technogfs-hero.png"
                alt="TechnoGFS food color solutions"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
              Applications
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Color designed around your food product
            </h2>

            <p className="mt-4 text-lg leading-8 text-neutral-gray-800">
              Different food applications demand different color performance.
              Our solutions are developed with the application in mind.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((application) => (
              <Link
                key={application.name}
                href="/applications"
                className="group rounded-2xl border border-neutral-gray-200 bg-neutral-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`mb-6 h-3 w-16 rounded-full ${application.accent}`}
                />

                <h3 className="text-xl font-bold">{application.name}</h3>

                <p className="mt-3 text-sm leading-6 text-neutral-gray-800">
                  {application.description}
                </p>

                <span className="mt-6 inline-block text-sm font-semibold text-brand-red">
                  Discover application →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Customization */}
      <section className="bg-brand-brown py-20 text-white lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-yellow">
              Customization
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A color solution that fits your product
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/80">
              Your product may require a specific shade, higher color density,
              improved performance or a special color range. We work with you
              to adapt the formulation to your requirements.
            </p>

            <Link
              href="/customization"
              className="mt-8 inline-flex rounded-full bg-brand-yellow px-6 py-3 font-semibold text-brand-brown transition hover:bg-white"
            >
              Explore Customization
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Color shade",
              "Color intensity",
              "Application requirements",
              "Special color ranges",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/20 bg-white/10 p-6"
              >
                <div className="mb-5 h-10 w-10 rounded-full bg-brand-yellow"/>

                <h3 className="font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="bg-neutral-gray-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
              Technical Support
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              More than a color supplier
            </h2>

            <p className="mt-4 text-lg leading-8 text-neutral-gray-800">
              From initial product development to commercial production,
              TechnoGFS provides practical support throughout the process.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-gray-200"
              >
                <div className="mb-5 h-10 w-10 rounded-xl bg-brand-orange/20"/>

                <h3 className="text-lg font-bold">{capability.title}</h3>

                <p className="mt-3 text-sm leading-6 text-neutral-gray-800">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-red py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let's develop the right color for your product.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">
            Tell us about your application, target color and technical
            requirements. Our team can help identify the right solution.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 font-semibold text-brand-red transition hover:bg-brand-yellow hover:text-brand-brown"
          >
            Contact TechnoGFS
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-gray-900 py-10 text-white">
        <div
          className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <div className="text-xl font-bold">
              <span className="text-brand-red">Techno</span>GFS
            </div>

            <p className="mt-2 text-sm text-white/60">
              Food color solutions for your application.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-white/70">
            <Link href="/products" className="hover:text-white">
              Products
            </Link>

            <Link href="/about" className="hover:text-white">
              About
            </Link>

            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}