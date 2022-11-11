'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';
import PocketBase from "pocketbase";
import styles from "../../styles/Notes.module.css";
import EditorBar from "./EditorBar";


export default function CreateNote() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const router = useRouter();
	const client = new PocketBase('http://127.0.0.1:8090');

	const create = async () => {
		await client.records.create('notes1', {
			title: title,
			content: content,
			hidden: false
		});

		setContent("");
		setTitle("");

		router.refresh();
	}
	const cancel = () => {
		setContent("");
		setTitle("");
	}

	return (
		<form className={styles.note}>
			<input
				type="text"
				placeholder="New Note Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				className={styles.titleInput}
			/>
			<textarea
				placeholder="New Note content"
				value={content}
				onChange={(e) => setContent(e.target.value)}
				className={styles.contentInput}
			/>
			<EditorBar create={create} cancel={cancel} />
		</form>
	);
}