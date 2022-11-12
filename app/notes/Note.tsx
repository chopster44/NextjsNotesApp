'use client';

import styles from '../../styles/Notes.module.css';
import TopBar from './TopBar';
import Content from './Content';

export default function Note({ note }: any) {
	const { id, title, content, hidden } = note || {};
	const data = { title, content, id, hidden };
	return (
		<div className={styles.note}>
			<TopBar id={id} />
			<Content data={data} />
		</div>
	);
}
