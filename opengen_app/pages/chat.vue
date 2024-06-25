
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
