import { useGetUser } from "@/helpers/store/storeUser";
import ProfileContent from "./components/proofileContent";
import FullForm from "@/components-primary/widgets/forms/fullFrom/fullForm";

export default function ProfilePage() {
  const users = useGetUser(state => state.users)

  return (
    <>
    {
      (users.length !== 0)
        ?
          <ProfileContent></ProfileContent>
        :
          <FullForm></FullForm>
    }
    </>
  );
}
