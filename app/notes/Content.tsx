import styles from '../../styles/Notes.module.css';
import {ChangeEvent, useState} from "react";
import EditorBar from "./EditorBar";
import {useRouter} from "next/navigation";
import {db} from "./page";

export default function Content({ data }: any) {
	const { title, content, id } = data || {};
	const [newTitle, changeTitle] = useState(title);
	const [newContent, changeContent] = useState(content);

	const router = useRouter();

	const update = async () => {
		await fetch(`${db.route}/api/collections/${db.collectionName}/records/${id}`, {
			method: "PATCH",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				title: newTitle,
				content: newContent,
			}),
		});

		changeContent(newContent);
		changeTitle(newTitle);

		router.refresh();
	}
	const cancel = () => {
		changeContent(content);
		changeTitle(title);
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
