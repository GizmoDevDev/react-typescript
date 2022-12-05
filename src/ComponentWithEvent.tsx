import {ChangeEvent, MouseEvent } from "react";
import {ComponentButton} from "./ComponentButton";

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
    <ComponentButton color="blue" onClick={handleClick}>Кнопка</ComponentButton>
    </>
}