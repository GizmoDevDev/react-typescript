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

Для типизации событий и форм полезны интерфейсы эвентов, которые принимает на вход функция обработчик:
- MouseEvent
- ChangeEvent
- FormEvent
- и др.

```typescript jsx

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  }
```

## Расширение стандартных компонентов
```typescript jsx
import {HTMLAttributes} from "react";

type Props = HTMLAttributes<HTMLButtonElement> & {
  color: 'blue' | 'green' | 'gray'
}

export const ComponentButton = ({color, className, children, ...props}: Props) => {
  const colorClass = {
    blue: 'btn-blue',
    green: 'btn-green',
    gray: 'btn-gray',
  }
  return <button className={`btn-custom ${className} ${colorClass[color]}`} {...props}>
    {children}
  </button>
}

// App.tsx
...
  <ComponentButton color="blue" onClick={handleClick}>Кнопка</ComponentButton>
```

## Полезные типы

- ReactNode
- HTMLInputElement
- HTMLDivElement
- Event
- MouseEvent
- ChangeEvent
- FormEvent
- HTMLAttributes
- ButtonHTMLAttributes
- InputHTMLAttributes