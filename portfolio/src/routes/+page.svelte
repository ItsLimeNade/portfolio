<script lang="ts">
	import { onMount } from "svelte";

    
    onMount(() => {
        const header = document.getElementById('header')
        header?.classList.add("pt-[30px]")
    })
</script>

<header id="header" class="flex justify-center pt-96 duration-[1500ms]">
    <h1 class="text-white text-4xl">Hey, I'm <span class="text-5xl text-purple-400">LimeNade</span></h1>
</header>



<main class="fadeIn p-9">
    <div id="projects" class="grid grid-cols-3 gap-3 pl-[25%] pr-[25%] "> <!--! Change the pr and pl by p-[50%] when adding the projects-->
        <div class="bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.06)] bg-opacity-5 rounded-lg shadow-lg p-8 text-white backdrop:blur-xl border-[1px] border-solid border-[rgba(102,102,102,0.2)] transition ease-in-out duration-300 hover:scale-105 hover:border-white">
            <p>Hi, I'm</p>
            <p class="text-[50px] font-bold mb-4 text-purple-400">LimeNade</p>
            <p class="text-2xl">Nice to meet you!</p>
        </div>

        <div class="bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.06)] bg-opacity-5 rounded-lg shadow-lg p-8 text-white backdrop:blur-xl border-[1px] border-solid border-[rgba(102,102,102,0.2)] transition ease-in-out duration-300 hover:scale-105 hover:border-white">
        <img class="spinning" src="/flower.png" alt="flower"/>
        </div>

        <div class="bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.06)] bg-opacity-5 rounded-lg shadow-lg p-8 text-white backdrop:blur-xl border-[1px] border-solid border-[rgba(102,102,102,0.2)] transition ease-in-out duration-300 hover:scale-105 hover:border-white">
            <p>I'm a</p>
            <p class="text-[50px] font-bold mb-4 text-purple-400">Web Dev!</p>
            <p class="text-2xl">I code cool stuff!</p>
        </div>

        <div class="col-span-3 bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.06)] bg-opacity-5 rounded-lg shadow-lg p-8 text-white backdrop:blur-xl border-[1px] border-solid border-[rgba(102,102,102,0.2)] transition ease-in-out duration-300 hover:scale-105 hover:border-white">
            <p class="mb-5">I use those cool technologies:</p>
            <div class="grid grid-cols-6 gap-3">
                <a class="duration-200 hover:scale-110" href="https://www.typescriptlang.org/"><img src="/ts.png" alt="typescript"/></a>
                <a class="duration-200 hover:scale-110" href="https://kit.svelte.dev/"><img src="/svelte.png" alt="svelte"/></a>
                <a class="duration-200 hover:scale-110" href="https://nativescript.org/"><img src="/native.png" alt="nativescript"/></a>
                <a class="duration-200 hover:scale-110" href="https://supabase.com/"><img src="/supa.webp" alt="supabase"/></a>
                <a class="duration-200 hover:scale-110" href="https://react.dev/"><img src="/react.png" alt="react"/></a>
                <a class="duration-200 hover:scale-110" href="https://vitejs.dev/"><img src="/vite.png" alt="vite"/></a>
            </div>
        </div>

        <div class="bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.06)] bg-opacity-5 rounded-lg shadow-lg p-8 text-white backdrop:blur-xl border-[1px] border-solid border-[rgba(102,102,102,0.2)] transition ease-in-out duration-300 hover:scale-105 hover:border-white">
            <p>I also love</p>
            <p class="text-[50px] font-bold mb-4 text-purple-400">Robotics</p>
            <p class="text-2xl">And electronics!</p>
        </div>

        <div class="bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.06)] bg-opacity-5 rounded-lg shadow-lg p-8 text-white backdrop:blur-xl border-[1px] border-solid border-[rgba(102,102,102,0.2)] transition ease-in-out duration-300 hover:scale-105 hover:border-white">
            <img src="rbp.webp" alt="rbp"  class="spinning w-4/5 ml-5 mt-5"/>
        </div>

        <div class="bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.06)] bg-opacity-5 rounded-lg shadow-lg p-8 text-white backdrop:blur-xl border-[1px] border-solid border-[rgba(102,102,102,0.2)] transition ease-in-out duration-300 hover:scale-105 hover:border-white">
            <p>I work a lot with my</p>
            <p class="text-[50px] font-bold mb-4 text-purple-400">Arduino</p>
            <p class="text-2xl">and Raspberry Pi</p>
        </div>
    </div>

</main>
