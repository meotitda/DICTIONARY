# Omit

![Common](../../2TAT1C/Label_Common.png)

<a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#omittk">#타입스크립트 - Omit</a>
<a href="https://mochajs.org/#synchronous-code">#mocha -SYNCHRONOUS CODE Description</a>

일반적으로 Omit이란 <span style="color:#FFBF00; font-weight:bold;">생략하다</span> 하다는 의미를 지닌다.

기능을 스킵하거나 객체의 인자를 생략하다.

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

todo; // Correct Type
```

Todo 인터페이스의 description 속성을 생략시켰다.