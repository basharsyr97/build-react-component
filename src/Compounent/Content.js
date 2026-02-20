import Post from "./Post";

export default function Content() {
  const contentStyle = {
    marginLeft: "240px",
    marginTop: "120px",
    padding: "20px",
    width: "70%",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const posts = [
    {
      id: 1,
      title: "Getting Started with React with rendering",
      author: "Bashar",
      child: (
        <>
          <p>
            React makes it easier to build interactive user interfaces by
            breaking the UI into reusable components.
          </p>
          <p>
            Understanding props and state is the first big step toward mastering
            React.
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "Why TypeScript Matters",
      author: "Sara",
      child: (
        <>
          <p>
            TypeScript adds static typing to JavaScript, helping developers
            catch errors early.
          </p>
          <p>
            In larger projects, it significantly improves scalability and
            developer experience.
          </p>
        </>
      ),
    },
    {
      id: 3,
      title: "Modern Web Development",
      author: "mohammed",
      child: (
        <>
          <p>
            Modern web applications rely on component-based architecture and
            client-side routing.
          </p>
          <p>
            Tools like React and Next.js simplify complex frontend challenges.
          </p>
        </>
      ),
    },
  ];

  const postsMaped = posts.map((post) => {
    return (
      <Post key={post.id} title={post.title} author={post.author}>
        {post.child}
      </Post>
    );
  });
  return <div style={contentStyle}>{postsMaped}</div>;
}
