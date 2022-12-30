import styles from './projects.module.css';
import Link from 'next/link';
import Script from 'next/script'
import PocketBase from 'pocketbase';


const pb = new PocketBase('http://127.0.0.1:8090/');


async function getProjects() {
    const resultList = await pb.collection('project').getFullList();
    return resultList;
}


export default async function ProjectsLoad() {
    const projects = await getProjects();

    return (
            <>  
                <h1>Projects/</h1>
                <div className={styles.projects}>
                    {
                    projects?.map((project) => {
                        return (<Project key={project.id} project={project} />); 
                    })}
                </div>
            </>
    );
}


function Project({ project }: any) {
    const { id, title, description} = project || {};
    return(
        <Link className={'hidden project'} href={`/projects/${id}`}>
            <div>
                <h2>{title}</h2>
                <h3>{description}</h3>
            </div>
        </Link>
    );
}