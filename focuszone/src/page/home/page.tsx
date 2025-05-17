import SectionHello from "./entites/sectionHello/sectionHello.tsx";
import FullForm from "@/components-primary/widgets/forms/fullFrom/fullForm.tsx";
import CarouselCafe from "./widgets/carouselCafe/carouselCafe.tsx";
const HomePage = () => {
    const login = localStorage.getItem("login");

  return (
    <>
      <SectionHello></SectionHello>
      <CarouselCafe></CarouselCafe>
        {login == 'false' &&
            <FullForm></FullForm>
        }
    </>
  );
}

export default HomePage;