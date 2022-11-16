export default function Feedback({ message }: { message: string }) {
  return (
    <span
      role="alert"
      aria-label={message}
      className="block text-sm text-red-500">
      {message}
    </span>
  );
}
