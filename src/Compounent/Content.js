import Post from "./Post";

export default function Content() {
  const contentStyle = {
    marginLeft: "240px",
    marginTop: "120px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  return (
    <div style={contentStyle}>
      <Post title="Getting Started with React" author="Bashar">
        <p>
          React makes it easier to build interactive user interfaces by breaking
          the UI into reusable components.
        </p>
        <p>
          Understanding props and state is the first big step toward mastering React.
        </p>
      </Post>



      <Post title="Why TypeScript Matters" author="Sara">
        <p>
          TypeScript adds static typing to JavaScript, helping developers catch errors early.
        </p>
        <p>
          In larger projects, it significantly improves scalability and developer experience.
        </p>
      </Post>

      <Post title="Modern Web Development" author="Ahmed">
        <p>
          Modern web applications rely on component-based architecture and client-side routing.
        </p>
        <p>
          Tools like React and Next.js simplify complex frontend challenges.
        </p>
      </Post>
    </div>
  );
}