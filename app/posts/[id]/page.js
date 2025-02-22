import { posts } from "@/app/data/posts";
import styles from "./Post.module.css";
import Layout from "@/app/navigation";

export default function Post({ params }) {
	// const post = posts.find((post) => post.id === params.id);
	const post = posts.find((post) => post.id === parseInt(params.id));

	if (!post) {
		return <h1>Post not found!</h1>;
	}

	return (
		<Layout>
			<main className={styles.container}>
				<h1 className={styles.title}>{post.title}</h1>
				<p className={styles.content}>{post.content}</p>
				<p>Your API Key is : {process.env.NEXT_PUBLIC_API_KEY}</p>
			</main>
		</Layout>
	);
}