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
Для типизации хуков реакта используются дженерики. Кастомные хуки типизируются как обычные функции

```typescript jsx
  const [value, setValue] = useState(0)
  const [message, setMessage] = useState<string>()

  const inputRef = useRef<HTMLInputElement>(null)
  const divRef = useRef<HTMLDivElement>(null)

  return <>
    <input ref={inputRef} />
    <div ref={divRef}></div>
  </>
```

## Типизация событий и форм

## Расширение стандартных компонентов

## Полезные типы

- ReactNode
- HTMLInputElement
- HTMLDivElement