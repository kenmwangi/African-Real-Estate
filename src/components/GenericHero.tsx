import React from "react";
interface GenericHeroProps {
  title: string;
  description?: string;
}

const GenericHero = ({ title, description }: GenericHeroProps) => {
  return (
    <section className="bg-brand-accents relative">
      <article className="relative mx-auto max-w-6xl pt-16 pb-10 md:pt-20">
        <h1 className="text-center text-3xl uppercase leading-10">{title}</h1>
        {description && (
          <p className="mt-2 text-center text-gray-700">{description}</p>
        )}
      </article>
      <article
        className="h-24 w-full bg-cover bg-bottom"
        style={{ backgroundImage: "url('/photos/subhero-bg.jpg)" }}
      ></article>
    </section>
  );
};

export default GenericHero;
