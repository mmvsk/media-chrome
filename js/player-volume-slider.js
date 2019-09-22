import PlayerChromeSlider from './player-chrome-slider.js';

class PlayerVolumeSlider extends PlayerChromeSlider {
  constructor() {
    super();
  }

  connectedCallback() {
    // Parent element player properties are undefined when
    // connectedCallback is first called. Not exactly sure why.
    // Muation observer might be a cleaner approach.
    window.setTimeout(() => {
      const player = this.player;

      player.addEventListener('volumechange', this.update.bind(this));

      this.range.addEventListener('input', () => {
        const player = this.player;

        const volume = this.range.value / 1000;
        player.volume = volume;

        // If the viewer moves the volume we should unmute for them.
        if (volume > 0 && player.muted) {
          player.muted = false;
        }
      });

      // Store the last set positive volume before a drag
      // so we have it when unmuting
      this.range.addEventListener('mousedown', () => {
        const volume = this.player.volume;

        if (volume > 0) {
          this.lastNonZeroVolume = volume;
        }
      });

      this.range.addEventListener('change', () => {
        const player = this.player;

        // If the user is just sliding the volume to zero, we want to treat
        // that the same as muting. And when they unmute, go back to the volume
        // that was previously set.
        if (player.volume == 0) {
          player.muted = true;
          player.volume = this.lastNonZeroVolume || 1;
        }

        // Store the last set volume as a local preference, if ls is supported
        try {
          window.localStorage.setItem(
            'player-chrome-pref-volume',
            player.volume.toString()
          );
        } catch (e) {}
      });

      // Update the player with the last set volume preference
      try {
        const volPref = window.localStorage.getItem(
          'player-chrome-pref-volume'
        );
        player.volume = volPref;
      } catch (e) {}

      this.update();
    }, 0);
  }

  update() {
    const player = this.player;
    const range = this.range;

    if (player.muted) {
      range.value = 0;
    } else {
      range.value = Math.round(player.volume * 1000);
    }
  }
}

window.customElements.define('player-volume-slider', PlayerVolumeSlider);

export default PlayerVolumeSlider;