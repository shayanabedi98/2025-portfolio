export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[960px] mx-auto max-xl:px-4">
      {children}
    </div>
  );
}
