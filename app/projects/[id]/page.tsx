import styles from '../projects.module.css';

async function getProject(projectId: string) {
  const res = await fetch(`http://127.0.0.1:8090/api/collections/project/records/${projectId}`, {next: { revalidate: 10 }});
  const data = await res.json();
  return data;
}

export default async function ProjectPage({ params }: any) {
  const project = await getProject(params.id);

  return (
    <div>
      <h1>projet/{project.id}</h1>
      <br/>
      <div className={styles.projectContainer}>
        <div className={styles.singleProject}>
          <h3>{project.title}</h3>
          <h5>{project.description}</h5>
        </div>
      </div>
    </div>
  );
}