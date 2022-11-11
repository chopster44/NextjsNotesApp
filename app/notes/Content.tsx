export default function Content({ data }: any) {
	const { title, content } = data || {};
	return (
		<div>
			<h2>{title}</h2>
			<h5>{content}</h5>
		</div>
	);
}
