export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full mt-24 mb-24 max-w-[960px] mx-auto max-[960px]:px-4">
      {children}
    </div>
  );
}
