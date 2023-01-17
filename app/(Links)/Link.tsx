'use client'
import { Card } from 'flowbite-react'

export default function HomePageLink(props: any) {
    return(
            <div className={"!bg-cover border border-gray-200 rounded-lg shadow-md"} style={{background: `url(${props.imgUrl})`,}}>
                <a  href={ props.info.url } className="backdrop-blur-sm bg-grey-500/50 block max-w-sm p-6 rounded-lg">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> { props.info.title }</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{ props.info.description }</p>
                </a>
            </div>
    )
}