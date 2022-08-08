import custom from "../styles/custom.module.css"
import { useRouter } from "next/router"

const Signup = ({ email }) => {
  const Router = useRouter()
  if (!email) {
    return (
      <div className={custom.verticalLayout}>
        <h1>Sign Up</h1>
        <form action="" method="post" className={custom.verticalLayout}>
          <input
            className={custom.verticalLayoutElement}
            type="text"
            name="email"
            placeholder="email"
          />
          <button
            className={
              custom.verticalLayoutElement + " " + custom.primaryButton
            }
            type="submit"
            onClick={() => {
              localStorage.setItem(
                "email",
                document.querySelector("input[name=email]").value
              )
              Router.push(
                "/auth?email=" +
                  document.querySelector("input[name='email']").value
              )
            }}
          >
            Send code to my email
          </button>
        </form>
      </div>
    )
  } else {
    return (
      <div className={custom.verticalLayout}>
        <h1>Temporary code</h1>
        <form action="" method="post" className={custom.verticalLayout}>
          <input
            className={custom.verticalLayoutElement}
            type="number"
            name="code"
            placeholder="code"
          />
          <button
            className={
              custom.verticalLayoutElement + " " + custom.primaryButton
            }
            type="submit"
            onClick={() => {
              localStorage.setItem(
                "code",
                document.querySelector("input[name='code']").value
              )
              Router.push(
                "/auth?code=" +
                  document.querySelector("input[name='code']").value
              )
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
    )
  }
}
export default Signup
