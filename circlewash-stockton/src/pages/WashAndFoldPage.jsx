import Hero from '../sections/Hero';
import WashFold from '../sections/WashFold';
import FAQ from '../sections/FAQ';

function WashAndFoldPage() {
  return (
    <>
      <Hero
        image="washFold"
        imageAlt="Folded laundry and towels"
        title="How Wash & Fold Works"
        copy="Your Laundry Helps Local Families Thrive."
        titleVariant="h2"
        sectionClassName="washFoldHero"
        imageClassName="washFoldHeroImg"
        contentClassName="washFoldHeroCopy"
        titleClassName=""
        copyClassName=""
      />
      <WashFold />
      <FAQ />
    </>
  );
}

export default WashAndFoldPage;
