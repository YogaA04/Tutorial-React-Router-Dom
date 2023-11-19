import {redirect} from "react-router-dom"
import {deleteContact} from "../contacts"

export const action = async ({params}) => {
    // throw new Error("oh doang!")
    await deleteContact(params.contactId)
    console.log(params.contactId)
    return redirect("/")
}