<template>
  <img :src="imageLink" class="w-8 h-8 object-contain rounded-3xl" />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png",
    };
  },
};
</script>
