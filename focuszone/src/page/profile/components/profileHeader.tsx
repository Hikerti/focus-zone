import AvatarComponent from "@/components-primary/shared/ui/avatar";
import { ProfileHeaderProps } from "../interface/inetrface";
export default function ProfileHeader({name, surname, login}: ProfileHeaderProps) {
    return (
      <>
        <div className="flex items-center h-[100px] gap-10">
            <AvatarComponent size="w-[100px] h-[100px]"></AvatarComponent>
            <div className="h-full flex flex-col justify-between">
              <p>{name}</p>
              <p>{surname}</p>
              <p>{login}</p>
            </div>
        </div>
      </>
    );
  }