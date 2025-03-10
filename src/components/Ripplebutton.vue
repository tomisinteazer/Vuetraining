<!-- <template>
    <button @click="createRipple" ref="buttonRef" :class="[
        'relative overflow-hidden transition-all duration-300 ease-in-out py-2 px-4 rounded text-white bg-green-500 hover:w-full w-1/2'
    ]">
        <span>Stretch Me</span>
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <span v-for="(ripple, index) in ripples" :key="index"
                class="absolute rounded-full bg-green-400 transform -translate-x-1/2 -translate-y-1/2 ripple" :style="{
                    left: `${ripple.x}px`,
                    top: `${ripple.y}px`
                }"></span>
        </div>
    </button>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'RippleButton',
    setup() {
        const buttonRef = ref(null)
        const ripples = ref([])

        const createRipple = (event) => {
            const button = buttonRef.value
            const rect = button.getBoundingClientRect()

            // Calculate click position relative to button
            const x = event.clientX - rect.left
            const y = event.clientY - rect.top

            // Create new ripple
            const rippleId = Date.now()

            // Add new ripple
            ripples.value.push({
                id: rippleId,
                x,
                y
            })

            // Remove the ripple after animation completes
            setTimeout(() => {
                ripples.value = ripples.value.filter(r => r.id !== rippleId)
            }, 800)
        }

        return {
            buttonRef,
            ripples,
            createRipple
        }
    }
}
</script>

<style scoped>
.ripple {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0.6;
    animation: ripple 800ms ease-out;
}

@keyframes ripple {
    to {
        width: 500px;
        height: 500px;
        opacity: 0;
    }
}
</style> -->


<template>
    <button
        class="relative overflow-hidden rounded-md px-4 py-2 text-white bg-blue-500 hover:bg-blue-600  hover:w-full active:scale-95 transition duration-200"
        @click="createRipple">
        <slot></slot>
        <span v-for="ripple in ripples" :key="ripple.id" :style="{
            top: ripple.y + 'px',
            left: ripple.x + 'px',
            width: ripple.size + 'px',
            height: ripple.size + 'px'
        }" class="absolute bg-white opacity-50 rounded-full animate-ripple"></span>
    </button>
</template>

<script>
export default {
    data() {
        return {
            ripples: [],
        };
    },
    methods: {
        createRipple(event) {
            const button = event.currentTarget;
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = event.clientX - rect.left - size / 2;
            const y = event.clientY - rect.top - size / 2;
            const id = Date.now();

            this.ripples.push({ id, x, y, size });

            setTimeout(() => {
                this.ripples = this.ripples.filter(r => r.id !== id);
            }, 600);
        }
    }
};
</script>

<style>
@keyframes ripple {
    from {
        transform: scale(0);
        opacity: 0.5;
    }

    to {
        transform: scale(4);
        opacity: 0;
    }
}

.animate-ripple {
    position: absolute;
    transform: scale(0);
    animation: ripple 0.6s linear;
}
</style>