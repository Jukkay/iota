import { SyntheticEvent, useState } from "react"
import { api } from "../utils/api"

export const CreateClient = () => {
    const [clientId, setClientId] = useState('')
    const [clientKey, setClientKey] = useState('')
    const mutation = api.client.create.useMutation();

    const handleSubmit = (event: SyntheticEvent) => {
        event?.preventDefault()
        mutation.mutate({
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
                <button type="submit" className="rounded-lg bg-indigo-600 p-1 text-slate-50 shadow-xl">Create</button>
            </form>
        </div>
    )
}