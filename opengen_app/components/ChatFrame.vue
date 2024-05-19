<template>
    <!-- Prompt Messages Container - Modify the height according to your need -->
    <div class="flex w-96 flex-col h-screen col-span- ">
        <!-- Prompt Messages -->
        <div class="flex-1 conatainer overflow-scroll scroll-y scroll-smooth bg-slate-300 text-sm leading-6 text-slate-900 shadow-md dark:bg-slate-800 dark:text-slate-300 sm:text-base sm:leading-7"
            style="display:flex;flex-direction:column">
            <div v-for="message in messages">
                <div v-if="message.role=='user'" class="flex flex-row px-4 py-8 sm:px-6">
                    <img class="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
                        src="https://dummyimage.com/256x256/363536/ffffff&text=U" />

                    <div class="flex max-w-3xl items-center">
                        <p>{{ message.content }}</p>
                    </div>
                </div>

                <div v-if="message.role =='assistant'" class="flex bg-slate-100 px-4 py-8 dark:bg-slate-900 sm:px-6">
                    <img class="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
                        src="https://dummyimage.com/256x256/354ea1/ffffff&text=G" />

                    <div class="flex w-full flex-col items-start lg:flex-row lg:justify-between">
                        <p class="max-w-3xl">
                            {{ message.content }}
                        </p>
                        <div class="mt-4 flex flex-row justify-start gap-x-2 text-slate-500 lg:mt-0">
                            <button class="hover:text-blue-600" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z">
                                    </path>
                                    <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- Prompt message input -->
        <form
            class="flex w-full items-center rounded-b-md border-t border-slate-300 bg-slate-200 p-2 dark:border-slate-700 dark:bg-slate-900">
            <label for="chat" class="sr-only">Enter your prompt</label>
            <div>
                <button class="hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-600 sm:p-2" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" aria-hidden="true" viewBox="0 0 24 24"
                        stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 5l0 14"></path>
                        <path d="M5 12l14 0"></path>
                    </svg>
                    <span class="sr-only">Add</span>
                </button>
            </div>
            <input id="chat-input" rows="1" v-model="input" @submit.prevent="handleSubmit"
                class="mx-2 flex min-h-full w-full rounded-md border border-slate-300 bg-slate-50 p-2 text-base text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50 dark:placeholder-slate-400 dark:focus:border-blue-600 dark:focus:ring-blue-600"
                placeholder="Enter your prompt"></input>
            <div>
                <button 
                    class="inline-flex hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-600 sm:p-2"
                    type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" aria-hidden="true" viewBox="0 0 24 24"
                        stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M10 14l11 -11"></path>
                        <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5">
                        </path>
                    </svg>
                    <span class="sr-only">Send message</span>
                </button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import  { useChat } from 'ai/vue';

const props = defineProps(['chatid'])

const { messages, input, handleSubmit } =useChat({ id: props.chatid})

</script>
