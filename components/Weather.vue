<template>
  <div
    ref="main"
    class="weather"
  >
    <span
      v-for="i in 51"
      ref="box"
      :key="i"
      class="star"
    >
      <div class="star-icon" />
    </span>
    <div class="theme-toggle__container">
      <input
        id="switch"
        class="theme-toggle__input"
        type="checkbox"
        name="theme"
      >
      <label
        class="theme-toggle__label"
        for="switch"
      >
        {{ label }}
      </label>
      <span class="theme-toggle__icon">
        <svg
          id="Capa_1"
          class="sun"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512.001 512.001"
          style="enable-background:new 0 0 512.001 512.001;"
          xml:space="preserve"
          @click="toggleClass()"
        >
          <path
            id="sunwaves"
            style="fill:#FC9F65;"
            d="M507.384,247.159l-65.971-45.971c-8.184-5.703-17.266-9.337-26.583-10.977c5.429-7.748,9.281-16.74,11.035-26.559l14.143-79.155c1.319-7.384-5.12-13.823-12.504-12.504l-79.155,14.142c-9.819,1.754-18.811,5.606-26.559,11.035c-1.64-9.318-5.275-18.399-10.977-26.583L264.842,4.616c-4.288-6.154-13.395-6.154-17.683,0l-45.971,65.971c-5.703,8.184-9.337,17.265-10.977,26.583c-7.748-5.429-16.74-9.281-26.559-11.035L84.497,71.993c-7.384-1.319-13.823,5.12-12.504,12.504l14.142,79.155c1.754,9.819,5.606,18.811,11.035,26.559c-9.318,1.64-18.399,5.275-26.583,10.977L4.615,247.159c-6.154,4.288-6.154,13.395,0,17.683l65.971,45.971c8.184,5.703,17.265,9.337,26.583,10.977c-5.429,7.748-9.281,16.74-11.035,26.559l-14.142,79.155c-1.319,7.384,5.12,13.823,12.504,12.504l79.155-14.143c9.819-1.754,18.811-5.606,26.559-11.035c1.64,9.317,5.275,18.399,10.977,26.583l45.971,65.971c4.288,6.154,13.395,6.154,17.683,0l45.971-65.971c5.703-8.184,9.337-17.265,10.977-26.583c7.748,5.429,16.74,9.281,26.559,11.035l79.155,14.142c7.384,1.319,13.823-5.12,12.504-12.504l-14.143-79.155c-1.754-9.819-5.606-18.811-11.035-26.559c9.317-1.64,18.399-5.275,26.583-10.977l65.971-45.971C513.539,260.554,513.539,251.448,507.384,247.159z"
          />
          <circle
            style="fill:#FBDD56;"
            cx="256"
            cy="256.001"
            r="152.17"
          />
          <g>
            <ellipse
              style="fill:#FF6E6E;"
              cx="180.391"
              cy="242.441"
              rx="27.899"
              ry="22.22"
            />
            <ellipse
              style="fill:#FF6E6E;"
              cx="331.61"
              cy="242.441"
              rx="27.899"
              ry="22.22"
            />
          </g>
          <g>
            <path
              style="fill:#414B58;"
              d="M185.053,223.704c-4.143,0-7.5-3.358-7.5-7.5v-11.975c0-4.142,3.357-7.5,7.5-7.5s7.5,3.358,7.5,7.5v11.975C192.553,220.346,189.196,223.704,185.053,223.704z"
            />
            <path
              style="fill:#414B58;"
              d="M256,245.579L256,245.579c-11.163,0-20.213-9.05-20.213-20.213v-14.695c0-3.047,2.47-5.518,5.518-5.518h29.39c3.047,0,5.518,2.47,5.518,5.518v14.695C276.214,236.53,267.163,245.579,256,245.579z"
            />
            <path
              style="fill:#414B58;"
              d="M326.947,223.704c-4.143,0-7.5-3.358-7.5-7.5v-11.975c0-4.142,3.357-7.5,7.5-7.5s7.5,3.358,7.5,7.5v11.975C334.447,220.346,331.09,223.704,326.947,223.704z"
            />
          </g>
          <path
            style="opacity:0.08;enable-background:new;"
            d="M217.314,108.801c-65.302,17.116-113.482,76.529-113.482,147.2c0,84.04,68.128,152.168,152.169,152.168c30.053,0,58.068-8.716,81.663-23.752C143.684,368.06,127.593,174.323,217.314,108.801z"
          />
          <g
            id="small-sunwaves"
          >
            <path
              style="fill:#FC9F65;"
              d="M172.512,61.937c-2.943,0-5.735-1.744-6.932-4.632l-10.33-24.939
                c-1.586-3.827,0.231-8.214,4.059-9.799c3.826-1.585,8.214,0.233,9.799,4.059l10.33,24.939c1.586,3.827-0.231,8.214-4.059,9.799
                C174.441,61.753,173.469,61.937,172.512,61.937z"
            />
            <path
              style="fill:#FC9F65;"
              d="M54.431,180.012c-0.957,0-1.929-0.184-2.867-0.573l-24.938-10.33
                c-3.827-1.585-5.645-5.973-4.059-9.799c1.585-3.827,5.976-5.643,9.799-4.059l24.938,10.33c3.827,1.585,5.645,5.973,4.059,9.799
                C60.167,178.268,57.375,180.012,54.431,180.012z"
            />
            <path
              style="fill:#FC9F65;"
              d="M29.498,357.324c-2.943,0-5.735-1.744-6.932-4.632c-1.586-3.827,0.231-8.214,4.059-9.799
                l24.938-10.33c3.828-1.586,8.214,0.232,9.799,4.059c1.586,3.827-0.231,8.214-4.059,9.799l-24.938,10.33
                C31.427,357.14,30.455,357.324,29.498,357.324z"
            />
            <path
              style="fill:#FC9F65;"
              d="M162.176,490.008c-0.957,0-1.929-0.184-2.867-0.573c-3.827-1.586-5.645-5.973-4.059-9.799
                l10.33-24.939c1.585-3.827,5.975-5.643,9.799-4.059c3.827,1.586,5.645,5.973,4.059,9.799l-10.33,24.939
                C167.911,488.264,165.12,490.008,162.176,490.008z"
            />
            <path
              style="fill:#FC9F65;"
              d="M349.824,490.008c-2.943,0-5.735-1.744-6.932-4.632l-10.33-24.939
                c-1.586-3.827,0.231-8.214,4.059-9.799c3.828-1.585,8.214,0.233,9.799,4.059l10.33,24.939c1.586,3.827-0.231,8.214-4.059,9.799
                C351.753,489.824,350.78,490.008,349.824,490.008z"
            />
            <path
              style="fill:#FC9F65;"
              d="M482.503,357.324c-0.957,0-1.929-0.184-2.867-0.573l-24.939-10.33
                c-3.827-1.585-5.645-5.973-4.059-9.799c1.585-3.827,5.974-5.643,9.799-4.059l24.939,10.33c3.827,1.585,5.645,5.973,4.059,9.799
                C488.237,355.581,485.445,357.324,482.503,357.324z"
            />
            <path
              style="fill:#FC9F65;"
              d="M457.569,180.012c-2.943,0-5.735-1.744-6.932-4.632c-1.586-3.827,0.231-8.214,4.059-9.799l24.939-10.33c3.828-1.585,8.214,0.233,9.799,4.059c1.586,3.827-0.232,8.214-4.059,9.799l-24.939,10.33
                C459.498,179.828,458.525,180.012,457.569,180.012z"
            />
            <path
              style="fill:#FC9F65;"
              d="M339.488,61.937c-0.957,0-1.929-0.184-2.867-0.573c-3.827-1.585-5.645-5.973-4. 059-9.799l10.33-24.939c1.585-3.827,5.975-5.642,9.799-4.059c3.827,1.585,5.645,5.973,4.059,9.799l-10.33,24.939C345.224,60.193,342.432,61.937,339.488,61.937z"
            />
          </g>
        </svg>
        <svg
          id="Layer_1"
          class="moon moon--go-away"
          enable-background="new 0 0 497 497"
          height="512"
          viewBox="0 0 497 497"
          width="512"
          xmlns="http://www.w3.org/2000/svg"
          @click="toggleClass()"
        >
          <path
            d="m248.5 0c-66.377 0-128.781 25.849-175.716 72.784-46.935 46.936-72.784 109.34-72.784 175.716s25.849 128.78 72.784 175.716c46.935 46.935 109.339 72.784 175.716 72.784 17.487 0 34.693-1.812 51.418-5.313v-486.374c-16.725-3.501-33.931-5.313-51.418-5.313z"
            fill="#d4d4d5"
          />
          <path
            d="m497 248.5c0-66.376-25.849-128.78-72.784-175.716-34.57-34.57-77.538-57.683-124.298-67.471-46.761 9.788-89.728 32.901-124.298 67.471-46.935 46.936-72.784 109.34-72.784 175.716s25.849 128.78 72.784 175.716c34.57 34.57 77.538 57.683 124.298 67.471 46.761-9.788 89.728-32.901 124.298-67.471 46.935-46.936 72.784-109.34 72.784-175.716z"
            fill="#efedee"
          />
          <ellipse
            cx="169.331"
            cy="220.763"
            fill="#ff8e9e"
            rx="29.212"
            ry="23.263"
            transform="matrix(1 .003 -.003 1 .693 -.529)"
          />
          <ellipse
            cx="327.669"
            cy="221.259"
            fill="#ff8e9e"
            rx="29.212"
            ry="23.263"
            transform="matrix(-1 -.003 .003 -1 654.644 443.544)"
          />
          <path
            id="moon-eye--left"
            d="m184 178.5c-4.142 0-7.5 3.358-7.5 7.5v10c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10c0-4.142-3.358-7.5-7.5-7.5z"
            fill="#313d40"
          />
          <path
            id="moon-eye--right"
            d="m312 178.5c-4.142 0-7.5 3.358-7.5 7.5v10c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10c0-4.142-3.358-7.5-7.5-7.5z"
            fill="#313d40"
          />
          <path
            d="m267.735 207.234c-3.737-1.789-8.215-.206-10.001 3.531-1.666 3.484-5.291 5.735-9.234 5.735s-7.568-2.251-9.234-5.735c-1.787-3.737-6.266-5.317-10.001-3.531-3.737 1.787-5.318 6.265-3.531 10.001 4.144 8.666 13.08 14.265 22.766 14.265s18.623-5.599 22.766-14.265c1.787-3.736.206-8.215-3.531-10.001z"
            fill="#313d40"
          />
          <g
            fill="#d4d4d5"
          >
            <circle
              cx="396.336"
              cy="296.5"
              r="45"
            />
            <circle
              cx="176.335"
              cy="116.5"
              r="30"
            />
            <circle
              cx="304.5"
              cy="413.5"
              r="15"
            />
          </g>
          <circle
            cx="60"
            cy="248.5"
            fill="#b9bbbc"
            r="15"
          />
          <circle
            cx="366.336"
            cy="101.5"
            fill="#d4d4d5"
            r="15"
          />
          <path
            d="m175.962 424.553-61.848-101.686c-14.638 10.941-24.114 28.408-24.114 48.089 0 33.137 26.863 60 60 60 9.437 0 18.019-2.521 25.962-6.403-.227-.226.227.227 0 0z"
            fill="#b9bbbc"
          />
          <path
            d="m210.001 370.956c0-33.137-26.863-60-60-60-13.456 0-25.878 4.43-35.886 11.911 11.814 37.841 33.016 72.854 61.848 101.686.227.227-.228-.226 0 0 19.95-9.748 34.038-29.896 34.038-53.597z"
            fill="#d4d4d5"
          />
          <path
            d="m40.416 40.416c4.627-1.191 8.983-3.058 12.956-5.49 4.837-2.96 4.837-9.892 0-12.852-3.973-2.431-8.329-4.298-12.956-5.489-1.191-4.627-3.058-8.983-5.49-12.956-2.96-4.837-9.892-4.837-12.852 0-2.432 3.973-4.298 8.329-5.49 12.957-4.627 1.191-8.983 3.058-12.956 5.489-4.837 2.96-4.837 9.892 0 12.852 3.973 2.432 8.329 4.299 12.956 5.49 1.191 4.627 3.058 8.983 5.49 12.956 2.96 4.837 9.892 4.837 12.852 0 2.432-3.974 4.299-8.33 5.49-12.957z"
            fill="#ffce71"
          />
          <path
            d="m440.465 440.615c6.494-1.672 12.608-4.292 18.184-7.705 6.789-4.155 6.789-13.883 0-18.038-5.576-3.413-11.69-6.033-18.184-7.704-1.672-6.494-4.292-12.608-7.705-18.185-4.155-6.789-13.883-6.789-18.038 0-3.413 5.576-6.033 11.69-7.705 18.185-6.494 1.672-12.608 4.292-18.184 7.704-6.789 4.155-6.789 13.883 0 18.038 5.576 3.413 11.69 6.033 18.184 7.705 1.672 6.494 4.292 12.607 7.705 18.184 4.155 6.789 13.883 6.789 18.038 0 3.413-5.577 6.033-11.691 7.705-18.184z"
            fill="#ffce71"
          />
        </svg>
        <div
          class="accessibility"
        >
          Icons made by
          <a
            href="https://www.freepik.com"
            title="Freepik"
          >
            Freepik
          </a> from
          <a
            href="https://www.flaticon.com/"
            title="Flaticon"
          >
            www.flaticon.com
          </a>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
