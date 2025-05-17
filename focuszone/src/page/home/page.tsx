import CaruseleCafe from "./components/caruseleCafe.tsx";
import SectionHello from "./components/sectionHello";
import FullForm from "@/components-primary/widgets/forms/fullFrom/fullForm.tsx";
const HomePage = () => {
    const login = localStorage.getItem("login");

  return (
    <>
      <SectionHello></SectionHello>
      <CaruseleCafe></CaruseleCafe>
        {Boolean(!login) &&
            <FullForm></FullForm>
        }
    </>
  );
}

export default HomePage;