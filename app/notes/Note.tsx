'use client';

import styles from "../../styles/Notes.module.css";
import TopBar from "./TopBar";

let editing = false;

export default function Note({ note }: any) {
	const { id, title, content } = note || {};
  
	const makeEditable = () => {
		editing = true;
	}

	let data = {editing, title, content};
	return (
	  <div className={styles.note}>
		<TopBar id={id} />
		<div onClick={makeEditable}>
			<Content data={data}/>
		</div>
	  </div>
	);
}

function Content({data} : any) {
	const { editing, title, content} = data || {};

	if(editing) {
		return (
			<p>Not made yet</p>
		)
	} else {
		return (
			<div>
				<h2>{title}</h2>
				<h5>{content}</h5>
			</div>
		)
	}
}