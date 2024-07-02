export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-neutral-950 min-h-screen flex">
      <div className="max-w-6xl mx-auto bg-neutral-100 p-16 mt-20 w-full">
        {children}
      </div>
    </div>
  );
}
