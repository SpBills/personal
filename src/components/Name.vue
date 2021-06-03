<template>
    <h1>{{ text }} <span class="blink">_</span></h1>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true,
            default: "",
        },
    },
};
</script>

<style scoped>
h1 {
    white-space: nowrap;
}

.blink {
    -webkit-animation: 1.5s blink step-end infinite;
    -moz-animation: 1.5s blink step-end infinite;
    -ms-animation: 1.5s blink step-end infinite;
    -o-animation: 1.5s blink step-end infinite;
    animation: 1.5s blink step-end infinite;
}

@keyframes blink {
  from, to {
    color: transparent;
  }
  50% {
    color: black;
  }
}

@-moz-keyframes blink {
  from, to {
    color: transparent;
  }
  50% {
    color: black;
  }
}

@-webkit-keyframes blink {
  from, to {
    color: transparent;
  }
  50% {
    color: black;
  }
}

@-ms-keyframes blink {
  from, to {
    color: transparent;
  }
  50% {
    color: black;
  }
}

@-o-keyframes blink {
  from, to {
    color: transparent;
  }
  50% {
    color: black;
  }
}
</style>
