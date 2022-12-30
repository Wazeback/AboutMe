import Link from 'next/link';
import '../globals.css';


export default function LoadLinktree() {
	return (
	  <div className="linkTree">
	  <h1>Link Tree/</h1>
		<Link className={"linkTreeBlock animateBorder hidden"} href="https://www.youtube.com/@wazebackmusic">    
              YouTube Music
        </Link>
		<Link className={"linkTreeBlock animateBorder hidden"} href="https://stackoverflow.com/users/13576547/wazeback">    
              Stack Overflow
        </Link>
		<Link className={"linkTreeBlock animateBorder hidden"} href="https://www.instagram.com/wazeback/">    
              Instagram
        </Link>
		<Link className={"linkTreeBlock animateBorder hidden"} href="https://github.com/Wazeback">    
              GitHub
        </Link>
		<Link className={"linkTreeBlock animateBorder hidden"} href="/">    
              About Me
        </Link>
	  </div>
	);
}