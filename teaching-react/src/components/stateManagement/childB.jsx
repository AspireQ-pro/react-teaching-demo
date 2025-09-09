
function ChildB({ setMessage }) {
    return (
        <div>
            <button onClick={() => setMessage('Hello from Child B')}>Say Hello</button>
        </div>
    );
}
export default ChildB;