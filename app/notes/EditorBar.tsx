import styles from "../../styles/Notes.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

interface createCancel {
	create: () => void,
	cancel: () => void,
}

export default function EditorBar({ create, cancel }: createCancel) {
	return(
		<div>
			<button type="button" onClick={create} className={styles.create}>
				<FontAwesomeIcon icon={faCheck} />
			</button>
			<button type="button" className={styles.create} onClick={cancel}>
				<FontAwesomeIcon icon={faXmark} />
			</button>
		</div>
	)
}