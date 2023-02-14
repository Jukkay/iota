import { Client } from "@prisma/client"
import { SyntheticEvent, useEffect, useState } from "react"
import { api } from "../utils/api"
import { Button } from "./Form"

export const EditClientInfo = ({ client }: { client: Client }) => {
    const [oldId, setOldId] = useState('')
    const [clientId, setClientId] = useState('')
    const [clientKey, setClientKey] = useState('')
    const mutation = api.client.updateClient.useMutation();

    useEffect(() => {
        if (!client.id || !client.clientKey) return
        setOldId(client.id)
        setClientId(client.id)
        setClientKey(client.clientKey)
    }, [client])

    const handleSubmit = (event: SyntheticEvent) => {
        event?.preventDefault()
        mutation.mutate({
            oldId: oldId,
            id: clientId,
            clientKey: clientKey
        })
    }
    return (
        <div className="flex-col">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Client ID:</label>
                    <input type="text" className="rounded-lg border-2 border-indigo-600" name='clientId' value={clientId} onChange={e => setClientId(e.target.value)} required={true} minLength={3} maxLength={128}>
                    </input>
                </div>
                <div>
                    <label>Client key:</label>
                    <input type="text" className="rounded-lg border-2 border-indigo-600" name='clientKey' value={clientKey} onChange={e => setClientKey(e.target.value)} required={true} minLength={8} maxLength={512}>
                    </input>
                </div>
                <Button type="submit" disabled={mutation.isLoading}>Update</Button>
                {mutation.isSuccess && <p className="text-green-600">Client updated</p>}
                {mutation.isError && <p className="text-red-600">Error updating client</p>}
            </form>
        </div>
    )
}