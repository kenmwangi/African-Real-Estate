import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div>
      <section className="mx-auto mt-3 flex max-w-6xl flex-col items-center justify-center py-4">
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
      </section>
    </div>
  );
};

export default NotFoundPage;
