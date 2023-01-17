import ClientComp from "./ClientComp"
import ProjectsLoad from "./ProjectsLoad";
import '../globals.css';


export default function Page() {
    return (
        <ClientComp>
        {/* @ts-expect-error Server Component */}
            <ProjectsLoad/>
        </ClientComp>
    );
  }