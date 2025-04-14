import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function UserIcon() {
  return (
    <div className=" text-2xl rounded-full">
      <FontAwesomeIcon icon={faUser} className=""/>
    </div>
  );
}
