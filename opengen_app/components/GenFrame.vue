<template>
    <div class=" containter  h-full bg-slate-100   ">
        <UTabs :unmount="true" :items="items" @change="onChange">
            <template #default="{ item, index, selected }">
                <div class="flex items-center gap-2 relative truncate">
                    <UIcon :name="item.icon" class="w-4 h-4 flex-shrink-0" />

                    <span class="truncate"> {{ item.label }}</span>

                    <span v-if="selected"
                        class="absolute -right-4 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400" />
                </div>
            </template>

        </UTabs>
        <div class="flex h-full">
            <div v-if="codeUI == 'UI'" class="flex w-screen h-screen">
                <iframe class="w-full max-h-screen h-full " :srcdoc="iframeSrc"
                    title="W3Schools Free Online Web Tutorials"></iframe>

            </div>
            <div v-if="codeUI == 'Code'" class="w-fit">
                {{ iframeSrc }}
            </div>

        </div>

        <PromptInput :chatid="props.chatid" class=""></PromptInput>

    </div>


</template>
<script setup lang="ts">
import { useChat } from 'ai/vue'
const props = defineProps(['chatid'])
console.log(props.chatid)
const items = [{
    label: 'UI',
    
    icon: 'i-heroicons-computer-desktop-solid'
}, {
    label: 'Code',
        icon: 'i-heroicons-code-bracket' 

}
// , {
//     label: 'Photo',
//     content: 'Finally, this is the content for Tab3'
// }
]
const codeUI=ref('UI')
function onChange(index) {
    const item = items[index]
    codeUI.value = item.label
    console.log(codeUI.value)

}
const { messages, input, handleSubmit,isLoading } = useChat({ id: props.chatid })

const iframeSrc=ref("<h1>hello</h1>")
function removeTextAfterHtml(inputString:string) {
    const htmlEndIndex = inputString.indexOf('</html>');
    if (htmlEndIndex !== -1) {
        return inputString.substring(0, htmlEndIndex + '</html>'.length);
    } else {
        return inputString;
    }
}
watch(messages, (newVal, oldVal) => {

    // Here you can handle the change in the messages
    // For example, you can change the iframeSrc based on the new messages
    if (messages.value[messages.value.length-1].role == 'assistant' ) {
        // console.log(messages.value[messages.value.length -1].content)
        let content = messages.value[messages.value.length - 1].content;

        let startTag = "```html";

        let start = content.indexOf(startTag);
        if (start !== -1) {
            // The string starts with "```html"
            // Now you can slice the string from this position
            let result = content.slice(start + startTag.length);
            let clean=removeTextAfterHtml(result)
            iframeSrc.value = clean

        }
        // iframeSrc.value = messages.value[messages.value.length - 1].content
    }
    // iframeSrc.value = JSON.parse(messages.value[-1].content.replace(/\n/g, '')).html // replace someProperty with the actual property you want to use
})
function log(){
    console.log(messages.value[messages.value.length - 1].content.match(/```html\s([\s\S]*?)/))
    let match = messages.value[messages.value.length - 1].content.match(/```html\s\S]*/)
    iframeSrc.value = match ? match[1] : ''
    let startTag = "```html";
    let content = messages.value[messages.value.length - 1].content;

    let start = content.indexOf(startTag);
    if (start !== -1) {
        // The string starts with "```html"
        // Now you can slice the string from this position
        let result = content.slice(start + startTag.length);
        iframeSrc.value = result

        console.log(result);
    }

}
iframeSrc.value=""
// iframeSrc.value=JSON.parse(messages.value[messages.value.length -1].content.replace(/\n/g, '')).html
// iframeSrc.value = JSON.parse(messages.value[-1].content).html
// watch(messages, (newVal, oldVal) => {
//     // Here you can handle the change in the messages
//     // For example, you can change the iframeSrc based on the new messages
//     iframeSrc.value = messages.value[-1].content // replace someProperty with the actual property you want to use
// })
</script>
