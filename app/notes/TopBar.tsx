'use client'

import styles from "../../styles/Notes.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMaximize, faXmark } from "@fortawesome/free-solid-svg-icons";
import PocketBase from 'pocketbase';
import { useRouter } from "next/navigation";

export default function TopBar({ id }: any) {
	const router = useRouter();

	const hide = async () => {
		const client = new PocketBase('http://127.0.0.1:8090');
		const record = await client.records.update('notes1', id, {
			hidden: true
		});
		router.refresh();
	}

  return (
	<div className={styles.bar}>
		<Link href={`/notes/${id}`} className={styles.barItem}>
			<FontAwesomeIcon icon={faWindowMaximize} />
		</Link>
		<button onClick={hide} className={styles.barItem}>
			<FontAwesomeIcon icon={faXmark}  />
		</button>
	</div>
  );
}
