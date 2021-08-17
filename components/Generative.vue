<template>
  <div class="generative-canvas">
    <div
      class="square-grid"
    />
  </div>
</template>

<script>


export default {
    mounted () {

        function createBlock() {

            var c = document.querySelector('.square-grid');

            for (let l = 0; l < 70; l++) {
                var svg   = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                var svgNS = svg.namespaceURI;
                let newRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                var b = document.createElement('div');
                b.className = "block"
                newRect.setAttribute("x", "0");
                newRect.setAttribute("y", "0");
                newRect.setAttribute("stroke", randomRgbaString());
                newRect.setAttribute("stroke-width", 2);
                newRect.setAttribute("width", "30");
                newRect.setAttribute("height", "30");
                newRect.setAttribute("fill", "transparent");
                var radius = getRandomInt(0, 25);
                newRect.setAttribute("rx", radius);
                newRect.setAttribute("ry", radius);
                c.appendChild(b);
                svg.appendChild(newRect);
                b.appendChild(svg);
            }

            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min) + min);
            }

            function getRandomArbitrary(min, max) {
                return Math.random() * (max - min) + min;
            }


            function randomRgbaString() {
                var opacity = getRandomArbitrary(0, 0.5);
                const colors = [
                    'rgba(252, 178, 118,' + opacity + ')',
                    'rgba(96, 146, 153,' + opacity + ')',
                    'rgba(157, 206, 210,' + opacity + ')',
                    'rgba(254, 125, 21,' + opacity + ')'
                ],
                randomColor = Math.floor(Math.random() * colors.length);
                return colors[randomColor];
            }

        }

        createBlock();
    }
}
</script>

<style>

.generative-canvas {
    height: 100%;
    display: flex;
    justify-content: center;
    clip-path: polygon(35% 0%, 100% 0%, 65% 100%, 0% 100%);
}

.square-grid {
    height: 100%;
    max-width: 350px;
    max-height: 350px;
    place-content: center;
    width: 100%;
}

.square-grid > .block {
    display: inline-block;
    width: 100%;
    height: 100%;
    max-width: 30px;
    max-height: 30px;
    margin: 10px 10px 0 0;
    float: left;
}

@media (max-width: 992px) {
    .generative-canvas {
        max-width: 350px;
        max-height: 150px;
        margin: 0 auto;
    }
}

</style>