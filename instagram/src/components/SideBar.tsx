import { User } from "@/model/user";
import Avatar from "./ui/Avatar";

type Props = {
  user: User;
};

const SideBar = ({ user: { name, username, image } }: Props) => {
  return (
    <>
      <div className="flex items-center">
        {image && <Avatar image={image} />}
        <div className="ml-4">
          <p className="font-bold">{username}</p>
          <p className="text-lg leading-4 text-neutral-500">{name}</p>
        </div>
      </div>
      <p className="mt-8 text-sm text-neutral-500">
        About / Help / Press / API / Job / Privacy / Terms / Location / Language
      </p>
      <p className="mt-8 text-sm font-bold text-neutral-500">
        @Copyright INSTANT from dongmin
      </p>
    </>
  );
};

export default SideBar;
