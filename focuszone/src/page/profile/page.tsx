import { useGetUser } from "@/helpers/store/storeUser";
import ProfileContent from "./widgets/profileContent/profileContent.tsx";
import FullForm from "@/components-primary/widgets/forms/fullFrom/fullForm";

export default function ProfilePage() {
  const users = useGetUser(state => state.users)

  return (
    <div
        className="w-full flex flex-col items-center relative z-50"
    >
    {
      (users?.length !== 0)
        ?
          <ProfileContent/>
        :
          <FullForm/>
    }
    </div>
  );
}
