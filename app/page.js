import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2>Home is my Next.js first app</h2>
      <Link href="/about">About</Link>
      <br />
      <Link href="/posts/1">Posts1</Link>
      <br />
      <Link href="/posts/2">Posts2</Link>
    </>
  );
}
