import { CONNECTIONS } from '@/lib/constant'
import React from 'react'
import ConnectionCard from './_components/connection-card'
import { currentUser } from '@clerk/nextjs'
import { getUserData } from './_actions/get-user'

type Props = {
  searchParams?: { [key: string]: string | undefined }
}

const Connections = async (props: Props) => {
  const {
    database_id,
  } = props.searchParams ?? {
    database_id: ''
  }

  const user = await currentUser()
  if (!user) return null

  const onUserConnections = async () => {
    console.log(database_id)

    const connections: any = {}

    const user_info = await getUserData(user.id)

    //get user info with all connections
    user_info?.connections.map((connection: any) => {
      connections[connection.type] = true
      return (connections[connection.type] = true)
    })

    return { ...connections, 'Google Drive': true }
  }

  const connections = await onUserConnections()

  return (
    <div className="relative flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        Connections
      </h1>
      <div className="relative flex flex-col gap-4">
        <section className="flex flex-col gap-4 p-6 text-muted-foreground">
          {CONNECTIONS.map((connection) => (
            <ConnectionCard
              key={connection.title}
              description={connection.description}
              title={connection.title}
              icon={connection.image}
              type={connection.title}
              connected={connections}
            />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Connections
