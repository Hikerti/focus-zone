import CaruselCafe from "./components/caruselCafe";
import SectionHello from "./components/sectionHello";
import FullForm from "@/components-primary/widgets/forms/fullFrom/fullForm.tsx";
const HomePage = () => {
  return (
    <>
      <SectionHello></SectionHello>
      <CaruselCafe></CaruselCafe>
        <FullForm></FullForm>
    </>
  );
}

export default HomePage;