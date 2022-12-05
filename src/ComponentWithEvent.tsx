import {ChangeEvent, MouseEvent } from "react";

export const ComponentWithEvent = () => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  }

  return <>
    <button onClick={handleClick} />
    <input onChange={handleChange} />
    </>
}