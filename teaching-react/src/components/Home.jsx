import Header from './Header';

function Home() {
  return (
    <div>
      <Header />
      <main style={{
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h2>Welcome to Our React Application</h2>
        <p>This is the home page of your React app.</p>
      </main>
    </div>
  );
}

export default Home;