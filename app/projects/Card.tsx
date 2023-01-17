'use client'
import Link from 'next/link';

import { Card } from 'flowbite-react';

export default function Project({ project}: any) {
    return(
        
            <div className="hidden project">
                 <Link href={`/projects/${project.id}`}>
                    <Card
                    horizontal={true}
                    imgSrc="https://www.alternateending.com/wp-content/uploads/2021/01/FkgA8CcmiLJGVCRYRQ2g2UfVtF.jpeg">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {project.title}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            {project.description}
                        </p>
                    </Card>
                </Link>
            </div>
        
    )
}