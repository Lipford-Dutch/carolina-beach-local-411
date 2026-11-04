// Vinext reads the optional `tracing` export only when it is available in the
// Cloudflare runtime. Local Node SSR tests and the static exporter do not trace.
export const tracing = undefined;
