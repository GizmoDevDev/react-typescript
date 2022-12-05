import {useRef, useState} from "react";

export const ComponentWithHooks = () => {
  const [value, setValue] = useState(0)
  const [message, setMessage] = useState<string>()

  const inputRef = useRef<HTMLInputElement>(null)
  const divRef = useRef<HTMLDivElement>(null)

  return <>
    <input ref={inputRef} />
    <div ref={divRef}></div>
  </>
}