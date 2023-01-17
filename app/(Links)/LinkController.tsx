import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export async function CreateLinkController(title: string, url: string, description: string, image: any) {
// example create data
const data = {
    "title": title,
    "url": url,
    "description": description,
    "image": image
};

console.log(data)

const record = await pb.collection('link').create(data);

}