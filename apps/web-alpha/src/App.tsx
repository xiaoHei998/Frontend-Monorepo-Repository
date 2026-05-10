import { greet } from "@repo/shared";
import "./App.css";

export default function App() {
  return (
    <main className="app">
      <h1>web-alpha</h1>
      <p>{greet("Monorepo")}</p>
      <p className="hint">工作区包示例：从 <code>@repo/shared</code> 引用共享代码。</p>
    </main>
  );
}


type Test1  = 1 & 'asd' extends number ? 6 : 7
type Test2<T> = T extends number ? 6 : 7
type Test3 = Test2<1 & 'asd'>