import LoadLinktree from './LoadLinktree';
import ClientComp from '../projects/ClientComp';
import '../globals.css';

export default function HomePage() {
	return (
        <ClientComp>
            <LoadLinktree></LoadLinktree> 
        </ClientComp>
	);    
}