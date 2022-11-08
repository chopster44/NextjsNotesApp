'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';
import PocketBase from "pocketbase";
import styles from "../../styles/Notes.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";


export default function CreateNote() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const router = useRouter();
	const client = new PocketBase('http://127.0.0.1:8090');

	const create = async () => {
		const record = await client.records.create('notes1', {
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
		<form onSubmit={create} className={styles.note}>
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
			<button type="submit" className={styles.create}>
				<FontAwesomeIcon icon={faCheck} />
			</button>
			<button type="button" onClick={cancel} className={styles.create}>
				<FontAwesomeIcon icon={faXmark} />
			</button>
		</form>
	);
}