export default {

    data: function() {
        return {
            label: "Toggle",
            isActive: true
        };
    },
    async mounted() {
        // wait for $refs to be available
        await this.$nextTick()

        const sun = document.querySelector(".sun");
        const moon = document.querySelector(".moon");

        if (document.cookie.indexOf('darkMode') > -1 ) {
            console.log('cookie set')
            document.querySelector(".header").classList.add("header--dark");
            document.querySelector("body").classList.add("template--dark");
            this.makeStars(true);
            moon.classList.remove("moon--go-away");
            sun.style.opacity = '0';
            sun.classList.add("sun--go-away");
        } else {
            console.log('cookie not set');
            this.makeStars(false);
            moon.style.opacity = '0';
        }
    },
    methods: {

        makeStars: function(dark) {
            if (dark == true) {
                console.log('show stars')
                this.$refs.box.forEach(box => {
                    box.style.left = Math.random() * (this.$refs.main.clientWidth - box.clientWidth) + 'px'
                    box.style.top = Math.random() * (this.$refs.main.clientHeight - box.clientHeight) + 'px'
                    box.style.opacity = '1';
                })
            } else {
                console.log('hide stars')
                this.$refs.box.forEach(box => {
                    box.style.opacity = '0';
                })
            }
        },

        makeLight: function(sun, moon) {
            document.cookie = "darkMode=True; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            console.log('cookie destroyed')
            document.querySelector("body").classList.remove("template--dark");
            document.querySelector(".header").classList.remove("header--dark");
            sun.style.opacity = '1';
            sun.classList.remove("sun--go-away");
            sun.style.transition = "all 5s";
            moon.classList.add("moon--go-away");
            moon.style.transition = "all 5s";
            this.makeStars(false);
        },

        makeDark: function(sun, moon) {
            // document.cookie = "darkMode=True; SameSite=None; Secure";
            document.querySelector("body").classList.add("template--dark");
            document.querySelector(".header").classList.add("header--dark");
            sun.classList.add("sun--go-away");
            sun.style.transition = "all 5s";
            moon.style.opacity = '1';
            moon.style.transition = "all 5s";
            moon.classList.remove("moon--go-away");
            this.makeStars(true);
        },

        toggleClass: function() {

            const sun = document.querySelector(".sun");
            const moon = document.querySelector(".moon");

            if (document.cookie.indexOf('darkMode') > -1 ) {
                this.makeLight(sun, moon);
                document.cookie = "darkMode=True; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                document.cookie = "clickedDarkMode=True; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                document.cookie = "clickedLightMode=True; SameSite=None; Secure";
            } else {
                document.cookie = "clickedLightMode=True; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                document.cookie = "clickedDarkMode=True; SameSite=None; Secure";
                document.cookie = "darkMode=True; SameSite=None; Secure";
                this.makeDark(sun, moon)
            }
        },

    }
}
</script>

