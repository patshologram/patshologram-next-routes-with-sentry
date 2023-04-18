// specific service header
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>HEADER</h1>
      <main style={{flexGrow: '1'}}>{children}</main>
      <h1>FOOTER</h1>
    </>
  );
}
