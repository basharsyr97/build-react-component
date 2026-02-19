export default function Post({ title, author, children }) {
  const postStyle = {
    border: "2px solid #4fb68b",
    borderRadius: "10px",
    padding: "20px",
    width: "80%",
    margin: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#ffffff",
  };

  const titleStyle = {
    color: "#4fb68b",
    marginBottom: "10px",
  };

  const contentStyle = {
    marginBottom: "15px",
    lineHeight: "1.6",
  };

  const authorStyle = {
    fontSize: "14px",
    color: "#888",
    fontStyle: "italic",
  };

  return (
    <div style={postStyle}>
      <h2 style={titleStyle}>{title}</h2>
      <div style={contentStyle}>{children}</div>{" "}
      <div style={authorStyle}>Written by: {author}</div>
    </div>
  );
}
