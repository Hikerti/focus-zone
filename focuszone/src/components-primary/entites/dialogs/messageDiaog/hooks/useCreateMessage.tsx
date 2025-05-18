import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {useGetUser} from "@/helpers/store/storeUser.ts";
import {UseCreateMessageProps} from "@/components-primary/entites/dialogs/messageDiaog/interface/interafce.ts";

const UseCreateMessage= ({cafeId, message}: UseCreateMessageProps) => {
    const users = useGetUser(state => state.users);

    return useMutation({
        mutationFn: async () => {
            if (!users || !users.length) {
                throw new Error('User must have a user object');
            }
            return await axios.post('http://localhost:4000/message/create_messages', {
                userId: users[0].id,
                cafeId: cafeId,
                content: message
            });
        },
        onSuccess: () => {
            console.log('Message sent!');
        },
        onError: (error) => {
            console.error('Error sending message:', error);
        }
    })
};

export default UseCreateMessage;