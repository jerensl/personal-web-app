import React, { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { getMessaging, MessagePayload, onMessage } from 'firebase/messaging'
import { firebaseApp } from '../lib/firebase'

export const Notifications = (): React.ReactElement => {
    const [token, setToken] = React.useState<string | null>('')
    const [status, setStatus] = React.useState<boolean>(true)

    useEffect(() => {
        const notification = async () => {
            const app = await firebaseApp.Init()

            const tokenFromFCM = await firebaseApp.Messaging(app)

            setToken(tokenFromFCM)

            if (token == '' || token == null) {
                return
            }

            const subscription = await firebaseApp.Status(tokenFromFCM)
            if (subscription == null) {
                return
            }
            setStatus(subscription.status)

            if (!status) {
                await firebaseApp.Subscribe(token)
            }

            const messaging = getMessaging(app)

            onMessage(messaging, (payload: MessagePayload) => {
                notify(
                    '/icons/icon-512x512.png',
                    payload.notification.title,
                    payload.notification.body
                )
            })
        }
        notification()
    }, [token])
    return (
        <div>
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    )
}

const notify = (image, title, message) =>
    toast.custom((t) => (
        <div
            className={`${
                t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
            <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                        <img
                            className="h-10 w-10 rounded-full"
                            src={image}
                            alt=""
                        />
                    </div>
                    <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900">
                            {title}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">{message}</p>
                    </div>
                </div>
            </div>
            <div className="flex border-l border-gray-200">
                <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Close
                </button>
            </div>
        </div>
    ))
