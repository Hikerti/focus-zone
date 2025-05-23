import { useGetUser } from "@/helpers/store/storeUser";

import ProfileContent from "./widgets/profileContent/profileContent.tsx";

import FullForm from "@/components-primary/widgets/forms/fullFrom/fullForm";
import BgMainPage from "@/assets/images/bgformainpage.png";

export default function ProfilePage() {
  const users = useGetUser(state => state.users)

  return (
    <section
        className="
            relative z-50
            w-full
            flex
            flex-col items-center
        "
    >
        <img
            src={BgMainPage}
            alt="bg"
            className='
                absolute top-[-20px]
                w-screen h-[260px]
                object-cover
            '
        />
        <span
            className='
                absolute top-[-20px]
                w-screen h-[260px]
                bg-black
                opacity-60
             '
        />
    {
      (users?.length !== 0)
        ?
          <ProfileContent/>
        :
          <FullForm/>
    }
    </section>
  );
}
