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
      <Post
        title="Getting Started with React"
        content="React makes it easier to build interactive user interfaces by breaking the UI into reusable components. Understanding props and state is the first big step toward mastering React."
        author="Bashar"
      />

      <Post
        title="Why TypeScript Matters"
        content="TypeScript adds static typing to JavaScript, helping developers catch errors early and write more maintainable code. In larger projects, it significantly improves scalability and developer experience."
        author="Sara"
      />

      <Post
        title="Modern Web Development"
        content="Modern web applications rely on component-based architecture, client-side routing, and efficient data fetching strategies. Tools like React and Next.js simplify complex frontend challenges."
        author="Ahmed"
      />
    </div>
  );
}