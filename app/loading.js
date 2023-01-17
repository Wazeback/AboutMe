'use client'
import { Spinner } from "flowbite-react"

export default function Loading() {

  return (
    <div className="center w-[25vw] h-1/2">
        <Spinner
          aria-label="Extra large spinner example"
          size="xl"
        />
    </div>
  )
}
  