<style lang="scss" scoped>

    .theme-toggle__container {
        max-height: 0;
    }

    .theme-toggle__input {
        height: 0;
        width: 0;
        visibility: hidden;
    }

    .theme-toggle__label {
        display: none;
    }

    .weather {
        position: absolute;
        z-index: 2;
        height: 100vh;
        width: 100vw;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .sun {
        cursor: pointer;
        max-width: 100px;
        position: absolute;
        bottom: calc(100% - 120px);
        left: 40px;
        &:focus {
            transform: scale(1.1);
        }
        &--go-away {
            bottom: 0;
        }
    }

    .moon {
        cursor: pointer;
        max-width: 100px;
        position: absolute;
        bottom: calc(100% - 120px);
        left: 40px;
        &:focus {
            transform: scale(1.1);
        }
        &--go-away {
            bottom: 0;
        }
    }

    .star {
        position: absolute;
        max-width: 20px;
        width: 100%;
        transition: 5s ease-in-out opacity;
        animation: twinkle 2s infinite;
        opacity: 0;
        &-icon {
            width: 8px;
            height: 8px;
            background: radial-gradient(var(--color-primary), transparent 75%);
            border-radius: 100%;
        }
    }

    #sunwaves,
    #small-sunwaves {
        animation: sunburst 15s linear infinite;
        transition: 5s ease-in-out transform;
        transform-origin: center;
    }

    @keyframes sunburst {
    from {
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
    }

    @keyframes twinkle {
        0% {
            transform: scale(1)
        }
        50% {
            transform: scale(1.25)
        }
        100% {
            transform: scale(1)
        }
    }

    @media (max-width: 640px) {
        .moon,
        .sun {
            top: 20px;
            left: 20px;
            max-width: 50px;
            &--go-away {
                top: 100vh;
            }
        }
        .star {
            max-width: 10px;
        }
    }


</style>