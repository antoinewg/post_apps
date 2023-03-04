import { useSession } from "next-auth/react"
import Layout from "../components/layout"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function MePage() {
  const { data } = useSession()
  const allUsers = await prisma.user.findMany()

  return (
    <Layout>
      <h1>This is me</h1>
      <pre>{JSON.stringify(allUsers, null, 2)}</pre>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  )
}
