import { ReactElement } from "react";

interface HeaderBtn {
  icon: ReactElement;
  tooltip:string;
  handle?: () => void;
}
function HeaderBtn({ icon, tooltip, handle }: HeaderBtn) {
  return (
    <div className="btn" onClick={handle} title={tooltip}>
      {icon}
    </div>
  );
}

export default HeaderBtn;
