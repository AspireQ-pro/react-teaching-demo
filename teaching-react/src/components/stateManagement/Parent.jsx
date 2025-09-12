//lifting state up
//context api
//redux
import { useState } from "react";
import ChildA from "./childA";
import ChildB from "./childB";
function Parent() {
    const [message, setMessage] = useState("Hello from Parent");
    return (
        <div>
            <h1>Parent Component</h1>
            <ChildA message={message} />
            <ChildB setMessage={setMessage} />
        </div>
    );
}
export default Parent;