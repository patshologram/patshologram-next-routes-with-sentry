// global header for all services
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div id="__root" style={{ display: "flex", flexDirection: "column", minHeight: '100vh' }}>
        {children}
      </div>
    </>
  );
}
