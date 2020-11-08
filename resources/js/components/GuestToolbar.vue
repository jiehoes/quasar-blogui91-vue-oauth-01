<template>
    <q-toolbar>
        <q-toolbar-title>
            <q-avatar>
                <img src="/statics/app-logo-128x128.png">
            </q-avatar>
            {{ appName }}
        </q-toolbar-title>

        <locale-dropdown/>
    </q-toolbar>
</template>

<script>
import LocaleDropdown from './LocaleDropdown'

export default {
    components: {
        LocaleDropdown
    },

    data: () => ({
        appName: window.config.appName
    })
}
</script>
