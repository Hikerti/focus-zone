import LinkToEmail from "@/components-primary/shared/ui/linkToEmail";
import { ProfileDescriptionProps } from "../interface/inetrface";
import LinkToMap from "@/components-primary/shared/ui/linkToMap";
import LinkToTel from "@/components-primary/shared/ui/linkToTel";

export default function ProfileDescription({email, adress, description, phone}: ProfileDescriptionProps) {
    return (
      <>
        <div className="h-full flex flex-col justify-between">
            <LinkToEmail theme={'dark'} content={email}></LinkToEmail>
            <LinkToMap theme={'dark'} content={adress}></LinkToMap>
            <LinkToTel theme={'dark'} content={phone}></LinkToTel>
        </div>
        <div>
            {description}
        </div>
      </>
    );
  }