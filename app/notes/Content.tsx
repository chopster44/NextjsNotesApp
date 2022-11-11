import styles from '../../styles/Notes.module.css';
import {ChangeEvent, useState} from "react";
import EditorBar from "./EditorBar";
import {useRouter} from "next/navigation";
import PocketBase from "pocketbase";

export default function Content({ data }: any) {
	const { title, content, id } = data || {};
	const [newTitle, changeTitle] = useState(title);
	const [newContent, changeContent] = useState(content);

	const router = useRouter();
	const client = new PocketBase('http://127.0.0.1:8090');

	const update = async () => {
		await client.records.update('notes1', id,{
			title: newTitle,
			content: newContent,
			hidden: false
		});

		changeContent(newContent);
		changeTitle(newTitle);

		router.refresh();
	}
	const cancel = () => {
		changeContent("");
		changeTitle("");
	}
	return (
		<form>
			<input
				type="text"
				value={newTitle}
				className={styles.titleInput}
				onChange={(e:ChangeEvent<HTMLInputElement>) => {changeTitle(e.target.value)}}
			/>
			<textarea
				value={newContent}
				className={styles.contentEditorInput}
				onChange={(e:ChangeEvent<HTMLTextAreaElement>) => {changeContent(e.target.value)}}
			/>
			<EditorBar create={update} cancel={cancel}/>
		</form>
	);
}
