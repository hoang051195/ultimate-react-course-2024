import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./hooks/useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

export default function Logout() {
  const { isLoading, logout } = useLogout();

  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}
