<template>
    <section class="page__content page__content--stylesOverview">
        <div class="content">
            <div class="grid">
                <div class="grid__item">
                    <div class="typography">
                        <h1>Headline H1</h1>
                        <h2>Headline H2</h2>
                        <h3>Headline H3</h3>
                        <h4>Headline H4</h4>
                        <h5>Headline H5</h5>
                        <h6>Headline H6</h6>
                        <p class="h1 font-neon uppercase">Headline .h1.font-neon.uppercase</p>
                        <p class="h1 font-glitch">Headline .h1.font-glitch</p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum quas ratione
                            perferendis animi hic illo, vel, odio eos ipsa soluta eveniet pariatur saepe laudantium
                            voluptatum, magnam impedit quo nisi.
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum quas ratione
                            perferendis animi hic illo, vel, odio eos ipsa soluta eveniet pariatur saepe laudantium
                            voluptatum, magnam impedit quo nisi. Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Consectetur nostrum quas ratione perferendis animi hic illo, vel, odio eos ipsa soluta
                            eveniet pariatur saepe laudantium voluptatum, magnam impedit quo nisi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="grid grid--gap10">
                <div class="grid__item grid--gap10">
                    <div class="debugColorMixer">
                        <div class="debugColorMixer__item debugColorMixer__item--y1">$yellow-light</div>
                        <div class="debugColorMixer__item debugColorMixer__item--y2">$yellow</div>
                        <div class="debugColorMixer__item debugColorMixer__item--y3">$yellow-dark</div>
                    </div>
                    <div class="debugColorMixer">
                        <div class="debugColorMixer__item debugColorMixer__item--o1">$orange-light</div>
                        <div class="debugColorMixer__item debugColorMixer__item--o2">$orange</div>
                        <div class="debugColorMixer__item debugColorMixer__item--o3">$orange-dark</div>
                    </div>
                    <div class="debugColorMixer">
                        <div class="debugColorMixer__item debugColorMixer__item--r1">$red-light</div>
                        <div class="debugColorMixer__item debugColorMixer__item--r2">$red</div>
                        <div class="debugColorMixer__item debugColorMixer__item--r3">$red-dark</div>
                    </div>
                </div>
                <div class="grid__item grid--gap10">
                    <div class="debugColorMixer">
                        <div class="debugColorMixer__item debugColorMixer__item--lime1">$lime-light</div>
                        <div class="debugColorMixer__item debugColorMixer__item--lime2">$lime</div>
                        <div class="debugColorMixer__item debugColorMixer__item--lime3">$lime-dark</div>
                    </div>
                    <div class="debugColorMixer">
                        <div class="debugColorMixer__item debugColorMixer__item--pu1">$purple-light</div>
                        <div class="debugColorMixer__item debugColorMixer__item--pu2">$purple</div>
                        <div class="debugColorMixer__item debugColorMixer__item--pu3">$purple-dark</div>
                    </div>
                    <div class="debugColorMixer">
                        <div class="debugColorMixer__item debugColorMixer__item--pink1">$pink-light</div>
                        <div class="debugColorMixer__item debugColorMixer__item--pink2">$pink</div>
                        <div class="debugColorMixer__item debugColorMixer__item--pink3">$pink-dark</div>
                    </div>
                </div>
                <div class="grid__item grid--gap10">
                    <div class="debugColorMixer">
                        <div class="debugColorMixer__item debugColorMixer__item--green1">$green-light</div>
                        <div class="debugColorMixer__item debugColorMixer__item--green2">$green</div>
                        <div class="debugColorMixer__item debugColorMixer__item--green3">$green-dark</div>
                    </div>
                    <div class="debugColorMixer">
                        <div class="debugColorMixer__item debugColorMixer__item--blue1">$blue-light</div>
                        <div class="debugColorMixer__item debugColorMixer__item--blue2">$blue</div>
                        <div class="debugColorMixer__item debugColorMixer__item--blue3">$blue-dark</div>
                    </div>
                    <div class="debugColorMixer">
                        <div class="debugColorMixer__item debugColorMixer__item--lips1">$lip-light</div>
                        <div class="debugColorMixer__item debugColorMixer__item--lips2">$lip</div>
                        <div class="debugColorMixer__item debugColorMixer__item--lips3">$lip-dark</div>
                    </div>
                </div>
                <div class="grid__item grid--gap10">
                    <div class="debugColorMixer">
                        <div class="debugColorMixer__item debugColorMixer__item--turquoise1">$turquoise-light</div>
                        <div class="debugColorMixer__item debugColorMixer__item--turquoise2">$turquoise</div>
                        <div class="debugColorMixer__item debugColorMixer__item--turquoise3">$turquoise-dark</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'StylesOverviewPage',
    components: {},
});
</script>

<style lang="scss">
@import '@/styles/scss/objects/debugColorMixer.scss';
</style>
