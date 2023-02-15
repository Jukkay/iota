import { SyntheticEvent, useState } from "react"
import { api } from "../utils/api"
import { Button } from "./Form"

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
            <h1 className="text-2xl text-indigo-800 my-6 mx-3">Create new client</h1>
            <form onSubmit={handleSubmit}>
                <div className="m-3">
                    <label>Client ID:</label>
                    <input type="text" className="rounded-lg border-2 border-indigo-600 ml-3" name='clientId' value={clientId} onChange={e => setClientId(e.target.value)} required={true} minLength={3} maxLength={128}>
                    </input>
                </div>
                <div className="m-3">
                    <label>Client key:</label>
                    <input type="text" className="rounded-lg border-2 border-indigo-600 ml-3" name='clientKey' value={clientKey} onChange={e => setClientKey(e.target.value)} required={true} minLength={8} maxLength={512}>
                    </input>
                </div>
                <Button classNames="m-3" type="submit" disabled={mutation.isLoading}>Create</Button>
                {mutation.isSuccess && <p className="text-green-600">Client created</p>}
                {mutation.isError && <p className="text-red-600">Error creating client</p>}
            </form>
        </div>
    )
}