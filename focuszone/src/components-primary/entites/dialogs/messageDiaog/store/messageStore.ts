// import {create} from "zustand";
// import axios from "axios";
//
// interface.ts.ts.ts MessageCreate {
//     userId: string
//     cafeId: number
//     content: string
// }
// interface.ts.ts.ts Message {
//     id: number
//     userId: string
//     cafeId: number
//     content: string
//     createdAt: Date
//     updatedAt: Date
// }
//
// interface.ts.ts.ts MessageStore {
//     messages: Message[]
//     setUserMessage: (userId: string) => Promise<void>
//     setCafeMessage: (cafeId: number) => Promise<void>
//     setIdMessage: (id: number) => Promise<void>
//     createMessage: (body: MessageCreate) => Message[]
//     deleteMessage: () => void
// }
//
// export const useStoreMessage = create<MessageStore>((set, get) => ({
//     messages: [],
//
//     setUserMessage: async (userId) => {
//         try {
//             const res = await axios.get<Message[]>(`http://localhost:4000/message/get_user_messages/${userId}`)
//             get().deleteMessage()
//             set({messages: res.data})
//         } catch (e) {
//             console.error(e)
//         }
//     },
//
//     setCafeMessage: async (cafeId) => {
//         try {
//             const res = await axios.get<Message[]>(`http://localhost:4000/message/get_cafe_messages/${cafeId}`)
//             get().deleteMessage()
//             set({messages: res.data})
//         } catch (e) {
//             console.error(e)
//         }
//     },
//
//     setIdMessage: async (id) => {
//         try {
//             const res = await axios.get<Message[]>(`http://localhost:4000/message/get_id_messages/${id}`)
//             get().deleteMessage()
//             set({messages: res.data})
//         } catch (e) {
//             console.error(e)
//         }
//     },
//
//     createMessage: async (body: MessageCreate) => {
//         try {
//             return await axios.post<MessageCreate>(`http://localhost:4000/message/create_messages`, body)
//         } catch (e) {
//             console.error(e)
//         }
//     },
//
//     deleteMessage: () => set({messages: []})
// }))