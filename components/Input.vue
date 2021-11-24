<template>
  <label :for="inputInfo.inputName"
    >{{ inputInfo.labelText }}
    <input
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :name="inputInfo.inputName"
    />
  </label>
</template>
<script>
export default {
  props: ["inputInfo", "value"],
};
</script>