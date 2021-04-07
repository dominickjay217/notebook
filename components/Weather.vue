<template>
  <div class="theme-toggle">
		<button class="button theme-button-toggle" aria-pressed="true" @click="toggleSetting()">This is our dark mode button
		</button>
	</div>
</template>

<script>
export default {
  methods: {

    getSetting: function() {
      const colorMode = '--color-mode';
      let computedStyle = getComputedStyle(document.documentElement).getPropertyValue(colorMode);
      if (computedStyle.length) {
        computedStyle = computedStyle.replace(/\"/g, '').trim();
      }
      return computedStyle;
    },

    applySetting: function(passedSetting) {
      const colorTheme = 'user-color-theme';
      const colorMode = '--color-mode';
      let currentSetting = passedSetting || localStorage.getItem(colorTheme);
      if (currentSetting) {
        document.documentElement.setAttribute('data-user-color-scheme', currentSetting);
        localStorage.setItem(colorTheme, currentSetting);
      }
      return currentSetting;
    },

    switchSetting: function() {
      const colorTheme = 'user-color-theme';
      const colorMode = '--color-mode';
      let currentSetting = localStorage.getItem(colorTheme);
      switch (currentSetting) {
        case "null":
          currentSetting = this.getSetting(colorMode) === 'dark' ? 'light' : 'dark';
          break;
        case 'light':
          currentSetting = 'dark';
          break;
        case 'dark':
          currentSetting = 'light';
          break;
      }

      localStorage.setItem(colorTheme, currentSetting);

      return currentSetting;
    },

    toggleSetting: function(){
      this.applySetting(this.switchSetting());
    }
  }
}
</script>

<style lang="scss">
:root {
	--background: #efefef;
  --color-dark: #141414;
  --color-light: #efefef;
  --button-background: var(--color-dark);
  --button-color: var(--color-light);
	--color-mode: 'light';
}

@media (prefers-color-scheme: dark) {
	:root {
		--color-mode: 'dark';
	}

  :root:not([data-user-color-scheme]) {
    --button-color: var(--color-dark);
    --button-background: var(--color-light);
    --background: var(--color-dark);
    --text-color: var(--color-light);
  }
}

[data-user-color-scheme='dark'] {
  --button-color: var(--color-dark);
  --button-background: var(--color-light);
	--background: var(--color-dark);
}

.header {
  background: var(--background);
}

.theme-toggle {
  position: relative;
  z-index: 1;
}

.button {
	position: absolute;
	top: 20px;
	left: 20px;
  background: var(--button-background);
  color: var(--button-color);
	border: none;
	padding: 5px 10px;
  cursor: pointer;
}
</style>