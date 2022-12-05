# Использование typescript  в React

## Props компонентов
```typescript jsx
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
  ...
}

//App.tsx
...
    <Component article={article} isHidden>
        <div>Child 1</div>
        <div>Child 2</div>
    </Component>
```
## Типизация хуков

## Типизация событий и форм

## Расширение стандартных компонентов

## Полезные типы