import type { FetchContext } from 'ofetch'
import type { ConsolaInstance } from 'consola'
import type { NuxtApp } from '#app'

export default defineAppConfig({
    sanctum: {
        interceptors: {
            onRequest: async (
                app: NuxtApp,
                ctx: FetchContext,
                logger: ConsolaInstance
            ) => {
                console.log(ctx)
                ctx.options.headers.append('accept','application/json')
                logger.debug(`custom onRequest interceptor (${ctx.request})`);
            },

            onResponse: async (
                app: NuxtApp,
                ctx: FetchContext,
                logger: ConsolaInstance
            ) => {
                console.log('s')
                logger.debug(`custom onResponse interceptor (${ctx.request})`);
            },
        },
    },
});
