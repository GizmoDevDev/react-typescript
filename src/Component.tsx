import {ReactNode} from "react";

type Article = {
  title: string;
  text: string;
  author: string;
}

type Props = {
  article: Article
  color?: 'black' | 'red' | 'green'
  children?: ReactNode
  isHidden?: boolean
}

export const Component = ({article, color = 'black', children, isHidden = false}: Props) => {
  if (Array.isArray(children)) {
    return <>{children}</>
  }
  return <>
    <h3 style={{color}}>{article.title}</h3>
    <p>{article.text}</p>
    <div>{article.author}</div>
    {children}
  </>
}