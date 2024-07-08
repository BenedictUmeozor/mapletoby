const LoadingIndicator = ({ text = "Loading" }: { text?: string }) => {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      <span className="heading-6-lg font-semibold">{text}</span>
      <div className="dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};
export default LoadingIndicator;
