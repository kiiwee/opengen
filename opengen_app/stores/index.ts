import { acceptHMRUpdate, defineStore } from "pinia";


export const useChatStore = defineStore("user", () => {
    // const client = useSupabaseClient()

    const chats = ref()
    const selectedChatID = ref(1)
    const chatIDs = ref(1)
    const chatID= ref(1)
    async function test(addressUser: any, purchaseDetails: {
        [key: string]: any;
    }) {
        console.log("setting loader");
        //setLoader(true)
        try {

        } catch (error) {
            
            //setLoader(false)
            console.log("Eroor");
            console.log(error);
        }
    }
    // async function getChatsDB() {
    //     const { data, error } = await client.from('chats').select('role,content,id').eq('chatID', selectedChatID.value).neq('role', null)
    //     // const { data, error } = await client.from('chats').select()
    //     if (error) return error
    //     chats.value = data
    //     console.log("from pinia", data)
    //     return chats.value
    // }
    // async function getChatIDs() {
    //     const { data } = await client.from('distinct_chatids').select().order('chatID', { ascending: false })
    //     chatIDs.value = data
    //     console.log("from pinia chatIDs", data)
    //     return chatIDs.value
    // }
    return {
        chatID
    };
});
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useChatStore, import.meta.hot));
}
