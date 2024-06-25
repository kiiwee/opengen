
<template>
    <div class="flex flex-col min-h-[100dvh]">
        <header class="px-4 lg:px-6 h-14 flex items-center border-b">
            <a class="flex items-center justify-center" href="#">

                <div class="text-xl">OpenGen</div>
            </a>
            <nav class="ml-auto flex gap-4 sm:gap-6">
                <a class="text-sm font-medium hover:underline underline-offset-4" href="/chat">
                    Chat
                </a>


                <a class="text-sm font-medium hover:underline underline-offset-4"
                    href="https://github.com/kiiwee/opengen">
                    Github
                </a>
            </nav>
        </header>
        <main class="flex-1 ">
            <section class="w-full py-12 md:py-24 lg:py-32">
                <div class="container px-4 md:px-6 space-y-8 lg:space-y-12">
                    <div class="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <div class="flex flex-col justify-center space-y-4">
                            <div class="space-y-2">
                                <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Streamline your workflow with our powerful platform
                                </h1>
                                <p class="max-w-[600px] text-muted-foreground md:text-xl">
                                    Unlock your team's full potential with our comprehensive tool.
                                </p>
                            </div>
                            <div class="flex flex-col gap-2 min-[400px]:flex-row">
                                <a class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    href="/chat">
                                    Get Started
                                </a>

                            </div>
                        </div>
                        <img src="/landing.png" width="550" height="550" alt="Hero"
                            class="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square" />
                    </div>
                </div>
            </section>
            <section class="w-full py-12 md:py-24 lg:py-32 bg-muted">
                <div class="container px-4 md:px-6">
                    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div class="flex flex-col items-start space-y-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="h-8 w-8 text-primary">
                                <path d="m12 14 4-4"></path>
                                <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                            </svg>
                            <h3 class="text-xl font-bold">Fast</h3>
                            <p class="text-muted-foreground">
                                Our application is optimized for fast performance, ensuring best experience
                                when inferencing our fine-tuned model.
                            </p>
                        </div>
                        <div class="flex flex-col items-start space-y-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="h-8 w-8 text-primary">
                                <path
                                    d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z">
                                </path>
                                <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
                                <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
                            </svg>
                            <h3 class="text-xl font-bold">Scalable</h3>
                            <p class="text-muted-foreground">
                                Effortlessly scale your application on your own hardware as your team grows.
                            </p>
                        </div>
                        <div class="flex flex-col items-start space-y-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="h-8 w-8 text-primary">
                                <path
                                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
                                </path>
                            </svg>
                            <h3 class="text-xl font-bold">Secure</h3>
                            <p class="text-muted-foreground">
                                Keep your data safe by self-hosting the platform on your own servers.
                            </p>
                        </div>
                        <div class="flex flex-col items-start space-y-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="h-8 w-8 text-primary">
                                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                            </svg>
                            <h3 class="text-xl font-bold">Efficient</h3>
                            <p class="text-muted-foreground">
                                Streamline your workflows and boost productivity with our intuitive tool.
                            </p>
                        </div>
                        <div class="flex flex-col items-start space-y-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="h-8 w-8 text-primary">
                                <path
                                    d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z">
                                </path>
                                <path
                                    d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z">
                                </path>
                                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                            </svg>
                            <h3 class="text-xl font-bold">Innovative</h3>
                            <p class="text-muted-foreground">
                                Stay ahead of the curve with our cutting-edge open-source model and application
                            </p>
                        </div>
                        <div class="flex flex-col items-start space-y-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="h-8 w-8 text-primary">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                <line x1="9" x2="9.01" y1="9" y2="9"></line>
                                <line x1="15" x2="15.01" y1="9" y2="9"></line>
                            </svg>
                            <h3 class="text-xl font-bold">User-Friendly</h3>
                            <p class="text-muted-foreground">
                                Intuitive design and seamless user experience make our application a joy to use.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="w-full h-full py-12 md:py-24 lg:py-32 bg-muted">
                <div class="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <img src="/dataset.png" width="2000" height="2000" alt="Feature" style=""
                        class="mx-auto w- full aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full order-2 md:order-1" />
                    <div class="space-y-4 order-1 md:order-2">
                        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Dataset</h2>
                        <p class="text-muted-foreground md:text-xl">We leveraged a open source component library</p>
                        <div class="grid gap-4">
                            <div class="grid gap-1">
                                <h3 class="text-xl font-bold">Analysis</h3>
                                <p class="text-muted-foreground">Went through countless libraries, and identified one
                                    that is vast with many categories and with a modern look and feel</p>
                            </div>
                            <div class="grid gap-1">
                                <h3 class="text-xl font-bold">Dataset Generation and Pre-Processing</h3>
                                <p class="text-muted-foreground">We used an OS visual Large Language Model to describe
                                    the rendered components.
                                </p>
                            </div>
                            <div class="grid gap-1">
                                <h3 class="text-xl font-bold">Post Processing</h3>
                                <p class="text-muted-foreground">We created 2 datasets with the base chat template of
                                    the models picked</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <h1 class="pl-10 text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Project Workflow
            </h1>
            <img src="/flow.png" width="2000" height="2000" alt="Feature" style=""
                class="mx-auto w- full aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full order-2 md:order-1" />
        </main>

    </div>

    <footer class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p class="text-xs text-muted-foreground">© 2024 OpenGen. All rights reserved.</p>

    </footer>
</template>