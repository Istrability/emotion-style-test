/** @jsxImportSource @emotion/react */

export const App: React.FC = () => {
  return (
    <div
      css={{
        backgroundColor: "hotpink",
        "&:hover": {
          color: "lightgreen",
        },
      }}
    >
      TEST
    </div>
  );
};

export default App;
