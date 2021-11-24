<template>
  <label :for="inputInfo.inputName" class="flex flex-col"
    >{{ inputInfo.labelText }}
    <input
      type="text"
      :value="message"
      @input="$emit('input', $event.target.value)"
      :name="inputInfo.inputName"
    />
  </label>
</template>
<script>
export default {
  props: ["inputInfo", "message"],
};
</script>