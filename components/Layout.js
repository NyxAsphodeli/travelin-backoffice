const Layout = ({ children }) => {
  return (
    <div
      className="layout"
      style={{
        width: "100%",
        height: "calc(100vh)",
        display: "flex",
        flexDirection: "column",
        paddingInline: "10px",
      }}
    >
      {children}
    </div>
  )
}
export default Layout
