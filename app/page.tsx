import MainLinks from './(Links)/loadLink';


export default function HomePage() {
	return (
	<div className={'flex mainLink'}>
        {/* @ts-expect-error Server Component */}
		<MainLinks/>
	</div>	
	);
}