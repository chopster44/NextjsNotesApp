import styles from "../../styles/Notes.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMaximize, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import {db} from "./page";

export default function TopBar(props:any) {
	const router = useRouter();

	const hide = async () => {
		await fetch(`${db.route}/api/collections/${db.collectionName}/records/${props.id}`, {
			method: "PATCH",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({
				hidden: true,
			}),
		});

		router.refresh();
	}

  return (
	<div className={styles.bar}>
		<Link href={`/notes/${props.id}`} className={styles.barItem}>
			<FontAwesomeIcon icon={faWindowMaximize} />
		</Link>
		<button onClick={hide} className={styles.barItem}>
			<FontAwesomeIcon icon={faXmark}  />
		</button>
	</div>
  );
}
