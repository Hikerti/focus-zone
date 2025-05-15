import AvatarComponent from "@/components-primary/shared/ui/avatar.tsx";
import { ProfileHeaderProps } from "../../interface/inetrface.ts";
export default function ProfileHeader({name, surname, login}: ProfileHeaderProps) {
    return (
      <>
        <div className="flex items-center h-[100px] gap-2">
            <AvatarComponent size="w-[100px] h-[100px]"></AvatarComponent>
            <div className="h-full flex flex-col">
              <h4>{name + " " + surname}</h4>
              <h4>{login}</h4>
            </div>
        </div>
      </>
    );
  }