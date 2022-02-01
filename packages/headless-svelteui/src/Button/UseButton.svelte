<script>
  import { styled } from '../theme/src/index'
  import theme from '../theme/theme'

  function handleClick() {
    buttonText += " Clicked";
  }
</script>

<button on:click={handleClick} use:styled={[$$props, $theme]} ><slot /></button>
