interface MessageBarProps {
  type: "success" | "error" | "info" | null;
  txt: string;
}

function MessageBar({ type, txt }: MessageBarProps) {
  return (
    <div data-type={type} className="message">
      {txt}
    </div>
  );
}

export default MessageBar;
