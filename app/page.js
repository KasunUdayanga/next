// import Image from "next/image";
import Link from "next/link";
import Layout from "./navigation";


export default function Home() {
	return (
		<Layout>
			<h1 className="text-3xl font-bold mb-6">Welcome to our Homepage</h1>
			<Link href="/about">Go to About Page</Link><br />
			<Link href="/posts/1">Go to Post 1</Link><br />
			<Link href="/posts/2">Go to Post 2</Link>
			<p>Your API Key is : {process.env.NEXT_PUBLIC_API_KEY}</p>
		</Layout>
	);
}
