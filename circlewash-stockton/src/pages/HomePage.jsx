import Hero from '../sections/Hero';
import Services from '../sections/Services';
import FreeDrying from '../sections/FreeDrying';
import Reviews from '../sections/Reviews';

function HomePage() {
  return (
    <>
      <Hero
        imageAlt="Circle Wash neon laundromat interior"
        title={(
          <>
            Coming
            <br />
            Winter 2026
          </>
        )}
        copy="Circle Wash is coming back in Winter 2026 with improved services and upgraded convenience. Our new payment system will support Epay, making laundry day easier than ever."
      />
      <Services />
      <FreeDrying />
      <Reviews />
    </>
  );
}

export default HomePage;
