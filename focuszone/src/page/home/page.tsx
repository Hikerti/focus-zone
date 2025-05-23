import SectionHello from "./entites/sectionHello/sectionHello.tsx";

import FullForm from "@/components-primary/widgets/forms/fullFrom/fullForm.tsx";

import CarouselCafe from "./widgets/carouselCafe/carouselCafe.tsx";
import {useGetUser} from "@/helpers/store/storeUser";

const HomePage = () => {
    const login = localStorage.getItem("login");
    const users = useGetUser(state => state.users);

  return (
    <>
      <SectionHello/>
      <CarouselCafe/>
        {login == 'false' || users?.length == 0 &&
            <FullForm/>
        }
    </>
  );
}

export default HomePage;