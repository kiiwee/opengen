
<template>

  <div class="grid grid-cols-6 h-screen">
    <!-- <UVerticalNavigation></UVerticalNavigation> -->
    <SideBar class=""></SideBar>
    <!-- <ChatFrame :chatid="chatID" class="col-span-2 w-full"></ChatFrame> -->
    <!-- <div class="flex col-span-2 flex-col w-full   py-24 mx-auto stretch bg-red-200 ">
      <div v-for="message in messages" :key="message.id" class="whitespace-pre-wrap">
        <Icon :name="message.role === 'user' ? 'solar:user-linear' : 'solar:soundwave-square-line-duotone'" />
        {{ message.role === 'user' ? 'User: ' : 'AI: ' }}
        {{ message.content }}
      </div>
      <form @submit="handleSubmit">
        <input v-model="input" class="fixed bottom-0  max-w-sm p-2 mb-8 border border-gray-300 rounded shadow-xl"
          placeholder="Say something...">
      </form> -->
    <!-- </div> -->
    <GenFrame :chatid="chatID" class="col-span-4"></GenFrame>
    <SettingsBar class="col-span-1"></SettingsBar>
    <!-- <div class="bg-yellow-200 w-auto"></div> -->
  </div>



</template>
<script setup>
import { useChat } from 'ai/vue'
const{chatID}=storeToRefs(useChatStore())
const { messages, input, handleSubmit } = useChat({
  id: chatID.value
})

</script>
