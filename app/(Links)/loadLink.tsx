import PocketBase from 'pocketbase';
import HomePageLink from './Link';
import CreateLinkMenu from './CreateLink'
const pb = new PocketBase('http://127.0.0.1:8090');


async function awaitRecords() {
    const waitrecords = await pb.collection('link').getFullList(200 /* batch size */, {
        sort: '-created',
    });
	return waitrecords
}

export default async function MainLinks() {
	const records = await awaitRecords();
	
	return (
        
	<>
		{records.length > 0  ? records.map((Data, i) => {
			const url = pb.getFileUrl(Data, Data.image, {'thumb': '100x50'});
			return (
				<HomePageLink key={i +"homePageLink"} imgUrl={url} info={Data}/>
			)
		}): <h1>You dont seem do have any sprint do you want to add one?</h1>}
		<CreateLinkMenu/>
	</>	
	);
}