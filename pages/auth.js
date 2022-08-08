import { useState, useEffect } from "react"
import Router from "next/router"
import Spinner from "../components/Spinner"
import Signup from "../components/Signup"

const AuthLoader = () => {
  const [alreadyLogged, setAlreadyLogged] = useState(false)
  const [email, setEmail] = useState(null)
  const [code, setCode] = useState(null)
  useEffect(() => {
    if (localStorage.getItem("email")) {
      setEmail(localStorage.getItem("email"))
    }
    if (localStorage.getItem("code")) {
      setCode(localStorage.getItem("code"))
    }
  }, [])
  useEffect(() => {
    if (code) {
      Router.push("/?code=" + code)
      setAlreadyLogged(true)
    }
  }, [code])
  useEffect(() => {
    if (email) {
      Router.push("/auth?email=" + email)
    }
  }, [email])
  return email ? <Signup email={email} /> : <Signup />
}

export const getServerSideProps = async function ({ req, query }) {
  const { email, code } = query

  // user lands here already logged in

  return {
    props: {},
  }
}

export default AuthLoader
