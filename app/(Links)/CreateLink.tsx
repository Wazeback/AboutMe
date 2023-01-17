'use client'
import { useState } from "react"
import { CreateLinkController } from './LinkController'
import { FileInput } from "flowbite-react"


export default function CreateLinkMenu() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const [image, setImage] = useState("");


    return (
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <form method="post" encType={"multipart/form-data"}>
            <div className="form-group mb-6">
            <input 
                value={title}
                onChange={event => { setTitle(event.target.value)}}
                type="text" className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput90"
                placeholder="title"/>
            </div>
            <div className="form-group mb-6">
            <input 
                value={url}
                onChange={event => { setUrl(event.target.value)}}
                type="text" className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput90"
                placeholder="URL"/>
            </div>
            <div className="form-group mb-6">
            <input
                value={description}
                onChange={event => { setDescription(event.target.value)}}
                type="text" className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput91"
                placeholder="description"/>
            </div>
            <div className="form-group form-check text-center mb-6">
            <FileInput
                onChange={event => { setImage(event.target.value)}}
                id="file"
                helperText="Please select a background image this will help you quickly find your link"
            />
            </div>
            <button onClick={create => 
            {
                CreateLinkController(title, url ,description, image)
                setTitle("")
                setDescription("")
                setUrl("")
                setImage("")
            }}
            className="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">Create Link</button>
            </form>
        </div>
    )
}