<template>
    <div v-if="!parent[name][rule] && parent.$dirty" class="invalid-feedback">
        <span>{{ $localization[rule] }}</span>
    </div>
</template>

<script>
    export default {
        name: "ValidatorError",
        props: {
            name: {
                required: true,
                type: String,
            },
            parent: {
                required: true,
                type: Object,
            },
            rule: {
                required: true,
                type: String,
            }
        }
    }
</script>
