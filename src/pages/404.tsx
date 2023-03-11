import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        <article className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-gray-900">
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </article>
      </div>
      {/* <section className="mx-auto mt-3 flex max-w-6xl flex-col items-center justify-center py-4">
        <h3 className="py-10 text-center text-xl font-bold uppercase leading-10 text-slate-700 md:text-2xl lg:text-3xl">
          Ooops!, wrong address. The requested page does not exists.
        </h3>
        <Image
          width={450}
          height={300}
          src="/error-404.png"
          alt="Page Not Found"
        />
        <Link
          href="/"
          className="hover:cursor mb-16 rounded-full bg-indigo-600 py-3 px-7 font-semibold tracking-tight text-white transition-colors hover:cursor-pointer hover:bg-indigo-700 focus:outline-none lg:tracking-widest"
        >
          Go Home
        </Link>
      </section> */}
    </section>
  );
};

export default NotFoundPage;
