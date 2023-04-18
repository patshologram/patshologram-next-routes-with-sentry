import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <>
      <h1>Hi :)</h1>
      <Link href={'/synthetic'}>synthetic error page</Link>
    </>
  );
}
