import Services from '../sections/Services';
import FreeDrying from '../sections/FreeDrying';
import WashFold from '../sections/WashFold';
import FAQ from '../sections/FAQ';

function ServicesPage() {
  return (
    <>
      <Services showIntro />
      <FreeDrying />
      <WashFold />
      <FAQ />
    </>
  );
}

export default ServicesPage;
