
<template>
  <header class="px-4 lg:px-6 h-14 flex items-center border-b">
    <a class="flex items-center justify-center" href="/">

      <div class="text-xl">OpenGen</div>
    </a>
    <nav class="ml-auto flex gap-4 sm:gap-6">
      <a class="text-sm font-medium hover:underline underline-offset-4" href="/chat">
        Chat
      </a>


      <a class="text-sm font-medium hover:underline underline-offset-4" href="https://github.com/kiiwee/opengen">
        Github
      </a>
    </nav>
  </header>
  <div class="grid  h-full">
    <!-- <UVerticalNavigation></UVerticalNavigation> -->
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
    <GenFrame :chatid="chatID" class=""></GenFrame>
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
