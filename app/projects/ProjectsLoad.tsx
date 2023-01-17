import styles from './projects.module.css';
import Script from 'next/script'
import PocketBase from 'pocketbase';
import Project from './Card';


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

