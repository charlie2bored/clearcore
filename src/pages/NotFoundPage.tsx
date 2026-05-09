import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 py-32 bg-bone text-center">
      <div>
        <span className="font-display text-[20vw] md:text-[10vw] text-mist leading-none">
          404
        </span>
        <h1 className="font-display uppercase text-ink text-[10vw] md:text-[4vw] leading-[0.95] mt-4">
          That bar's not here.
        </h1>
        <p className="mt-4 text-ink/70 max-w-md mx-auto">
          The page you're looking for doesn't exist — but the chocolate one
          does.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-block bg-ink text-bone font-display tracking-[0.18em] uppercase text-sm px-10 py-4 rounded-full hover:bg-sage transition-colors"
          >
            Back home
          </Link>
          <Link
            to="/flavors"
            className="inline-block border border-ink text-ink font-display tracking-[0.18em] uppercase text-sm px-10 py-4 rounded-full hover:bg-ink hover:text-bone transition-colors"
          >
            See flavors
          </Link>
        </div>
      </div>
    </section>
  );
}
